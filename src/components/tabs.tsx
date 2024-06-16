import { Button } from "@mui/material";
import React from "react";

type TabsProps = {
    className?: string;
    activeTab: string;
    onTabChange: (tab: string) => void;
    opcao1: string;
    opcao2: string;
    opcao3: string;

};

export default function Tabs({ className, opcao1, opcao2, opcao3, activeTab, onTabChange }: TabsProps) {
    const handleClick = (tab: string) => {
        onTabChange(tab);
    };
    return (
        <>
            <div className={className}>
                <ul className="text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                    <li className="w-full focus-within:z-10">
                        {/* <a href="" */}
                        <Button
                            onClick={() => handleClick(opcao1)}
                            className="activeTab === opcao1 ? 'active' : '' uppercase text-xl inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page"
                        >
                            {opcao1}
                        </Button>
                        {/* </a> */}
                    </li>
                    <li className="w-full focus-within:z-10">
                        {/* <a href="" */}
                        <Button
                            onClick={() => handleClick(opcao2)}
                            className="activeTab === opcao2 ? 'active' : '' uppercase text-xl inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">
                            {opcao2}
                        </Button>
                        {/* </a> */}
                    </li>
                    <li className="w-full focus-within:z-10">
                        {/* <a href="" */}
                        <Button
                            onClick={() => handleClick(opcao3)}
                            className="activeTab === opcao3 ? 'active' : '' uppercase text-xl inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">
                            {opcao3}
                        </Button>
                        {/* </a> */}
                    </li>
                </ul>
            </div>

        </>
    );
}