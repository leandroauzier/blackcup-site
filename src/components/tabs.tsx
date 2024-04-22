import { Button } from "@mui/material";
import React from "react";

type TabsProps = {
    className?: string;
    opcao1: string;
    opcao2: string;
    opcao3: string;

};

export default function Tabs({ className, opcao1, opcao2, opcao3 }: TabsProps) {
    return (
        <>
            <div className={className}>
                <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                    <li className="w-full focus-within:z-10">
                        {/* <a href="" */}
                        <Button
                            className="uppercase text-2xl inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page"
                        >
                            {opcao1}
                        </Button>
                        {/* </a> */}
                    </li>
                    <li className="w-full focus-within:z-10">
                        <a href=""
                            className="uppercase text-2xl inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                            {opcao2}
                        </a>
                    </li>
                    <li className="w-full focus-within:z-10">
                        <a href=""
                            className="uppercase text-2xl inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 rounded-e-lg hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                            {opcao3}
                        </a>
                    </li>
                </ul>
            </div>

        </>
    );
}