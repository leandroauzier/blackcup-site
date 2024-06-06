"use client"

import React, { useState } from "react";
import { signInEscon } from "@/lib/auth/auth";
import { useRouter } from "next/navigation";
import { Route } from "@/lib/routes";
import { CurrentUserContext } from "@/lib/client/current-user-context";

const LoginIn: React.FC = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const { setCurrentUser } = React.useContext(CurrentUserContext);

  const router = useRouter()

  const handleInputCPF = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCPF = event.target.value.replace(/\D/g, '');
    const cpfWithMask = formattedCPF.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );

    setCpf(cpfWithMask);
  };
  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const unmaskedCpf = cpf.replace(/\D/g, '');
    const creds = {
      cpf: unmaskedCpf,
      senha: senha,
    }

    try {
      const result = await signInEscon(creds);

      if (result.kind === 'error') {
        throw new Error('Usuário não encontrado');
      }

      setCurrentUser(result.user);
      router.push(Route.link.home);
    } catch (error: any) {
      console.error("Login error:", error);
      alert(error.message);
    }
  }

  return (
    <>
      <div className="max-w-sm mx-auto">
        <form onSubmit={login}>
          <div className="mb-5">
            <label
              htmlFor="cpf"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              CPF
            </label>
            <input
              type="txt"
              id="cpf"
              name="cpf"
              value={cpf}
              maxLength={14}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Somente numeros"
              onChange={handleInputCPF}
              required />
          </div>
          <div className="mb-5">
            <label
              htmlFor="senha"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Mínimo 8 dígitos"
              onChange={(e) => setSenha(e.target.value)}
              minLength={8}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required />
          </div>
          <button
            type="submit"
            className="my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Entrar
          </button>

        </form>
        <a href={Route.link.cadastro}>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Criar Conta
          </button>
        </a>
      </div>

    </>
  );
}
export default LoginIn;