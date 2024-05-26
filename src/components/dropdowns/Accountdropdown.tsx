"use client"

import { constRoutes } from "@/lib/routes/routes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LogOut from "../forms/loginForm/logout";
import generateInitialsImage from "@/utils/generateInitialsImage";
import { useSession, signOut } from "next-auth/react";

type AccountdropdownProps = {};

export default function Accountdropdown({ }: AccountdropdownProps) {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setuserName] = useState("Carregando...");
  const [userEmail, setuserEmail] = useState("Carregando...");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "authenticated") {
      setuserName(session?.user?.name || "Vazio");
      setuserEmail(session?.user?.email || "Vazio");
    }
  }, [status, session]);

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

  if (status === "loading") {
    return <p>Carregando...</p>;
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  let imgSrc = generateInitialsImage(userName || "Usuário Logado", true);

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
          {userName}
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
                {userEmail}
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
            {/* <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sair
            </a> */}
            <LogOut />
          </div>
        </div>
      </div>
    </>
  );
}