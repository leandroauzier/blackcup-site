import { strict } from "assert";
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logout realizado" });

  response.cookies.set({
    name: "sessionId",
    value: "",
    httpOnly: true,
    sameSite: "strict",
    secure: false,
    // domain: ".apps.ocp4.tce.local",
    path: "/",
    maxAge: 0,
  })

  return response;
}
