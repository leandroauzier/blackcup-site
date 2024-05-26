"use client";
import { Button } from "@material-tailwind/react";
import { signOut } from "next-auth/react";

export default function LogOut() {
  return (
    <Button
      className="p-4 w-full text-red-500"
      variant="text"
      onClick={() => signOut()}
    >
      Sair
    </Button>
  );
}