//////////////////////////////////////////////
//               Created By:                //
//  ░█     █░▓█████   ██████        ██ ▄█▀  //
//  ▓█░ █ ░█░▓█   ▀ ▒██    ▒        ██▄█▒   //
//  ▒█░ █ ░█░▓███   ░ ▓██▄    ████  ███▄░   //
//  ░█░ █ ░█ ▓█   ▄   ▒   ██▒ ▓ ▓▓ ▓██ █▄   //
//  ░░██▒██░ ▓█████▒▒██████▒▒ ▒▒ ▒ ▒██▒ █▄  //
//  ░ ▓░▒ ▒  ░░ ▒░ ░▒ ▒▓▒ ▒ ░  ░ ░ ▒ ▒▒ ▓▒  //
//    ▒ ░ ░   ░ ░  ░░ ░▒  ░ ░      ░ ░▒ ▒░  //
//    ░   ░     ░   ░  ░  ░        ░ ░░ ░   //
//      ░       ░  ░      ░        ░  ░     //
//                                          //
//////////////////////////////////////////////

// § imports a documentos y recursos
//import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/IncotechLogo.png";
// § imports a documentos y recursos

// § Componentes y hooks de Material UI
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
} from "@mui/material";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
// § Componentes y hooks de Material UI

// § Links del menú (se renderizan dinámicamente con map)
const navLinks = [
  { title: "Inicio", href: "#products" },
  { title: "Servicios", href: "#features" },
  { title: "Productos", href: "#pricing" },
  { title: "Radio", href: "#blog" },
  { title: "Contáctanos", href: "#blog" },
];
// § Links del menú (se renderizan dinámicamente con map)

// § Componentes Animados con Framer Motion de MUI
const MotionListItemButton = motion(ListItemButton as React.ComponentType<any>);
const MotionButton = motion(Button);
const MotionBox = motion(Box);
const MotionAppBar = motion(AppBar);
// § Componentes Animados con Framer Motion de MUI

