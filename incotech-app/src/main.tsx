import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App.tsx";
//import PruebaHD from "./pruebasEnCodigo.tsx";
//import DottedConnector from "./pruebasEnCodigo.tsx";
//import Navbar from "./Componentes/COM_navBar.tsx";
import HeroSection from "./Componentes/COM_Hero.tsx";
import temaCust from "./TemaCustom.tsx";
import { ThemeProvider, CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={temaCust}>
      <CssBaseline />
      {/*<Navbar />*/}
      {/*<App />*/}
      <HeroSection />
      {/*<PruebaHD />*/}
    </ThemeProvider>
  </StrictMode>
);
