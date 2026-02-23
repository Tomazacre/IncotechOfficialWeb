//import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  alpha,
  useTheme,
} from "@mui/material";
import Navbar from "./COM_navBar";
import { motion } from "framer-motion"; // ← agrega framer-motion para animaciones suaves
import IncotechLogo from "../assets/IncotechLogo.png";

export default function HeroSection() {
  const tema = useTheme();
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100dvh", // full viewport height 2026-style
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        overflow: "hidden",
        // Fondo gradiente tech moderno + sutil noise/glass
        background: "linear-gradient(45deg, white 20%, #3348c7 100%)",
        color: "common.white",
      }}
    >
      <Navbar />
      {/* Capa de overlay con blur/glass para profundidad */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 20%, rgba(43, 74, 203, 0.12) 0%, transparent 60%)",
          backdropFilter: "blur(4px)", // glassmorphism ligero
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "50%", md: "50%", lg: "50%" }, // distancia desde abajo
          left: { xs: "50%", md: "30%", lg: "30%" }, // pegado a la izquierda
          width: { xs: 220, sm: 280, md: 340, lg: 420 }, // tamaño del contenedor
          height: { xs: 220, sm: 280, md: 340, lg: 420 },
          overflow: "visible", // recorta lo que salga
          zIndex: 1, // debajo del texto principal
          pointerEvents: "none", // no interfiere con clicks
        }}
      >
        <Box
          component="img"
          src={IncotechLogo} // ← solo el ícono (sin letras)
          alt="Incotech Symbol"
          sx={{
            width: "200%", // más grande para que se vea solo mitad
            height: "auto",
            transform: "translateX(-50%)", // mueve 50% a la izquierda → solo mitad visible
            opacity: 0.15, // muy sutil (ajusta 0.08 a 0.25 según quieras)
            filter: "blur(2px) brightness(1.2)", // opcional: glow suave tech vibe
          }}
        />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          px: { xs: 3, md: 6 },
          py: { xs: 8, md: 12 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography
            variant="h1" // o custom h1 grande
            sx={{
              fontSize: {
                xs: "3.2rem",
                sm: "4.5rem",
                md: "5.8rem",
                lg: "6.8rem",
              },
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              mb: 3,
              background: "linear-gradient(40deg, #2b3aa3, #58d1c9, #FFFFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Tecnología que acelera
            <br />
            el futuro de tu empresa
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              maxWidth: 720,
              mx: "auto",
              mb: 5,
              color: alpha(tema.palette.primary.dark, 0.5),
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            Infraestructura escalable, automatización inteligente y desarrollo
            de vanguardia. Construimos lo que las empresas del 2026 necesitan
            hoy.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                py: 1.8,
                px: 5,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 3,
                background: "linear-gradient(45deg, #2b4acb 30%, #3f5ae6 90%)",
                boxShadow: "0 10px 30px rgba(43, 74, 203, 0.4)",
                "&:hover": {
                  transform: "translateY(-4px) scale(1.04)",
                  boxShadow: "0 20px 40px rgba(43, 74, 203, 0.5)",
                },
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              Comenzar gratis
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                py: 1.8,
                px: 5,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 3,
                borderColor: "rgba(255,255,255,0.3)",
                color: "white",
                "&:hover": {
                  borderColor: "#2b4acb",
                  bgcolor: "rgba(43, 74, 203, 0.08)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Ver demo
            </Button>
          </Box>

          {/* Opcional: trust signals pequeños abajo */}
          <Typography
            variant="body2"
            sx={{
              mt: 6,
              color: "text.disabled",
              fontSize: "0.95rem",
            }}
          >
            Ya confían en nosotros +120 empresas • 4.9/5 en reviews
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
