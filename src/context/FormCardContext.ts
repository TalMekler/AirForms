import { createContext, useContext } from "react";
import type { TForm } from "../types/TForm";

const FormCardContext = createContext<TForm | undefined>(undefined);

const useFormCardContext = () => {
  const context = useContext(FormCardContext);
  if (!context) {
    throw new Error("useUserCard must be used within a <UserCard user={...}>");
  }
  return context;
};

export { FormCardContext, useFormCardContext };
