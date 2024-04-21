import { Typography } from "@mui/material";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center text-white bg-white dark:bg-gray-950 h-screen">
        <div className="pl-20">
        <Navbar />
        <Typography
          variant="h1"
          color="purple"
          className="text-8xl text-start"
          fontFamily="Roboto"
        >
          Blackcup
        </Typography>
        <Typography
          variant="subtitle1"
          color="white"
          className="text-4xl pl-2 justify-start text-left"
          fontFamily="Roboto"
        >
          Entertainment
        </Typography>
        </div>
        <Image
          src="/images/empresa-games.jpg"
          alt="Escola"
          width={600}
          height={600}
          className="absolute inset-0 ml-auto w-[600px] h-[600px] rounded-bl-[100px] object-cover object-center"
        />
      </div>
      <Footer />
    </>
  );
}
