import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const users = await prisma.usuario.findMany();
        return Response.json(users, {status: 200});
    } catch (error) {
        return NextResponse.json({
            message: "Error",
            error
        },
            {
                status: 500,
            }
        );
    }
}