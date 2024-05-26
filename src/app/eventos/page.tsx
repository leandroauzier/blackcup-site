'use client'
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Typography } from "@mui/material";
import React from "react";

type PageProps = {};

export default function Page({ }: PageProps) {

    const content = (
        <>
            <div className="flex h-screen bg-gray-950">
                <div className="flex justify-center text-center">
                    <Typography
                        variant="h2"
                        color="purple"
                        fontFamily="Roboto"
                    >
                        Eventos
                    </Typography>
                </div>
            </div>
        </>
    )

    return (
        <>
            <Navbar />
            {content}
            <Footer />
        </>
    );
}