const Navbar = () => {
  // § Variables que se van a utilizar en el Componente
  const theme = useTheme(); // Obtiene el tema actual
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // true si la pantalla es menor que "md"
  const [mobileOpen, setMobileOpen] = useState(false); // Estado que controla si el menú móvil está abierto
  const [scrolled, setScrolled] = useState(false); // Estado que controla si la navbar tiene blur (cuando haces scroll)
  // § Variables que se van a utilizar en el Componente

  // § Effect que detecta scroll y activa el blur después de 20px
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY; // Cuánto se ha bajado
      setScrolled(offset > 20); // Activa blur si pasa 20px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Limpieza del evento cuando el componente se desmonta
  }, []);
  // § Effect que detecta scroll y activa el blur después de 20px

  // § Abre o cierra el Drawer móvil
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // § Abre o cierra el Drawer móvil

  // § Inicia creacion de MenuSlide para Interaccion con Moviles
  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        pt: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* § Inicia creacion de titulo Menu y Boton "Cerrar" en Moviles */}
      <Box
        sx={{
          display: "flex",
          px: 2,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: 25,
            textShadow: "0 4px 8px rgba(0, 0, 0, 1)",
          }}
        >
          Menu de Inicio
        </Typography>

        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            justifyContent: "center",
            borderRadius: "20px",
            border: "1px solid",
            borderColor: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            color: "white",
            alignItems: "center",
            height: "80%",
          }}
        >
          <Typography
            sx={{
              pr: "2px",
            }}
          >
            Cerrar
          </Typography>
          <CloseIcon sx={{ color: theme.palette.error.light }} />
        </IconButton>
      </Box>
      {/* § Termina creacion de titulo Menu y Boton "Cerrar" en Moviles */}

      {/* § Inicia creacion de lista con links del Menu */}
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1, // 🔥 clave
        }}
      >
        {/* § Inicia carga de Links de Navegacion de Menu de Moviles */}
        {navLinks.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <MotionListItemButton
              component="a"
              href={item.href}
              onClick={handleDrawerToggle}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // 👈 efecto escalonado
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03 }}
              sx={{
                position: "relative",
                textAlign: "center",
                color: theme.palette.primary.light,
                overflow: "hidden",
                fontWeight: "bold",
              }}
            >
              <ListItemText primary={item.title} />
              <motion.span
                variants={{
                  rest: { width: 0 },
                  hover: { width: "30%" },
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                  position: "absolute",
                  height: "2px",
                  bottom: "6px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background:
                    "linear-gradient(50deg, #2b4acb 15%, #58d1c9 95%)",
                  pointerEvents: "none",
                  borderRadius: 2,
                }}
              />
            </MotionListItemButton>
          </ListItem>
        ))}
        {/* § Termina carga de Links de Navegacion de Menu de Moviles */}

        {/* § Inicia Boton "Incotech Tienda" en PC */}
        <ListItem disablePadding sx={{ justifyContent: "center" }}>
          <MotionBox
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.5,
            }}
          >
            <ListItemButton
              sx={{ textAlign: "center", mt: 2 }}
              component="a"
              href="#signup"
              onClick={handleDrawerToggle}
            >
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  borderRadius: 50,
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  cursor: "pointer",
                  position: "relative",
                  zIndex: 0,
                  background:
                    "linear-gradient(50deg, #2b4acb 15%, #58d1c9 95%)",
                  boxShadow: "0 4px 20px rgba(99, 102, 241, 0.25)",

                  "&::before": {
                    content: '""',
                    background: "linear-gradient(50deg, #2b4acb , white)",
                    position: "absolute",
                    top: -2,
                    left: -2,
                    backgroundSize: "400%",
                    zIndex: -1,
                    filter: "blur(5px)",
                    width: "calc(100% + 4px)",
                    height: "calc(100% + 4px)",
                    animation: "glowing 2s linear infinite",
                    opacity: 0,
                    transition: "opacity .3s ease-in-out",
                    borderRadius: 50,
                  },

                  "&:hover::before": {
                    opacity: 1,
                  },

                  "&:active": {
                    color: "#000",
                  },

                  "&:active::after": {
                    background: "transparent",
                  },

                  "&::after": {
                    zIndex: -1,
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(50deg, #2b4acb 15%, #58d1c9 95%)",
                    left: 0,
                    top: 0,
                    borderRadius: 50,
                  },

                  "@keyframes glowing": {
                    "0%": { backgroundPosition: "0 0" },
                    "20%": { backgroundPosition: "25% 0" },
                    "40%": { backgroundPosition: "50% 0" },
                    "60%": { backgroundPosition: "75% 0" },
                    "80%": { backgroundPosition: "100% 0" },
                    "100%": { backgroundPosition: "0% 0" },
                  },
                }}
              >
                Incotech Tienda
              </Button>
            </ListItemButton>
          </MotionBox>
        </ListItem>
        {/* § Termina Boton "Incotech Tienda" en PC */}

        {/* § Inicia Setteo de Logo y nombre en Menu Moviles */}
        <ListItem
          sx={{
            mt: "auto",
            justifyContent: "center",
            pb: 1,
          }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2,
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Incotech logo"
              sx={{
                height: 50,
                width: 50,
                objectFit: "contain",
              }}
            />

            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.5px",
                background: "linear-gradient(50deg, #2b4acb 15%, #58d1c9 95%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Incotech
            </Typography>
          </MotionBox>
        </ListItem>
        {/* § Termina Setteo de Logo y nombre en Menu Moviles */}
      </List>
      {/* § Inicia creacion de lista con links del Menu */}
    </Box>
  );
  // § Termina creacion de MenuSlide para Interaccion con Moviles

  // § Inicia Return de la visualizacion de los componentes
  return (
    <>
      {/* § Inicia Esqueleto y NavBar De PC */}
      <MotionAppBar
        position="fixed"
        color="transparent"
        elevation={0}
        initial={false} // 🔥 importante cuando depende de estado
        animate={{
          backdropFilter: scrolled ? "blur(5px)" : "blur(0px)",
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.1)"
            : "rgba(255,255,255,0)",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0,0,0,0.08)"
            : "0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
        sx={{
          WebkitBackdropFilter: scrolled ? "blur(7px)" : "blur(0px)", // soporte Safari
        }}
      >
        {/* Container de contencion de paddings a los lados */}
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              minHeight: { xs: 70, md: 80 },
              px: { xs: 2, md: 6 },
              maxWidth: "1400px",
              mx: "auto",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr", // ✅ balance real
              alignItems: "center",
            }}
          >
            {/* § Inicia Setteo de Logo y nombre en Menu PC */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start", // ✅ izquierda
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Incotech logo"
                sx={{
                  height: 50,
                  width: 50,
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                  background:
                    "linear-gradient(50deg, #2b4acb 15%, #58d1c9 95%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Incotech
              </Typography>
            </Box>
            {/* § Termina Setteo de Logo y nombre en Menu PC */}

            {/* § Inicia carga de Links de Navegacion de Menu PC */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  justifyContent: "center",
                }}
              >
                {navLinks.map((link) => (
                  <MotionButton
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={{
                      rest: { scale: 1, color: "#2b3aa3" },
                      hover: {
                        scale: 1.12,
                        color: theme.palette.primary.light,
                        backdropFilter: "blur(10px)",
                        //WebkitBackdropFilter: "blur(10px)", // 👈 soporte Safari
                        backgroundColor: "rgba(51, 72, 199, 0.1)",
                      },
                    }}
                    transition={{ duration: 0.5 }}
                    sx={{
                      position: "relative",
                      fontSize: 17,
                      fontWeight: "normal",
                      backgroundColor: "transparent",
                      borderRadius: 2,
                    }}
                  >
                    {link.title}

                    <Box
                      component={motion.span}
                      variants={{
                        rest: { width: 0 },
                        hover: { width: "70%" },
                      }}
                      transition={{ duration: 0.35 }}
                      sx={{
                        position: "absolute",
                        display: "block",
                        height: "2px",
                        bottom: "6px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background:
                          "linear-gradient(50deg, #2b4acb 15%, #58d1c9 95%)",
                        pointerEvents: "none",
                      }}
                    />
                  </MotionButton>
                ))}
              </Box>
            )}
            {/* § Termina carga de Links de Navegacion de Menu PC */}

            {/* § Inicia Boton "Incotech Tienda" en PC */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "flex-end", // ✅ derecha real
              }}
            >
              {!isMobile && (
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  sx={{
                    borderRadius: 50,
                    border: "none",
                    outline: "none",
                    color: "#fff",
                    cursor: "pointer",
                    position: "relative",
                    zIndex: 0,
                    background:
                      "linear-gradient(50deg, #2b4acb 15%, #58d1c9 95%)",
                    boxShadow: "0 4px 20px rgba(99, 102, 241, 0.25)",

                    "&::before": {
                      content: '""',
                      background: "linear-gradient(50deg, #2b4acb, #58d1c9)",
                      position: "absolute",
                      top: -2,
                      left: -2,
                      backgroundSize: "400%",
                      zIndex: -1,
                      filter: "blur(5px)",
                      width: "calc(100% + 4px)",
                      height: "calc(100% + 4px)",
                      animation: "glowing 1s linear infinite",
                      opacity: 0,
                      transition: "opacity .3s ease-in-out",
                      borderRadius: 50,
                    },

                    "&:hover::before": {
                      opacity: 1,
                    },

                    "&:active": {
                      color: "#000",
                    },

                    "&:active::after": {
                      background: "transparent",
                    },

                    "&::after": {
                      zIndex: -1,
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(50deg, #2b4acb 15%, #58d1c9 95%)",
                      left: 0,
                      top: 0,
                      borderRadius: 50,
                    },

                    "@keyframes glowing": {
                      "0%": { backgroundPosition: "0 0" },
                      "20%": { backgroundPosition: "25% 0" },
                      "40%": { backgroundPosition: "50% 0" },
                      "60%": { backgroundPosition: "75% 0" },
                      "80%": { backgroundPosition: "100% 0" },
                      "100%": { backgroundPosition: "0% 0" },
                    },
                  }}
                >
                  Incotech Tienda
                </Button>
              )}
              {/* § Termina Boton "Incotech Tienda" en PC */}

              {/* § Inicia Boton para abrir menu en Moviles */}
              {isMobile && (
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{
                    display: "flow",
                    justifyContent: "flex-end",
                    left: { xs: "37vw", sm: "43vw", md: "43vw", lg: "43vw" },
                    color: "white",
                  }}
                >
                  <MenuOpenRoundedIcon sx={{ transform: "scale(1.6)" }} />
                </IconButton>
              )}
              {/* § Termina Boton para abrir menu en Moviles */}
            </Box>
          </Toolbar>
        </Container>
      </MotionAppBar>
      {/* § Termina Esqueleto y NavBar De PC */}

      {/* § Inicia Drawer del Menu de Moviles*/}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          paper: {
            sx: {
              width: { xs: "90%", sm: "50%", md: "30%" },
              height: "90vh",
              top: "5vh",
              right: 20,
              borderRadius: "24px",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255,255,255,0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              overflow: "hidden",
            },
          },
        }}
      >
        {drawer}
      </Drawer>
      {/* § Termina Drawer del Menu de Moviles*/}

      {/* Espaciador */}
      <Toolbar sx={{ minHeight: { xs: 70, md: 80 } }} />
    </>
  );
};

export default Navbar;
