import prisma from "@/lib/db";
import bcrypt from "bcrypt"
import { NextRequest, NextResponse } from "next/server";

interface Usuario {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  escolaridade: string;
  senha?: string;
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        if (!body) {
            return new NextResponse("Dados não fornecidos", { status: 400 });
        }

        const { nome, email, telefone, escolaridade, senha } = body;

        if (!nome || !email || !senha) {
            return new NextResponse("Nome, e-mail e senha são obrigatórios", { status: 400 });
        }

        const existeUserEmail = await prisma.usuario.findUnique({
            where: {
                email,
            },
        });

        if (existeUserEmail) {
            return new NextResponse("E-mail já cadastrado", { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(senha, 10);

        const novoUsuario = await prisma.usuario.create({
            data: {
                nome,
                email,
                telefone,
                escolaridade,
                senha: hashedPassword,
            },
        });
        // Remove a senha antes de retornar
        const { senha: _, ...usuarioSemSenha } = novoUsuario;

        return NextResponse.json(usuarioSemSenha, { status: 201 });
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        return new NextResponse("Erro interno do servidor", { status: 500 });
    }
}