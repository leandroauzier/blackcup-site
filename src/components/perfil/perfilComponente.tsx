'use client'
import { CurrentUserContext } from "@/lib/client/current-user-context";
import loading from "@/utils/loading";
import { Button, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import AtualizaPerfilForm from "../forms/atualizaPerfilForm/atualizaPerfilForm";
import UnidadeDadosPerfil from "./UnidadeDadosPerfil";

export default function PerfilComponent() {
  const { currentUser } = React.useContext(CurrentUserContext)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (currentUser === "carregando") {
    return loading();
  }

  if (currentUser === "nao-logado") {
    return null
  }

  return (
    <>
      <div className="flex justify-center mt-20 text-center">
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
          <div className="flex-col justify-center text-center md:h-[450px]">
            <div className="py-4 px-8">
              <hr />
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
                <UnidadeDadosPerfil label="Nome" data={currentUser?.nome} />
                <UnidadeDadosPerfil label="CPF" data={currentUser?.cpf} />
                <UnidadeDadosPerfil label="Telefone" data={currentUser?.telefone} />
                <UnidadeDadosPerfil label="Escolaridade" data={currentUser?.escolaridade} />
                <UnidadeDadosPerfil label="Email" data={currentUser?.email} />
              </div>
              <div className=" mt-4">
                <Button
                  onClick={openModal}
                  className="bg-blue-500 dark:bg-yellow-700 dark:text-black"
                >
                  Editar dados pessoais
                </Button>
              </div>
              {isModalOpen && (
                <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
                  <AtualizaPerfilForm closeModal={closeModal} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}