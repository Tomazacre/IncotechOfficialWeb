//! ///////////////////////////////////////////
//!               Created By:                //
//!  ░█     █░▓█████   ██████        ██ ▄█▀  //
//!  ▓█░ █ ░█░▓█   ▀ ▒██    ▒        ██▄█▒   //
//!  ▒█░ █ ░█░▓███   ░ ▓██▄    ████  ███▄░   //
//!  ░█░ █ ░█ ▓█   ▄   ▒   ██▒ ▓ ▓▓ ▓██ █▄   //
//!  ░░██▒██░ ▓█████▒▒██████▒▒ ▒▒ ▒ ▒██▒ █▄  //
//!  ░ ▓░▒ ▒  ░░ ▒░ ░▒ ▒▓▒ ▒ ░  ░ ░ ▒ ▒▒ ▓▒  //
//!    ▒ ░ ░   ░ ░  ░░ ░▒  ░ ░      ░ ░▒ ▒░  //
//!    ░   ░     ░   ░  ░  ░        ░ ░░ ░   //
//!      ░       ░  ░      ░        ░  ░     //
//!                                          //
//! ///////////////////////////////////////////

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CarroDeCompras from './Componentes/COM_CarritoDeCompras.tsx';
//import CarruselDeMarcas from './Componentes/COM_CarruselDeMarcas.tsx';
//import App from "./App.tsx";
//import PruebaHD from "./pruebasEnCodigo.tsx";
//import DottedConnector from "./pruebasEnCodigo.tsx";
//import Navbar from "./Componentes/COM_navBar.tsx";
import HeroSection from './Componentes/COM_Hero.tsx';
import temaCust from './TemaCustom.tsx';
import { ThemeProvider, CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={temaCust}>
      <CssBaseline />
      {/*<Navbar />*/}
      {/*<App />*/}
      <HeroSection />
      {/*<CarruselDeMarcas />*/}
      {/**/}
      <CarroDeCompras />
      {/*<PruebaHD />*/}
    </ThemeProvider>
  </StrictMode>
);
