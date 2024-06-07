import React from "react";
import { CurrentUser, UserResult } from "./current-user";

type CurrentUserService = {
  readonly currentUser: UserResult ;
  readonly setCurrentUser: (user: UserResult) => void;
};

export const CurrentUserContext = React.createContext<CurrentUserService>({
  currentUser: "carregando",
  setCurrentUser: () => {},
});