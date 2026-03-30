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

//~ § imports a documentos y recursos
//import React from "react";
import { useState, useEffect } from 'react';
import logo from '../assets/IncotechLogo.png';
//~ § imports a documentos y recursos

//~ § Componentes y hooks de Material UI
import {
  Container, // Limita el ancho y centra contenido
  AppBar, // Barra superior fija
  Toolbar, // Contenedor interno del AppBar
  Typography, // Texto (logo)
  Button, // Botones
  IconButton, // Botón para íconos
  Box, // Contenedor flexible (div mejorado)
  Drawer, // Menú lateral (móvil)
  List, // Lista para menú móvil
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery, // Detecta tamaño de pantalla
  useTheme, // Accede al tema de MUI
  alpha, // Hace colores con transparencia
} from '@mui/material';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
//~ § Componentes y hooks de Material UI

//~ § Links del menú (se renderizan dinámicamente con map)
const navLinks = [
  { title: 'Inicio', href: '#products' },
  { title: 'Servicios', href: '#features' },
  { title: 'Productos', href: '#pricing' },
  { title: 'Radio', href: '#blog' },
  { title: 'Contáctanos', href: '#blog' },
];
//~ § Links del menú (se renderizan dinámicamente con map)

//~ § Componentes Animados con Framer Motion de MUI
const MotionListItemButton = motion(ListItemButton as React.ComponentType<any>);
const MotionButton = motion(Button);
const MotionBox = motion(Box);
const MotionAppBar = motion(AppBar);
const MotionMenuOpen = motion(MenuOpenRoundedIcon);
const MotionTypography = motion(Typography);
const MotionIconButton = motion(IconButton);
//~ § Componentes Animados con Framer Motion de MUI

