import { constRoutes } from "@/lib/routes/routes"
import Accountdropdown from "../dropdowns/Accountdropdown";
import { CurrentUserContext } from "@/lib/client/current-user-context";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  const { currentUser } = React.useContext(CurrentUserContext);
  return (

    <nav
      className="bg-white relative z-20 dark:bg-slate-800 w-full top-0 start-0 border-b border-gray-200 dark:border-slate-600">
      <div className="max-w-screen-xl md:flex md:flex-wrap sm:grid sm:grid-cols-1 items-center justify-between mx-auto p-4">
        <Link
          href={constRoutes.home}
          className="flex justify-center items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap uppercase dark:text-white">
            Blackcup
          </span>
        </Link>
        <div className="items-center md:justify-between w-full md:flex md:w-auto" id="navbar-sticky">
          <ul className="md:flex md:flex-row sm:grid sm:grid-cols-1 text-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-slate-800 dark:border-gray-700">
            <li>
              <Link
                href={constRoutes.home}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Página inicial
              </Link>
            </li>
            <li>
              <Link
                href={constRoutes.sobre}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href={constRoutes.cursos}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link
                href={constRoutes.eventos}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Eventos
              </Link>
            </li>
          </ul>
        </div>
        <div className="items-center pt-4 md:pt-0 justify-center gap-4 flex lg:col-span-2">
          {currentUser && <Accountdropdown currentUser={currentUser} />}
        </div>
      </div>
    </nav>

  )
}
