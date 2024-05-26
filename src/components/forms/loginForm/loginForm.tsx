"use client"

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { constRoutes } from "@/lib/routes/routes";

const LoginIn: React.FC = () => {
  const [cpf, setCpf] = useState('');
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
    const formData = new FormData(e.currentTarget);

    const data = {
      cpf: formData.get("cpf") as string,
      senha: formData.get("senha") as string,
    }
    console.log(data);
    
    // signIn("credentials", {
    //   ...data,
    //   callbackUrl: "/",
    // });
    try {
      const response = await signIn("credentials", {
        ...data,
        redirect: false,
        callbackUrl: "/",
      });
      
      if (!response) {
        throw new Error("Sem resposta");
      }

      if (response.error) {
        const statusCode = response.status || 400;
        let errorMessage = response.error;

        if (statusCode === 404) {
          errorMessage = "Usuário não encontrado";
        } else if (statusCode === 401) {
          errorMessage = "Credenciais inválidas";
        } else {
          errorMessage = `Erro ao fazer login: ${errorMessage}`;
        }
        throw new Error(errorMessage);
      }

      // Redireciona para a URL de callback
      if (response.url) {
        window.location.href = response.url;
      }
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
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
              minLength={8}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              required />
          </div>
          {/* <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
          <input
          id="remember"
          type="checkbox"
          value=""
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          required />
          </div>
          <label
          htmlFor="remember"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Lembrar-me
          </label>
        </div> */}
          <button
            type="submit"
            className="my-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
            Entrar
          </button>

        </form>
        <div className="text-black dark:text-white py-2">
          <span>não tem uma conta?</span>
        </div>
        <a href={constRoutes.cadastro}>
          <button
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
            Criar Conta
          </button>
        </a>
      </div>

    </>
  );
}
export default LoginIn;