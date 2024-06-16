'use client'
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import LoginForm from "@/components/forms/loginForm/loginForm";
import { Typography } from "@material-tailwind/react";

type SigninProps = {};

export default function Signin({ }: SigninProps) {
  return (
    <>
    <Navbar />
      <div className="flex justify-center dark:bg-slate-950">
        <div className="border dark:bg-slate-800 border-gray-300 p-10 m-8 w-[600px] rounded-lg">
          <div className="justify-center text-center">
            <Typography
              variant="h2"
              color="blue"
              className="dark:text-white sm:text-4xl text-2xl"
            >
              Faça login na sua conta BlackCup
            </Typography>
          </div>
          <div className="justify-center py-8">
            <LoginForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}