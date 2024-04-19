import Image from "next/image";
import { Typography } from "@mui/material";
import { Roboto }from '@fontsource/roboto/500.css';
import Footer from "@/components/footer";
import navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <div className="justify-center text-white bg-white dark:bg-gray-950 h-screen">
        <navbar />
        <Typography
          variant="h1"
          color="purple"
          className="text-8xl text-center"
          fontFamily="Roboto"
        >
          Blackcup
        </Typography>
        <Typography
          variant="subtitle1"
          color="white"
          className="text-4xl justify-center text-center"
          fontFamily="Roboto"
        >
          Entertainment
        </Typography>
        <Footer />
      </div>
    </>
  );
}
