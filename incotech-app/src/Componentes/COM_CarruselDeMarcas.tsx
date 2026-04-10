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

//~ I § imports a Logos y recursos
import { Box, Typography } from '@mui/material';
import theme from '../TemaCustom';
import AnyDeskLogo from '../assets/LogosDeMarcas/anydesk.svg';
import Kaspersky from '../assets/LogosDeMarcas/kaspersky.svg';
import Microsoft from '../assets/LogosDeMarcas/microsoft.svg';
import hp from '../assets/LogosDeMarcas/hp.svg';
import Dell from '../assets/LogosDeMarcas/dell.svg';
//~ T § imports a Logos y recursos

//& I § Arreglo de marcas (puedes agregar más fácilmente aquí)
const brands = [
  { src: AnyDeskLogo, name: 'AnyDesk' },
  { src: Kaspersky, name: 'Kaspersky' },
  { src: Microsoft, name: 'Microsoft' },
  { src: hp, name: 'Hp' },
  { src: Dell, name: 'Dell' },
];
//& T § Arreglo de marcas (puedes agregar más fácilmente aquí)

const doubled = [...brands, ...brands];

export default function BrandCarousel() {
  return (
    <>
      {/*//* I § Box para el background*/}
      <Box sx={{ background: theme.palette.utiles.azulHover }}>
        {/*//! I § Box que contiene el carrusel */}
        <Box
          sx={{
            width: '80%',
            justifySelf: 'center',
          }}
        >
          {/*//+ I § Titulo del carrusel */}
          <Box
            sx={{
              justifySelf: 'center',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '0.7rem', md: '0.8rem' },
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: 'utiles.cian',
                textTransform: 'uppercase',
                mb: 0.5,
              }}
            >
              ✦ Comunidad empresarial ✦
            </Typography>
          </Box>
          {/*//+ T § Titulo del carrusel */}

          {/*//~ I § Box del carrusel */}
          <Box
            sx={{
              overflow: 'hidden',
              position: 'relative',
              py: 2,
              borderRadius: 1,
              border: '0px solid',
              borderColor: 'divider',
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: 80,
                zIndex: 2,
                pointerEvents: 'none',
              },
              '&::before': {
                left: 0,
                background: `linear-gradient(to right, ${theme.palette.utiles.azulHover}, transparent)`,
              },
              '&::after': {
                right: 0,
                background: `linear-gradient(to left, ${theme.palette.utiles.azulHover}, transparent)`,
              },
              background: theme.palette.utiles.azulHover,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: 'max-content',
                animation: 'scroll 30s linear infinite',
                '&:hover': { animationPlayState: 'paused' },
                '@keyframes scroll': {
                  from: { transform: 'translateX(0)' },
                  to: { transform: 'translateX(-50%)' },
                },
              }}
            >
              {/*//^ I § Carga de logos */}
              {doubled.map((b, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 150,
                    height: 70,
                    mx: '14px',
                    flexShrink: 0,
                    borderRadius: 3,
                    border: '0px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: theme.palette.utiles.azulHover,
                    transition: 'all 0.2s',
                    '&:hover': {
                      bgcolor: theme.palette.utiles.azulMasHover,
                      borderColor: 'grey.400',
                      transform: 'translateY(-3px)',
                    },
                    '& img': { filter: 'grayscale(1) opacity(0.55)', transition: 'filter 0.3s' },
                    '&:hover img': { filter: 'grayscale(0) opacity(1)' },
                  }}
                >
                  {/*//- I § Box de la Imagen de logos */}
                  <Box
                    component="img"
                    src={b.src}
                    alt={b.name}
                    sx={{ maxWidth: 140, maxHeight: 70, objectFit: 'contain' }}
                  />
                  {/*//- T § Box de la Imagen de logos */}
                </Box>
              ))}
              {/*//^ T § Carga de logos */}
            </Box>
          </Box>
          {/*//~ T § Box del carrusel */}
        </Box>
        {/*//! T § Box que contiene el carrusel */}
      </Box>
      {/*//* T § Box para el background*/}
    </>
  );
}
