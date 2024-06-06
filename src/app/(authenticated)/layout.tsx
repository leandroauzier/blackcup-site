'use client';

import { CurrentUserContext } from "@/lib/client/current-user-context";
import { Route } from "@/lib/routes";
import { useRouter } from "next/navigation";
import React from "react";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentUser } = React.useContext(CurrentUserContext);
  const router = useRouter();

  if (currentUser === null) {
    router.push(Route.link.login);
    return;
  }

  return (<>
    {children}
  </>);
}