import { Ticket } from "../CrearTicket";

interface dataFetch {
  ok: boolean;
  lasts: Ticket[];
}

export const getAssingnedTickets = async (): Promise<Ticket[] | undefined> => {
  const data = await fetch("http://localhost:8080/lasts");
  const result: dataFetch = await data.json();
  const { lasts } = result;
  if (lasts.length >= 1) return lasts;
};
