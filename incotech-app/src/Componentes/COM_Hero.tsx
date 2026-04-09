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

//~ § Componentes y hooks de Material UI
import { useEffect, useState } from 'react';
import InfoModal from '../Componentes/COM_VentanaEmergente.tsx';
import { Box, Container, Typography, Button, alpha, useTheme } from '@mui/material';
import Navbar from './COM_navBar';
import AboutIncotech from './COM_AcercaDe';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import IncotechLogo from '../assets/IncotechLogo.png';
import theme from '../TemaCustom';
import Footer from './COM_Footer.tsx';
//~ § Componentes y hooks de Material UI

export default function HeroSection() {
  const tema = useTheme();
  const MotionBox = motion(Box);

  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Box sx={{ mt: '-30px' }} />
      {/* //! I box que contiene al Hero completo */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: '100dvh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          overflow: 'hidden',
          background: 'linear-gradient(45deg, white 20%, #3348c7 100%)',
          color: 'common.white',
          fontFamily: 'Jakarta, Arial, sans-serif',
          alignContent: 'center',
        }}
      >
        {/* //& I Box con efecto blur/glass para profundidad de backgorund */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 30% 20%, rgba(43, 74, 203, 0.12) 0%, transparent 60%)',
            backdropFilter: 'blur(4px)', // glassmorphism ligero
            zIndex: 1,
          }}
        />
        {/* //& T Box con efecto blur/glass para profundidad de backgorund */}

        {/* //^ I Box que controla el dimensiones de logo difuminado */}
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: '50%', md: '40%', lg: '40%' }, // distancia desde abajo
            left: { xs: '50%', md: '30%', lg: '30%' }, // pegado a la izquierda
            width: { xs: 220, sm: 280, md: 340, lg: 420 }, // tamaño del contenedor
            height: { xs: 220, sm: 280, md: 340, lg: 420 },
            overflow: 'visible', // recorta lo que salga
            zIndex: 1, // debajo del texto principal
            pointerEvents: 'none', // no interfiere con clicks
          }}
        >
          {/* //* I Box de logo difuminado al fondo */}
          <Box
            component="img"
            src={IncotechLogo}
            alt="Incotech Symbol"
            sx={{
              width: '200%', // más grande para que se vea solo mitad
              height: 'auto',
              transform: 'translateX(-50%)', // mueve 50% a la izquierda → solo mitad visible
              opacity: 0.15, // muy sutil (ajusta 0.08 a 0.25 según quieras)
              filter: 'blur(2px) brightness(1.2)', // opcional: glow suave tech vibe
            }}
          />
          {/* //* T Box de logo difuminado al fondo */}
        </Box>
        {/* //^ T Box que controla el dimensiones de logo difuminado */}

        {/* //* I Container que controla el contenido del hero */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            justifyItems: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeOut', delay: 0 }}
            style={{ width: '80%' }}
          >
            {/* //~ I logo interactivo Incotech */}
            <MotionBox
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 2 }}
              sx={{
                position: 'relative',
                display: 'inline-block',
                cursor: 'default',
                mb: 3,
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
                const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
                e.currentTarget.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.04)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  'perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)';
                e.currentTarget.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
              }}
            >
              {'INCOTECH'.split('').map((letra, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut', delay: 0 }}
                  whileHover={{ scale: 1.3, y: -8 }}
                  style={{
                    filter: `drop-shadow(0px 20px 5px ${alpha(tema.palette.utiles.azulProfundo, 0.8)})`,
                    display: 'inline-block',
                    fontSize: 'clamp(2rem, 8vw, 7rem)',
                    fontWeight: 1000,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                    background: 'linear-gradient(180deg, #2b3aa3, #58d1c9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    cursor: 'pointer',
                    transition: 'transform 0.15s ease',
                  }}
                >
                  {letra}
                </motion.span>
              ))}
            </MotionBox>
            {/* //~ T logo interactivo Incotech */}

            {/* //+ I Titulo de hero */}
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: '1rem',
                  sm: '1rem',
                  md: '2rem',
                  lg: '3rem',
                },
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                mb: 3,
                background: 'linear-gradient(40deg, #2b3aa3, #58d1c9, #FFFFFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginTop: { xs: 3, md: 5 },
              }}
            >
              Tecnología aplicada a las necesidades de tu empresa
            </Typography>
            {/* //+ T Titulo de hero */}

            {/* //- I Descripcion de hero */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                maxWidth: 720,
                mx: 'auto',
                mb: 5,
                color: alpha(tema.palette.primary.dark, 0.5),
                fontSize: { xs: '1rem', md: '1rem' },
              }}
            >
              En Incotech, lideramos la revolución digital con soluciones de vanguardia en streaming
              y tecnología. Explora nuestras herramientas tecnológicas y únete a la próxima
              generación digital!
              <br />
              Descubre más abajo.
            </Typography>
            {/* //- T Descripcion de hero */}

            {/* //~ I botones de hero */}
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {/* //^ I boton Conoce Nuestra Tienda */}
              <Button
                variant="contained"
                size="large"
                sx={{
                  py: 1.8,
                  px: 5,
                  scale: { xs: 0.7, sm: 0.7, md: 0.9, lg: 0.9 },
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  borderRadius: 3,
                  background: (theme) =>
                    `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.utiles.cian} 90%)`,
                  //background: 'linear-gradient(45deg, #2b4acb 30%, #3f5ae6 90%)',
                  boxShadow: '0 10px 30px rgba(43, 74, 203, 0.4)',
                  '&:hover': {
                    transform: 'translateY(-2px) scale(1.01)',
                    boxShadow: '0 20px 40px rgba(43, 74, 203, 0.5)',
                  },
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                Conoce Nuestra Tienda
              </Button>
              {/* //^ T boton Conoce Nuestra Tienda */}

              {/* //^ I boton Nosotros */}
              <Button
                variant="outlined"
                size="large"
                sx={{
                  py: 1.8,
                  px: 5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  borderColor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  '&:hover': {
                    border: 'none',
                    backgroundColor: (theme) => alpha(theme.palette.utiles.azulMasClaro, 0.9),
                    color: theme.palette.primary.dark,
                    transform: 'translateY(-2px) scale(1.01)',
                    boxShadow: '0 10px 30px rgba(43, 74, 203, 0.4)',
                  },
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                Nosotros
              </Button>
              {/* //^ T boton Nosotros */}
            </Box>
            {/* //~ T botones de hero */}

            {/* //+ I texto extra hero */}
            <Typography
              variant="body2"
              sx={{
                mt: 6,
                color: 'text.disabled',
                fontSize: '0.95rem',
              }}
            >
              Ya confían en nosotros +120 empresas • 4.9/5 en reviews
            </Typography>
            {/* //+ T texto extra hero */}
          </motion.div>
        </Container>
        {/* //* T Container que controla el contenido del hero */}

        {/* //+ Puente diagonal hacia el About */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '80px',
            background: 'linear-gradient(90deg, #dae7fb 0%, #a4b4ec 100%)',
            clipPath: 'polygon(0 100%, 100% 40%, 100% 100%)',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />
        {/* //+ Puente diagonal hacia el About */}
      </Box>
      {/* //! I box que contiene al Hero completo */}
      <AboutIncotech />
      <Footer />
      <InfoModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
