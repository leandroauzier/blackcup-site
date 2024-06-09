"use client";
import { CurrentUserContext } from "@/lib/client/current-user-context";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function LogOut() {
  const { setCurrentUser } = React.useContext(CurrentUserContext);
  const router = useRouter();

  return (
    <Button
      className="p-4 w-full text-red-500"
      variant="text"
      onClick={() => {
        setCurrentUser("nao-logado");
        router.refresh();
      }}
    >
      Sair
    </Button>
  );
}