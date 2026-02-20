import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PruebaHD from "./pruebasEnCodigo.tsx";
/*import DottedConnector from "./pruebasEnCodigo.tsx";*/
import Navbar from "./Componentes/COM_navBar.tsx";
import temaCust from "./TemaCustom.tsx";
import { ThemeProvider } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={temaCust}>
      {<Navbar />}
      {/*<App />*/}
      <PruebaHD />
    </ThemeProvider>
  </StrictMode>
);
