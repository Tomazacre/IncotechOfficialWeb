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
import { Box, Container, Typography, Button, alpha, useTheme } from '@mui/material';
import Navbar from './COM_navBar';
import AboutIncotech from './COM_AcercaDe';
import { motion } from 'framer-motion';
import IncotechLogo from '../assets/IncotechLogo.png';
import theme from '../TemaCustom';
//~ § Componentes y hooks de Material UI

export default function HeroSection() {
  const tema = useTheme();
  return (
    <>
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
        }}
      >
        <Navbar />
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
            bottom: { xs: '50%', md: '50%', lg: '50%' }, // distancia desde abajo
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
            px: { xs: 3, md: 6 },
            py: { xs: 8, md: 12 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* //+ I Titulo de hero */}
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: '3.2rem',
                  sm: '4.5rem',
                  md: '5.8rem',
                  lg: '6.8rem',
                },
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                mb: 3,
                background: 'linear-gradient(40deg, #2b3aa3, #58d1c9, #FFFFFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              «-INCOTECH-»
              <br />
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
                fontSize: { xs: '1.25rem', md: '1.5rem' },
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
                  fontSize: '1.1rem',
                  fontWeight: 600,
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
                    transform: 'translateY(-2px) scale(1.02)',
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
      </Box>
      {/* //! I box que contiene al Hero completo */}
      <AboutIncotech />
    </>
  );
}
