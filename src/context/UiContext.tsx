import { createContext, useState } from "react";

interface props {
  children: JSX.Element | JSX.Element[];
}
interface context {
  showMenu: () => void;
  hideMenu: () => void;
  ocultarMenu: boolean;
}

export const UiContext = createContext<context>({} as context);

export const UiProvider = ({ children }: props) => {
  const [ocultarMenu, setOcultarMenu] = useState<boolean>(false);

  const showMenu = () => {
    setOcultarMenu(false);
  };

  const hideMenu = () => {
    setOcultarMenu(true);
  };

  return (
    <UiContext.Provider value={{ hideMenu, showMenu, ocultarMenu }}>
      {children}
    </UiContext.Provider>
  );
};
