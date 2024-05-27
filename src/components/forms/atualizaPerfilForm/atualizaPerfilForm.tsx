import { Button, Typography } from "@material-tailwind/react";
import React from "react";

type AtualizaPerfilFormProps = {
  closeModal: () => void;
};

export default function AtualizaPerfilForm({ closeModal }: AtualizaPerfilFormProps) {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-md">
        <Typography
          variant="h2"
          color="blue"
        >
          Digite as novas informações
        </Typography>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="nome" className="block dark:text-white text-lg font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              autoComplete="nome"
              className="mt-1 block bg-white w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefone" className="block dark:text-white  text-lg font-medium text-gray-700">
              Telefone
            </label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              autoComplete="tel"
              className="mt-1 block w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block dark:text-white  text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="mt-1 block w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="escolaridade" className="block dark:text-white  text-lg font-medium text-gray-700">
              Escolaridade
            </label>
            <select
              id="escolaridade"
              name="escolaridade"
              autoComplete="escolaridade"
              className="mt-1 block w-full px-3 bg-white dark:text-black py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
            >
              <option value="fundamental">Fundamental</option>
              <option value="medio">Médio</option>
              <option value="superior">Superior</option>
            </select>
          </div>
          <Button type="submit" className="mr-2 p-4 bg-purple-700">Enviar</Button>
          <Button onClick={closeModal}className="p-4 bg-gray-500">Fechar</Button>
        </form>
      </div>
    </>
  );
}