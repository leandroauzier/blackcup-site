'use client'
import { Typography } from "@material-tailwind/react";
import Link from "next/link";

const LINKS = [
  {
    title: "Social",
    items: ["Instagram", "Twitter", "Discord", "TikTok"],
  },
  {
    title: "Lançamentos",
    items: ["Perseguidor", "Deep", "Sniper Project", "Ratonildo Adventures"],
  },
  {
    title: "Suporte",
    items: ["Atendimento virtual", "Ticket", "fale conosco", "Reportar um bug"],
  },
  {
    title: "",
    items: [],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-10 pb-8 shadow-md border-t-2 bg-white dark:bg-black">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 !w-full ">
          <div className="flex col-span-2 gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-4 dark:!text-yellow-500"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1 font-normal !text-gray-700 dark:!text-purple-700 transition-colors hover:!text-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">

          </div>
        </div>
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal text-center !text-gray-700 dark:!text-white">
          &copy; {CURRENT_YEAR} {" "}
          <Link href="/" target="_blank">
            Leandro Sobrinho
          </Link>{" "}
          -{" "}
          BlackCup Entertainment.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;