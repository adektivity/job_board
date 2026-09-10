import { createContext, useContext } from "react";

export const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("App context must be used within a context provider");
  }
  return context;
};
