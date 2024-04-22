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
            <div className="flex w-full my-4 pb-4 pr-6 text-justify bg-purple-900 rounded-lg">
                <div className="flex p-6">
                    <Image
                        alt="Leandro"
                        src={imgSource}
                        width={200}
                        height={100}
                        className="rounded-lg shadow-md "
                    />
                </div>
                <div className="flex-col w-full">
                    <Typography
                        variant="h5"
                        color={"white"}
                        className="pt-4 pb-2"
                    >
                        {nome}: {titulo}
                    </Typography>
                    <div className="flex-col text-white justify-center">
                        {desc}
                    </div>
                </div>
            </div>
        </>
    );
}