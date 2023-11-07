import { SocketProvider } from "./context/SocketContext";
import { UiProvider } from "./context/UiContext";
import { AppRouter } from "./pages/AppRouter";

export const TicketApp = () => {
  return (
    <SocketProvider>
      <UiProvider>
        <AppRouter />
      </UiProvider>
    </SocketProvider>
  );
};
