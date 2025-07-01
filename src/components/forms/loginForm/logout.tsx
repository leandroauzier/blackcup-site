"use client";
import { CurrentUserContext } from "@/lib/client/current-user-context";
import { constApiRoute } from "@/lib/routes/apiRoutes";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

export default function LogOut() {
  const { setCurrentUser } = React.useContext(CurrentUserContext);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch(constApiRoute.logout, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (!response.ok) {
        console.error("Falha ao realizar logout:", await response.json());
      } else {
        console.log("Logout realizado com sucesso");
      }
    } catch (error) {
      console.error("Erro ao tentar remover o cookie de sessão:", error);
    }

    setCurrentUser("nao-logado");

    Swal.fire({
      icon: "warning",
      title: "Logout realizado",
      text: "Você acabou de sair da sua conta Escon",
    }).then(() => {
      router.push('/');
    });
  };

  return (
    <button
      color="danger"
      className="p-4 w-full justify-center text-red-500 dark:hover:bg-zinc-300"
      onClick={handleLogout}
    >
      Sair
    </button>
  );
}
