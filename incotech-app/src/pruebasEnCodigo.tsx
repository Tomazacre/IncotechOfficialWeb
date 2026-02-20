import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

export default function HeroSection() {
  // le cambié el nombre para que sea más descriptivo
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: "90dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // ← centrado más confiable
        bgcolor: "grey.100",
        overflowX: "hidden", // por si acaso
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          px: { xs: 3, sm: 4, md: 6 }, // padding responsivo manual
          textAlign: "center",
          py: { xs: 6, md: 8 },
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
          Soluciones tecnológicas que impulsan tu negocio
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 720, mx: "auto" }}
        >
          Desarrollo, infraestructura y automatización para empresas modernas.
        </Typography>

        <Button size="large" variant="contained" sx={{ minWidth: 180 }}>
          Comenzar ahora
        </Button>
      </Container>
    </Box>
  );
}
