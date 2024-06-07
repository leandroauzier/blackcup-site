import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/db";
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
  const { cpf, senha } = await req.json();
  console.log("AUTENTICACAO DE CREDENCIAIS: " + cpf, senha);
  
  if (!cpf || !senha) {
    return NextResponse.json({ error: 'CPF and password are required' }, { status: 400 });
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
      console.log("RETORNA USUARIO: " + user.name, user.cpf);
      return NextResponse.json({ user }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Dados incorretos' }, { status: 401 });
    }
  } catch (error) {
    console.error('Error finding user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
