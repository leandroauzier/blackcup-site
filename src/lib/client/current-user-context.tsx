import React from "react";
import { CurrentUser } from "./current-user";

type CurrentUserService = {
  readonly currentUser: CurrentUser | null;
  readonly setCurrentUser: (user: CurrentUser | null) => void;
};

export const CurrentUserContext = React.createContext<CurrentUserService>({
  currentUser: null,
  setCurrentUser: () => {},
});