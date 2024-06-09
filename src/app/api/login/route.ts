import prisma from "@/lib/db";
import { Usuario } from "@prisma/client";
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

// type UsuarioSemSenha = Omit<Usuario, "senha">
type UsuarioSemSenha = {

}

export async function POST(req: NextRequest, res: NextResponse) {
  const { cpf, senha } = await req.json();
  console.log("AUTENTICACAO DE CREDENCIAIS: " + cpf, senha);

  if (!cpf || !senha) {
    return NextResponse.json({ error: 'CPF e senha necessários' }, { status: 400 });
  }

  try {
    const user = await prisma.usuario.findUnique({
      where: {
        cpf: cpf,
      },
    });

    if (!user || !user.senha) {
      return NextResponse.json({ error: 'Dados incorretos' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);

    if (isPasswordValid) {
      const resultCookie = String(user.id);
      const hashedCookie = await bcrypt.hash(resultCookie, 10);
      const cookieOptions = [
        `HttpOnly`,
        `SameSite=Strict`,
        `Path=/`,
         `Max-Age=${60 * 60 * 24 * 7}`, // 1 semana em segundos
        //`Max-Age=${3}`, // 3 segundos
      ].join('; ');
      const currentUser: UsuarioSemSenha = {
        ...user,
        senha:null
      }
      return NextResponse.json({currentUser}, {
        status: 200,
        headers: {
          'Set-Cookie': `sessionId=${hashedCookie}; ${cookieOptions}`,
        },
      });
    } else {
      return NextResponse.json({ error: 'Sessão Expirada' }, { status: 401 });
    }
  } catch (error) {
    console.error('Error finding user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
