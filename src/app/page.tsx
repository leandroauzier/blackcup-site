'use client'
import { Typography } from "@mui/material";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center text-white dark:bg-gray-950 md:h-screen">
        <div className="pl-20 relative z-10 bg-black bg-opacity-80 border-y-2 py-4">
          <Typography
            variant="h1"
            color="purple"
            className="md:text-8xl text-6xl text-start"
            fontFamily="Roboto"
          >
            Blackcup
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            className="md:text-4xl text-2xl pl-2 justify-start text-left"
            fontFamily="Roboto"
          >
            Entertainment
          </Typography>
        </div>
      </div>
      <div className="items-center justify-between px-10">
        <Image
          src="/images/empresa-games.jpg"
          alt="Escola"
          width={1000}
          height={1000}
          className="md:absolute inset-0 ml-auto md:w-[600px] md:h-[600px] rounded-bl-[100px] object-cover object-center" />
      </div>
      <Footer />
    </>
  );
}
