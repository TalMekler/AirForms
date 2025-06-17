import { createContext, useContext } from "react";
import type { TUser } from "../types/TUser";

const UserCardContext = createContext<TUser | undefined>(undefined);

const useUserCardContext = () => {
  const context = useContext(UserCardContext);
  if (!context) {
    throw new Error("useUserCardContext must be used within a <UserCard user={...}>");
  }
  return context;
};

export { UserCardContext, useUserCardContext };
