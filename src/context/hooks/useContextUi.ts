import { useContext, useEffect } from "react";
import { UiContext } from "../UiContext";

export const useContextUi = (ocultar: boolean) => {
  const { hideMenu, showMenu, ocultarMenu } = useContext(UiContext);

  useEffect(() => {
    if (ocultar) {
      hideMenu();
    } else {
      showMenu();
    }
  }, [ocultarMenu, hideMenu, showMenu]);
};
