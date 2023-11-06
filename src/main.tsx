import React from "react";
import ReactDOM from "react-dom/client";
import { TicketApp } from "./TicketApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <TicketApp />
    </React.StrictMode>
  </BrowserRouter>
);
