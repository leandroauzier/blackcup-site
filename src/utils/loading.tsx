import React from "react";
import SpinKit from "@/lib/animation/spinKitProps";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen relative">
      <div className="absolute w-1/2 h-1/2 font-bold">
        <SpinKit type="circle-fade" dots={12} color="#1F4888" size="250px" />
      </div>
      <div className="absolute w-1/2 h-1/2 font-bold">
        <p>Carregando dados...</p>
      </div>
    </div>
  );
}