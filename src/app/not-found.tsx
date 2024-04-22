import { constRoutes } from "@/lib/routes/routes";
import { Button, Typography } from "@mui/material";
import React from "react";

export default function notFound() {
    return (
        <>
            <div className="bg-black text-white h-screen">
                <div className="flex flex-col text-center justify-center pt-40">
                    <div className="flex justify-center">
                        <Typography
                            variant="h1"
                            color={"whitesmoke"}
                            className="font-semibold"
                        >
                            404
                        </Typography>
                    </div>
                    <div className="flex justify-center">
                        <Typography
                            variant="h2"
                            color={"whitesmoke"}
                        >
                            Página não encontrada
                        </Typography>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Typography
                            variant="body1"
                            color={"whitesmoke"}
                        >
                            Desculpe, não foi possível encontrar a página solicitada.
                        </Typography>
                    </div>
                    <div className="flex gap-4 justify-center m-4">
                        <div className="flex">
                            <a
                                href={constRoutes.home}
                                target="_self"
                            >
                                <Button
                                    variant="contained"
                                    className="bg-purple-800 hover:bg-purple-900"
                                >
                                    Página inicial
                                </Button>
                            </a>
                        </div>
                        <div className="flex">
                            <a
                                href={constRoutes.suporte}
                                target="_self"
                            >
                                <Button
                                    variant="contained"
                                    className="bg-purple-800 hover:bg-purple-900"
                                >
                                    Contate o Suporte
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}