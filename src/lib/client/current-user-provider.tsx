import React, { useEffect } from "react"
import { CurrentUser, UserResult } from "./current-user";
import { readCurrentUser, writeCurrentUser } from "./local-storage-current-user";
import { CurrentUserContext } from "./current-user-context";

export function CurrentUserProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = React.useState<UserResult>("carregando");

  useEffect(() => {
    setCurrentUser(readCurrentUser());
  },[])
  
  return (
    <CurrentUserContext.Provider value={{
      currentUser,
      setCurrentUser: (user) => {
        writeCurrentUser(user);
        setCurrentUser(user);
      },
    }}>
      {children}
    </CurrentUserContext.Provider>
  )
}