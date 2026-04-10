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

import { Box, Typography, Stack, Button } from '@mui/material';
import { alpha } from '@mui/material/styles';
import theme from '../TemaCustom';
import CarruselDeMarcas from '../Componentes/COM_CarruselDeMarcas.tsx';

// Reemplaza con tu imagen real
const PHOTO_URL = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80';

// otro ejemplo de cian #1bbfb0
const teal = theme.palette.primary.main;
const navy = theme.palette.utiles.cian;
const bodyText = theme.palette.utiles.azulProfundo;
const mutedText = theme.palette.utiles.azulClaro;

const stats = [
  { value: '2019', label: 'Fundación' },
  { value: '500+', label: 'Clientes' },
  { value: '98%', label: 'Satisfacción' },
];

export default function AboutIncotech() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          background: 'linear-gradient(135deg, #dce8fb 0%, #c2d2f5 30%, #a8b8ee 60%, #9aaae8 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          py: { xs: 7, sm: 8, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/*//* I Boxes decorativos del Backgorund  */}
        {/* Círculos decorativos fondo */}
        <Box
          sx={{
            position: 'absolute',
            width: { xs: 280, md: 560 },
            height: { xs: 280, md: 560 },
            borderRadius: '50%',
            border: '1.5px solid',
            borderColor: alpha(teal, 0.5),
            top: '50%',
            left: { xs: '-10%', md: '-5%' },
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: { xs: 180, md: 360 },
            height: { xs: 180, md: 360 },
            borderRadius: '50%',
            border: '1.5px solid',
            borderColor: alpha(teal, 0.5),
            top: '50%',
            left: { xs: '-10%', md: '-5%' },
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }}
        />
        {/* Grid de puntos */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(${alpha(navy, 0.1)} 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
            pointerEvents: 'none',
          }}
        />
        {/*//* T Boxes decorativos del Backgorund  */}

        {/*//& I Contenido de Acerca de */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 7, sm: 8, md: 10 },
            maxWidth: 1100,
            width: '100%',
            position: 'relative',
            zIndex: 1,
            alignItems: 'center',
          }}
        >
          {/* ── Imagen ── */}
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              pt: { xs: 2.5, md: 0 },
              pb: { xs: 2.5, md: 0 },
            }}
          >
            {/* Marco decorativo */}
            <Box
              sx={{
                position: 'absolute',
                width: { xs: '75vw', sm: 300, md: 320 },
                maxWidth: 320,
                height: { xs: 'calc(75vw * 1.19)', sm: 357, md: 380 },
                maxHeight: 380,
                border: '2px solid',
                borderColor: alpha(teal, 0.45),
                borderRadius: 4,
                top: { xs: 30, md: 20 },
                left: { xs: '50%', md: 20 },
                transform: { xs: 'translateX(-50%)', md: 'none' },
              }}
            />
            {/* Marco decorativo */}

            {/* Foto */}
            <Box
              component="img"
              src={PHOTO_URL}
              alt="Incotech"
              sx={{
                width: { xs: '75vw', sm: 300, md: 320 },
                maxWidth: 320,
                height: { xs: 'calc(75vw * 1.19)', sm: 357, md: 380 },
                maxHeight: 380,
                objectFit: 'cover',
                borderRadius: 4,
                position: 'relative',
                zIndex: 1,
                border: '2px solid',
                borderColor: alpha('#fff', 0.7),
                boxShadow: `0 8px 32px ${alpha(navy, 0.18)}`,
              }}
            />
            {/* Foto */}

            {/* Chip "5+ años" */}
            <Box
              sx={{
                position: 'absolute',
                bottom: { xs: 0, md: -16 },
                right: { xs: 'calc(12.5vw - 24px)', sm: 'calc(50% - 174px)', md: -16 },
                zIndex: 2,
                bgcolor: teal,
                color: '#fff',
                px: 2,
                py: 1,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: `0 4px 16px ${alpha(teal, 0.4)}`,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 22 },
                  fontWeight: 700,
                  lineHeight: 1,
                  fontFamily: '"Syne", sans-serif',
                }}
              >
                5+
              </Typography>
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: 1,
                  fontFamily: '"Syne", sans-serif',
                }}
              >
                AÑOS
              </Typography>
            </Box>
            {/* Chip "5+ años" */}

            {/* Tag "Activo desde 2019" */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 0, md: -16 },
                left: { xs: 'calc(12.5vw - 24px)', sm: 'calc(50% - 174px)', md: -16 },
                zIndex: 2,
                bgcolor: alpha('#fff', 0.85),
                border: '1.5px solid',
                borderColor: alpha(teal, 0.4),
                px: 1.5,
                py: 0.5,
                borderRadius: 1.5,
                display: 'flex',
                alignItems: 'center',
                gap: 0.8,
                backdropFilter: 'blur(8px)',
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  bgcolor: teal,
                  animation: 'pulse 2s infinite',
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: 10, sm: 11 },
                  fontWeight: 600,
                  fontFamily: '"Syne", sans-serif',
                  letterSpacing: 0.5,
                  whiteSpace: 'nowrap',
                  color: navy,
                }}
              >
                Activo desde 2019
              </Typography>
            </Box>
            {/* Tag "Activo desde 2019" */}
          </Box>

          {/* ── Texto ── */}
          <Stack gap={{ xs: 2.5, md: 3 }}>
            {/* Label */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ width: 28, height: 2, bgcolor: teal, borderRadius: 1, flexShrink: 0 }} />
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 3,
                  color: teal,
                  fontFamily: '"Syne", sans-serif',
                  textTransform: 'uppercase',
                }}
              >
                Nosotros
              </Typography>
            </Box>

            {/* Título */}
            <Typography
              sx={{
                fontSize: { xs: 38, sm: 46, md: 52 },
                fontWeight: 800,
                lineHeight: 1.05,
                color: navy,
                fontFamily: '"Syne", sans-serif',
                letterSpacing: -1,
                WebkitTextStroke: '0.5px ' + theme.palette.primary.main,
              }}
            >
              Inco
              <Box component="span" sx={{ color: teal }}>
                tech
              </Box>
            </Typography>

            {/* Descripción */}
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 15 },
                lineHeight: 1.8,
                color: bodyText,
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              Somos una empresa consultora fundada en 2019, que ofrece la correcta aplicación de
              tecnologías, dando soporte antes, durante y después de la implementación de equipos y
              software. Nuestro objetivo es que tus procesos sean más ágiles, seguros y rentables.
            </Typography>

            {/* Quote */}
            <Box
              sx={{
                pl: { xs: 2, md: 2.5 },
                borderLeft: '3px solid',
                borderColor: teal,
                py: 0.5,
                bgcolor: alpha('#fff', 0.4),
                borderRadius: '0 8px 8px 0',
                pr: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 13, sm: 14 },
                  fontStyle: 'italic',
                  color: bodyText,
                  lineHeight: 1.75,
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                "No solo implementamos tecnología: la adaptamos a tu realidad para que cada proceso
                sea más ágil, más seguro y más rentable desde el primer día."
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: teal,
                  mt: 1.2,
                  fontFamily: '"Syne", sans-serif',
                  letterSpacing: 0.5,
                }}
              >
                Incotech — Fundador, CEO
              </Typography>
            </Box>

            {/* Stats */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: { xs: 1.5, sm: 2 },
                mt: { xs: 0.5, md: 1 },
              }}
            >
              {stats.map((s) => (
                <Box
                  key={s.label}
                  sx={{
                    bgcolor: alpha('#fff', 0.55),
                    border: '1.5px solid',
                    borderColor: alpha(teal, 0.25),
                    borderRadius: 2.5,
                    px: { xs: 1, sm: 2 },
                    py: { xs: 1.2, sm: 1.5 },
                    textAlign: 'center',
                    backdropFilter: 'blur(8px)',
                    transition: 'all .2s',
                    '&:hover': {
                      bgcolor: alpha('#fff', 0.85),
                      borderColor: teal,
                      transform: 'translateY(-3px)',
                      boxShadow: `0 6px 20px ${alpha(teal, 0.2)}`,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 20, sm: 24 },
                      fontWeight: 800,
                      color: navy,
                      lineHeight: 1,
                      fontFamily: '"Syne", sans-serif',
                    }}
                  >
                    {s.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 11 },
                      color: mutedText,
                      mt: 0.5,
                      fontFamily: '"DM Sans", sans-serif',
                      letterSpacing: 0.5,
                    }}
                  >
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Botones — mismos que el hero */}
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} mt={1}>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: navy,
                  color: '#fff',
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 600,
                  fontSize: 14,
                  px: 3.5,
                  py: 1.3,
                  borderRadius: 99,
                  textTransform: 'none',
                  '&:hover': { bgcolor: alpha(navy, 0.82) },
                }}
              >
                Conoce Nuestra Tienda
              </Button>
              <Button
                variant="text"
                sx={{
                  color: navy,
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 600,
                  fontSize: 14,
                  px: 3,
                  py: 1.3,
                  borderRadius: 99,
                  textTransform: 'none',
                  '&:hover': { bgcolor: alpha('#fff', 0.4) },
                }}
              >
                Contáctanos
              </Button>
            </Stack>
          </Stack>
        </Box>
        {/*//& T Contenido de Acerca de */}

        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
      </Box>
      <CarruselDeMarcas />
    </>
  );
}