const Navbar = () => {
  //~ § Variables que se van a utilizar en el Componente
  const theme = useTheme(); // Obtiene el tema actual
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true si la pantalla es menor que "md"
  const [mobileOpen, setMobileOpen] = useState(false); // Estado que controla si el menú móvil está abierto
  const [scrolled, setScrolled] = useState(false); // Estado que controla si la navbar tiene blur (cuando haces scroll)
  //~ § Variables que se van a utilizar en el Componente

  //* § I Effect que detecta scroll y activa el blur después de 20px
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY; // Cuánto se ha bajado
      setScrolled(offset > 20); // Activa blur si pasa 20px
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Limpieza del evento cuando el componente se desmonta
  }, []);
  //* § T Effect que detecta scroll y activa el blur después de 20px

  //* § I Abre o cierra el Drawer móvil
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //* § T Abre o cierra el Drawer móvil

  //! § I creacion de MenuSlide para Interaccion con Moviles
  const drawer = (
    <Box // Box que contiene todo el drawer
      sx={{
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: alpha(theme.palette.utiles.azulClaro, 0.3),
      }}
    >
      {/* //* § I boxs de elementos visuales arriba y abajo en menu de Moviles */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: 86,
          opacity: 0.1,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          bottom: -30,
          border: '1px solid',
          borderColor: alpha(theme.palette.utiles.azulProfundo, 1),
          boxShadow: '0 4px 50px rgba(0, 0, 0, 0.9)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: 75,
          opacity: 0.1,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          top: -30,
          border: '1px solid',
          borderColor: alpha(theme.palette.utiles.azulProfundo, 1),
          boxShadow: '0 4px 50px rgba(0, 0, 0, 0.9)',
        }}
      />
      {/* //* § T boxs de elementos visuales arriba y abajo en menu de Moviles */}

      {/* //^ § I creacion de titulo Menu y Boton "Cerrar" en Moviles */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* //+ Titulo */}
        <MotionTypography
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.5,
          }}
          sx={{
            color: 'white',
            fontSize: 20,
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            ml: '30%',
          }}
        >
          Menu de Inicio
        </MotionTypography>
        {/* //+ Titulo */}

        {/* //- Icono */}
        <MotionIconButton
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.8,
          }}
          onClick={handleDrawerToggle}
          sx={{
            justifyContent: 'center',
            borderRadius: '20px',
            border: '1px solid',
            borderColor: alpha(theme.palette.utiles.azulProfundo, 0.1),
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            color: 'white',
            alignItems: 'center',
            height: '60%',
            width: '7.5%',
            right: '10%',
          }}
        >
          <CloseIcon sx={{ color: theme.palette.error.light }} />
        </MotionIconButton>
        {/* //- Icono */}
      </Box>
      {/* //^ § T creacion de titulo Menu y Boton "Cerrar" en Moviles */}

      {/* //? § I creacion de lista con links del Menu */}
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          flexGrow: 1,
        }}
      >
        {/* //+ § I carga de Links de Navegacion de Menu de Moviles */}
        {navLinks.map((item, index) => (
          <ListItem
            key={item.title}
            disablePadding
            sx={{
              width: '80%',
              top: '1%',
              height: 75,
            }}
          >
            {/* //^ I creacion y carga de botones del Menu */}
            <MotionListItemButton
              component="a"
              href={item.href}
              onClick={handleDrawerToggle}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.1,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
              whileHover={{ scale: 1 }}
              sx={{
                position: 'relative',
                textAlign: 'center',
                color: theme.palette.primary.light,
                overflow: 'hidden',
                justifyContent: 'center',
                borderRadius: '20px',
                border: '1px solid',
                borderColor: alpha(theme.palette.utiles.azulProfundo, 0.1),
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                alignItems: 'center',
                height: '70%',
              }}
            >
              {/* //- Texto que contiene el boton */}
              <ListItemText primary={item.title} />
              {/* //- Texto que contiene el boton */}
            </MotionListItemButton>
            {/* //^ T creacion y carga de botones del Menu */}
          </ListItem>
        ))}
        {/* //+§ T carga de Links de Navegacion de Menu de Moviles */}

        {/* //- § I Boton "Incotech Tienda" en Moviles */}
        <ListItem
          disablePadding
          sx={{
            width: '80%',
            top: '1%',
            height: 75,
          }}
        >
          {/* //^ I Animacion de boton */}
          <MotionButton
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.95,
            }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
              delay: 1,
            }}
            fullWidth
            href="#signup"
            onClick={handleDrawerToggle}
            sx={{
              cursor: 'pointer',
              position: 'relative',
              background: 'linear-gradient(50deg, #2b4acb 15%, #58d1c9 95%)',
              textAlign: 'center',
              color: theme.palette.primary.light,
              overflow: 'hidden',
              justifyContent: 'center',
              borderRadius: '20px',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              alignItems: 'center',
              height: '70%',
            }}
          >
            Incotech Tienda
          </MotionButton>
          {/* //^ T Animacion de boton */}
        </ListItem>
        {/* //- § T Boton "Incotech Tienda" en Moviles */}
      </List>
      {/* //? § T creacion de lista con links del Menu */}

      {/* //& § I Setteo de Logo y nombre en Menu Moviles */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '55px',
        }}
      >
        {/* //^ § I MotionBox que contiene la animacion y elementos de footer */}
        <MotionBox
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 'auto',
            mb: 'auto',
            alignItems: 'center',
          }}
        >
          {/* //* § Box que contiene LOGO */}
          <Box
            component="img"
            src={logo}
            alt="Incotech logo"
            sx={{ height: 50, width: 50, objectFit: 'contain' }}
          />
          {/* //* § Box que contiene LOGO */}

          {/* //- § Typography que contiene TEXTO */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.5px',
              background: 'linear-gradient(50deg, #2b4acb 15%, #58d1c9 95%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Incotech
          </Typography>
          {/* //- § Typography que contiene TEXTO */}
        </MotionBox>
        {/* //^ § T MotionBox que contiene la animacion y elementos de footer*/}
      </Box>
      {/* //& § T Setteo de Logo y nombre en Menu Moviles */}
    </Box>
  );
  //! § T creacion de MenuSlide para Interaccion con Moviles

  //! § I Return de la visualizacion de los componentes
  return (
    <>
      {/* //* § I animacion y NavBar De PC */}
      <MotionAppBar
        position="fixed"
        color="transparent"
        elevation={0}
        initial={false}
        animate={{
          backdropFilter: scrolled ? 'blur(5px)' : 'blur(0px)',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0)',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.08)' : '0 0px 0px rgba(0,0,0,0)',
        }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
          type: 'spring',
          stiffness: 120,
          damping: 20,
        }}
        sx={{
          WebkitBackdropFilter: scrolled ? 'blur(7px)' : 'blur(0px)', // soporte para Safari
        }}
      >
        {/* //~ § I Container de contencion de paddings a los lados */}
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              minHeight: { xs: 70, md: 80 },
              maxWidth: '1400px',
              mx: 'auto',
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              alignItems: 'center',
            }}
          >
            {/* //- § I Setteo de Logo y nombre en Menu PC */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 1,
              }}
            >
              {/* //& Imagen de logo */}
              <Box
                component="img"
                src={logo}
                alt="Incotech logo"
                sx={{
                  height: 50,
                  width: 50,
                  objectFit: 'contain',
                }}
              />
              {/* //& Imagen de logo */}
              {/* //* Texto de logo */}
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 800,
                  letterSpacing: '-0.5px',
                  background: 'linear-gradient(50deg, #2b4acb 15%, #58d1c9 95%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Incotech
              </Typography>
              {/* //* Texto de logo */}
            </Box>
            {/* //- § T Setteo de Logo y nombre en Menu PC */}

            {/* //+ § I carga de Links de Navegacion de Menu PC */}
            {!isMobile && (
              <Box
                sx={{
                  display: 'flex',
                  gap: 4,
                  justifyContent: 'center',
                }}
              >
                {/* //! § I Carga de links */}
                {navLinks.map((link) => (
                  //* I Animacion de links
                  <MotionButton
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={{
                      rest: { scale: 1, color: alpha(theme.palette.primary.main, 1) },
                      hover: {
                        scale: 1.1,
                        color: theme.palette.utiles.azulHover,
                      },
                    }}
                    transition={{ duration: 0.5 }}
                    sx={{
                      position: 'relative',
                      fontSize: 17,
                      fontWeight: 'normal',
                      backgroundColor: 'transparent',
                      borderRadius: 2,
                    }}
                  >
                    {link.title} {/* //^ § nombre de link */}
                    <Box
                      component={motion.span}
                      variants={{
                        rest: { width: 0 },
                        hover: { width: '70%' },
                      }}
                      transition={{ duration: 0.35 }}
                      sx={{
                        position: 'absolute',
                        display: 'block',
                        height: '2px',
                        bottom: '6px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'linear-gradient(50deg, #2b4acb 15%, #58d1c9 95%)',
                        pointerEvents: 'none',
                      }}
                    />
                  </MotionButton>
                  //* T Animacion de links
                ))}
                {/* //! § T Carga de links */}
              </Box>
            )}
            {/* //+ § T carga de Links de Navegacion de Menu PC */}

            {/* //^ § I Box de btn Incotech Tienda y Abrir Menu en PC */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                justifyContent: 'flex-end',
              }}
            >
              {/* //- § I Boton "Incotech Tienda" en PC */}
              {!isMobile && (
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  sx={{
                    borderRadius: 50,
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 0,
                    background: 'linear-gradient(50deg, #2b4acb 15%, #58d1c9 95%)',
                    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.25)',

                    '&::before': {
                      content: '""',
                      background: 'linear-gradient(50deg, #2b4acb, #58d1c9)',
                      position: 'absolute',
                      top: -2,
                      left: -2,
                      backgroundSize: '400%',
                      zIndex: -1,
                      filter: 'blur(5px)',
                      width: 'calc(100% + 4px)',
                      height: 'calc(100% + 4px)',
                      animation: 'glowing 1s linear infinite',
                      opacity: 0,
                      transition: 'opacity .3s ease-in-out',
                      borderRadius: 50,
                    },

                    '&:hover::before': {
                      opacity: 1,
                    },

                    '&:active': {
                      color: '#000',
                    },

                    '&:active::after': {
                      background: 'transparent',
                    },

                    '&::after': {
                      zIndex: -1,
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(50deg, #2b4acb 15%, #58d1c9 95%)',
                      left: 0,
                      top: 0,
                      borderRadius: 50,
                    },

                    '@keyframes glowing': {
                      '0%': { backgroundPosition: '0 0' },
                      '20%': { backgroundPosition: '25% 0' },
                      '40%': { backgroundPosition: '50% 0' },
                      '60%': { backgroundPosition: '75% 0' },
                      '80%': { backgroundPosition: '100% 0' },
                      '100%': { backgroundPosition: '0% 0' },
                    },
                  }}
                >
                  Incotech Tienda
                </Button>
              )}
              {/* //- § T Boton "Incotech Tienda" en PC */}

              {/* //& § I Boton para abrir menu en Moviles */}
              {isMobile && (
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{
                    display: 'flow',
                    justifyContent: 'flex-end',
                    left: { xs: '37vw', sm: '43vw', md: '43vw', lg: '43vw' },
                    color: 'white',
                  }}
                >
                  <MotionMenuOpen
                    sx={{
                      transform: 'scale(1.6)',
                      color: theme.palette.utiles.azulHover,
                    }}
                  />
                </IconButton>
              )}
              {/* //& § T Boton para abrir menu en Moviles */}
            </Box>
            {/* //^ § I Box de btn Incotech Tienda y Abrir Menu en PC */}
          </Toolbar>
        </Container>
        {/* //~ § T Container de contencion de paddings a los lados */}
      </MotionAppBar>
      {/* //* § T animacion y NavBar De PC */}

      {/* //& § I Drawer del Menu de Moviles*/}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '90%', sm: '50%', md: '30%' },
              height: '80vh',
              top: '5vh',
              right: 20,
              borderRadius: '24px',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255,255,255,0.2)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
              overflow: 'hidden',
            },
          },
        }}
      >
        {drawer}
      </Drawer>
      {/* //& § T Drawer del Menu de Moviles*/}

      {/* //+ I Espaciador */}
      <Toolbar sx={{ minHeight: { xs: 70, md: 80 } }} />
      {/* //+ T Espaciador */}
    </>
  );
  //! § T Return de la visualizacion de los componentes
};

export default Navbar;
