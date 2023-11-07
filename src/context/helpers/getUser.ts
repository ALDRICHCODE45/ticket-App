interface ArgsReturn {
  agente: string | null;
  escritorio: string | null;
}

export const getUser = (): ArgsReturn => {
  return {
    agente: localStorage.getItem("agente"),
    escritorio: localStorage.getItem("escritorio"),
  };
};
