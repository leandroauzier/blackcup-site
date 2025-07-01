import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import bcrypt from "bcrypt";

/**
 * Constrói o header Set‑Cookie de forma segura.
 * Ajuste SameSite e Domain conforme a topologia do seu front/back.
 */
function buildSessionCookie(token: string) {
  const base: string[] = [
    `sessionId=${token}`,
    "HttpOnly",
    "Path=/",
    `Max-Age=${60 * 60 * 24 * 7}`, // 1 semana
  ];

  if (process.env.NODE_ENV === "production") {
    base.push("Secure"); // exige HTTPS
    // Se front e back estiverem em domínios diferentes, troque para None
    base.push("SameSite=Lax");
    // base.push("SameSite=None");
    // base.push("Domain=.seu-dominio.com.br");
  } else {
    // Dev/localhost
    base.push("SameSite=Lax");
  }

  return base.join("; ");
}

/**
 * POST /api/auth/login
 * Body: { email: string; senha: string }
 */
export async function POST(req: NextRequest) {
  try {
    const { email, senha } = await req.json();

    if (!email || !senha) {
      return NextResponse.json({ error: "Email e senha necessários" }, { status: 400 });
    }

    // 1) Localiza usuário
    const user = await prisma.usuario.findUnique({ where: { email } });

    if (!user || !user.senha) {
      return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
    }

    // 2) Valida senha
    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
    }

    // 3) Gera token de sessão
    const token = randomBytes(32).toString("hex");

    // 4) Persiste sessão (crie o modelo Session no seu schema.prisma)
    await prisma.session.create({
      data: {
        id: token, // PK
        usuarioId: user.id, // FK
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 1 sem
      },
    });

    // 5) Monta cookie
    const cookieHeader = buildSessionCookie(token);

    // 6) Retorna usuário sem senha
    const { senha: _omit, ...usuarioSemSenha } = user;

    return NextResponse.json(
      { currentUser: usuarioSemSenha },
      {
        status: 200,
        headers: { "Set-Cookie": cookieHeader },
      },
    );
  } catch (error) {
    console.error("Erro ao autenticar:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
