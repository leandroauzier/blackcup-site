// MUDAR reactStrictMode em next.config.js para true quando estiver em produção
"use client";

import { CurrentUserProvider } from "@/lib/client/current-user-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CurrentUserProvider>
        {children}
      </CurrentUserProvider>
    </>
  );
}