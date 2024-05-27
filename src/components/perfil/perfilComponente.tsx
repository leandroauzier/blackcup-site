'use client'
import { Button, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import UnidadeDadosPerfil from "./UnidadeDadosPerfil";
import AtualizaPerfilForm from "../forms/atualizaPerfilForm/atualizaPerfilForm";

type PerfilComponentProps = {
  nome?: string,
  email?: string,
  cpf?: string,
  escolaridade?: string,
  telefone?: string,
}

export default function PerfilComponent({
  nome="Sem nome",
  cpf="000.000.000-00" ,
  email="semEmail@email.com",
  escolaridade="Sem escolaridade",
  telefone="(XX) 9XXXX-XXXX"
} : PerfilComponentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex justify-center mt-20 text-center bg-black">
        <div className="flex flex-col border-1 rounded-lg shadow-md container">
          <div className="flex flex-col h-[150px]">
            <Typography
              className="flex dark:text-yellow-500 justify-center text-center pt-4"
              variant="h2"
              color="blue"
              placeholder="teste"
            >
              Meu perfil
            </Typography>
            <Typography
              className="flex dark:text-white justify-center text-center pt-4"
              variant="lead"
              color="blue-gray"
              placeholder="Subtitulo"
            >
              Informações da sua conta BlackCup
            </Typography>
          </div>
          <hr />
          <div className="flex-col justify-center text-center h-[600px]">
            <div className="grid grid-cols-3">
              <UnidadeDadosPerfil label="Nome" data={nome} />
              <UnidadeDadosPerfil label="CPF" data={cpf} />
              <UnidadeDadosPerfil label="Telefone" data={telefone}/>
              <UnidadeDadosPerfil label="Escolaridade" data={escolaridade}/>
              <UnidadeDadosPerfil label="Email" data={email} />
            </div>
            <div className=" mt-4">
              <Button onClick={openModal} className="bg-purple-900 p-4">
                Editar informações
              </Button>
            </div>
            {isModalOpen && (
              <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
                <AtualizaPerfilForm closeModal={closeModal}/>
              </div>
            )}

          </div>

        </div>
      </div>
    </>
  );
}