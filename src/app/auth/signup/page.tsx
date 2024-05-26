'use client'
import CreateUserForm from "@/components/forms/CreateUserForm/CreateUserForm";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Typography } from "@material-tailwind/react";
import React from "react";

export default function SignUp() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-gray-950">
        <div className="border bg-gray-800 border-gray-300 p-10 mt-8 w-2/6 rounded-lg">
          <div className="justify-center text-center">
            <Typography
              variant="h2"
              color="blue"
              className="dark:text-yellow-600"
            >
              Crie sua conta Blackcup
            </Typography>
          </div>
          <div className="justify-center py-8">
            <CreateUserForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}