import prisma from "@/lib/db";
import bcrypt from "bcrypt"
import { NextRequest, NextResponse } from "next/server";

interface Usuario {
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
    escolaridade: string;
    senha?: string;
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        console.log("BODY :"+body); 

        if (!body) {
            return new NextResponse("Dados não fornecidos", { status: 400 });
        }

        const { nome, email, cpf, telefone, escolaridade, senha } = body;        

        if (!nome || !email || !cpf || !senha) {
            return new NextResponse("Existem campos em branco", { status: 400 })
        }

        const existeUser = await prisma.usuario.findUnique({
            where: {
                cpf,
            }
        });

        if (existeUser) {
            return new NextResponse("CPF já existe", {status: 400})
        }

        const existeUserEmail = await prisma.usuario.findUnique({
            where: {
                email,
            },
        });

        if (existeUserEmail) {
            return new NextResponse("E-mail já existe", { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(senha, 10);

        const user = await prisma.usuario.create({
            data: {
                nome,
                email,
                cpf,
                telefone,
                escolaridade,
                senha: hashedPassword,
            },
        });
        const userWithoutPassword = { ...user } as Usuario;
        delete userWithoutPassword.senha;
        return NextResponse.json(userWithoutPassword, {status: 201})
    } catch (error) {
        console.error(error);
        return new NextResponse("Erro interno do servidor", { status: 500 });
    }
}