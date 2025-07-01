'use client';

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center text-white dark:bg-gray-950 md:h-screen">
        {/* Fundo preto com transição de opacidade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="pl-20 relative z-10 bg-black border-y-2 py-4"
        >
          {/* Título com animação */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <Typography
              variant="h1"
              className="md:text-8xl text-6xl text-start"
              fontFamily="Roboto"
              color="purple"
            >
              Blackcup
            </Typography>
          </motion.div>

          {/* Subtítulo com animação */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <Typography
              variant="subtitle1"
              className="md:text-4xl text-2xl pl-2 text-left"
              fontFamily="Roboto"
              color="white"
            >
              Entertainment
            </Typography>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
