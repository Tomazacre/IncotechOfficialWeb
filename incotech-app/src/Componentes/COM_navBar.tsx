import React, { useState, useEffect } from "react";
import logo from "../assets/IncotechLogo.png";

// Componentes y hooks de Material UI
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

import MenuIcon from "@mui/icons-material/Menu"; // Ícono hamburguesa
import CloseIcon from "@mui/icons-material/Close"; // Ícono cerrar
import { motion } from "framer-motion"; // Animaciones (opcional)

// Links del menú (se renderizan dinámicamente con map)
const navLinks = [
  { title: "Inicio", href: "#products" },
  { title: "Servicios", href: "#features" },
  { title: "Productos", href: "#pricing" },
  { title: "Radio", href: "#blog" },
  { title: "Contáctanos", href: "#blog" },
];

const Navbar = () => {
  const theme = useTheme(); // Obtiene el tema actual
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // true si la pantalla es menor que "md"

  // Estado que controla si el menú móvil está abierto
  const [mobileOpen, setMobileOpen] = useState(false);

  // Estado que controla si la navbar tiene blur (cuando haces scroll)
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll y activa el blur después de 20px
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY; // Cuánto se ha bajado
      setScrolled(offset > 20); // Activa blur si pasa 20px
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza del evento cuando el componente se desmonta
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Abre o cierra el Drawer móvil
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Contenido del menú móvil
  const drawer = (
    <Box sx={{ textAlign: "center", pt: 2 }}>
      {/* Botón cerrar */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {/* Renderiza links dinámicamente */}
        {navLinks.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              sx={{
                position: "relative",
                textAlign: "center",
                // Línea animada debajo del botón
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: "6px",
                  left: "50%",
                  background: "linear-gradient(90deg, #6366f1, #a855f7)",
                  transition: "all 0.35s ease",
                  transform: "translateX(-50%)",
                },

                // Expande la línea en hover
                "&:hover:after": {
                  width: "30%",
                },
              }}
              component="a"
              href={item.href}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Botón principal en móvil */}
        <ListItem disablePadding>
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
                background: "linear-gradient(45deg, #6366f1 30%, #a855f7 90%)",
                boxShadow: "0 4px 20px rgba(99, 102, 241, 0.25)",

                // Animación hover
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
                },

                transition: "all 0.3s ease",
              }}
            >
              Incotech Tienda
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  {
    /* Este return es el que manda la vista ya creada*/
  }
  return (
    <>
      {/* Barra superior fija */}
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          transition: "all 0.4s ease",
          backdropFilter: scrolled ? "blur(7px)" : "none",
          backgroundColor: scrolled
            ? alpha(theme.palette.background.default, 0)
            : "transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.08)" : "none",
        }}
      >
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
            {/* Logo */}
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

            {/* Links centro */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  justifyContent: "center",
                }}
              >
                {navLinks.map((link) => (
                  <Button
                    key={link.title}
                    sx={{
                      position: "relative",
                      fontSize: 17,
                      fontWeight: "normal",
                      color: "#2b3aa3",

                      "&:hover": {
                        backgroundColor: "transparent",
                        transform: "scale(1.12)",
                        transition: "all 0.5s ease",
                        color: "#3f5ae6",
                      },

                      "&:after": {
                        content: '""',
                        position: "absolute",
                        width: "0%",
                        height: "2px",
                        bottom: "6px",
                        left: "50%",
                        background:
                          "linear-gradient(50deg, #2b4acb 15%, #58d1c9 95%)",
                        transition: "all 0.35s ease",
                        transform: "translateX(-50%)",
                      },

                      "&:hover:after": {
                        width: "70%",
                      },
                    }}
                  >
                    {link.title}
                  </Button>
                ))}
              </Box>
            )}

            {/* Derecha */}
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

              {isMobile && (
                <IconButton onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            backdropFilter: "blur(16px)",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Espaciador */}
      <Toolbar sx={{ minHeight: { xs: 70, md: 80 } }} />
    </>
  );
};

export default Navbar;
