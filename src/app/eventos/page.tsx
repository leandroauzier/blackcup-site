'use client'
import EventCard from "@/components/Card/eventCard";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Typography } from "@mui/material";
import React from "react";

type PageProps = {};

export default function Page({ }: PageProps) {

    const content = (
        <>
            <div className="flex h-full container justify-center items-center flex-col">
                <div className="flex justify-center py-8 text-center">
                    <Typography
                        variant="h2"
                        fontFamily="Roboto"
                        className="text-purple-700"
                    >
                        Eventos
                    </Typography>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-20">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />

                </div>
            </div>
        </>
    )

    return (
        <>
            <Navbar />
            <div className="flex justify-center">
            {content}
            </div>
            <Footer />
        </>
    );
}