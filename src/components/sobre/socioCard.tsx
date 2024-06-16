import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

type SocioCardProps = {
    imgSource:string;
    nome:string;
    titulo:string;
    desc:string;
};

export default function SocioCard({imgSource, nome, titulo, desc }: SocioCardProps) {
    return (
        <>
            <div className="sm:flex flex justify-center flex-col w-full sm:flex-row my-4 pb-4 sm:pr-6 text-justify bg-purple-900 rounded-lg">
                <div className="flex justify-center p-6">
                    <Image
                        alt="Leandro"
                        src={imgSource}
                        priority
                        width={200}
                        height={200}
                        className="rounded-lg shadow-md w-[200px] h-[auto]"
                    />
                </div>
                <div className="flex-col flex justify-center w-full">
                    <Typography
                        variant="h5"
                        color={"white"}
                        className="p-4 text-center sm:pt-4 sm:pb-2 sm:text-xl md:text-start sm:text-center"
                    >
                        {nome}: {titulo}
                    </Typography>
                    <div className="sm:p-0 p-6 flex-col text-white justify-center">
                        {desc}
                    </div>
                </div>
            </div>
        </>
    );
}