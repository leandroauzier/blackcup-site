"use client"

import { UserResult } from "@/lib/client/current-user";
import { CurrentUserContext } from "@/lib/client/current-user-context";
import { constRoutes } from "@/lib/routes/routes";
import generateInitialsImage from "@/utils/generateInitialsImage";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import LogOut from "../forms/loginForm/logout";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

type AccountdropdownProps = {
  currentUser: UserResult;
};

export default function Accountdropdown({ currentUser }: AccountdropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [nomeSimplificado, setNomeSimplificado] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    // Se o objeto user for diferente de null
    if (typeof currentUser === "object" && currentUser !== null && "nome" in currentUser) {
      const nomeLimpo = currentUser.nome.replace(/[^\w\s]/gi, '');
      const palavras = nomeLimpo.split(/\s+/);
      let nomeSimplificadoTemp = '';

      if (palavras.length > 1) {
        nomeSimplificadoTemp = `${palavras[0]} ${palavras[palavras.length - 1]}`;
      } else if (palavras.length === 1) {
        nomeSimplificadoTemp = palavras[0];
      }

      setNomeSimplificado(nomeSimplificadoTemp);
    }
  }, [currentUser]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (currentUser === "carregando") {
    return <p className="text-white">Carregando...</p>;
  }
  if (currentUser === "nao-logado") {
    return (
      <>
        <div>
          <Link href={constRoutes.login} target="_self">
          <Button className="text-white font-bold bg-purple-700 p-4 text-sm" variant="filled">
              Entrar
            </Button>
          </Link>
        </div>
        <div>
          <Link href={constRoutes.cadastro} target="_self">
            <Button className="text-white font-bold bg-purple-700 p-4 text-sm" variant="filled">
              Cadastrar-se
            </Button>
          </Link>
        </div>
      </>
    );
  }

  let imgSrc = generateInitialsImage(currentUser.nome, true);
  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          id="dropdownAvatarNameButton"
          data-dropdown-toggle="dropdownAvatarName"
          className="flex items-center justify-center py-2 text-sm pe-1 w-60 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-700 dark:text-white"
          type="button"
          onClick={toggleDropdown}
        >
          <Image
            className="w-8 h-8 me-2 rounded-full"
            src={imgSrc}
            alt="user photo"
            width={50}
            height={50}
          />
          {nomeSimplificado}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* Dropdown menu */}
        <div
          id="dropdownAvatarName"
          className={`${isOpen ? "block" : "hidden"}
          absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-60 dark:bg-gray-800 dark:divide-gray-600`}
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="font-medium text-blue-600">Usuário</div>
            <div className="truncate">
              <p>
                {currentUser.email}
              </p>
            </div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownAvatarNameButton"
          >
            <li>
              <a
                href={constRoutes.perfil}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Perfil
              </a>
            </li>
            <li>
              <a
                href={constRoutes.meusCursos}
                target="_self"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Meus Cursos
              </a>
            </li>
            <li>
              <a
                href={constRoutes.meusEventos}
                target="_self"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Meus Eventos
              </a>
            </li>
            <li>
              <a
                href={constRoutes.meusCertificados}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Meus Certificados
              </a>
            </li>
          </ul>
          <div className="py-2">
            <LogOut />
          </div>
        </div>
      </div>
    </>
  );
}