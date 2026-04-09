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

import { Box, Typography, Grid, Divider, IconButton, alpha, useTheme, Chip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RouterIcon from '@mui/icons-material/Router';
import BuildIcon from '@mui/icons-material/Build';
import StorageIcon from '@mui/icons-material/Storage';
import CampaignIcon from '@mui/icons-material/Campaign';
import logo from '../assets/IncotechLogo.png';

// ─────────────────────────────────────────────
//   EDITA SOLO ESTOS DATOS
// ─────────────────────────────────────────────
const links = {
  servicios: [
    { label: 'Fibra Óptica', icono: <RouterIcon sx={{ fontSize: 14 }} /> },
    { label: 'Mantenimientos', icono: <BuildIcon sx={{ fontSize: 14 }} /> },
    { label: 'Infraestructura', icono: <StorageIcon sx={{ fontSize: 14 }} /> },
    { label: 'Streaming & Media', icono: <CampaignIcon sx={{ fontSize: 14 }} /> },
  ],
  empresa: ['Acerca de nosotros', 'Casos de éxito', 'Blog tecnológico', 'Trabaja con nosotros'],
  legal: ['Aviso de privacidad', 'Términos y condiciones', 'Política de cookies'],
};

const contacto = [
  { icono: <EmailIcon sx={{ fontSize: 16 }} />, texto: 'contacto@incotech.mx', color: '#2b4acb' },
  { icono: <PhoneIcon sx={{ fontSize: 16 }} />, texto: '+52 461 123 4567', color: '#58d1c9' },
  { icono: <WhatsAppIcon sx={{ fontSize: 16 }} />, texto: '+52 461 987 6543', color: '#25D366' },
  {
    icono: <LocationOnIcon sx={{ fontSize: 16 }} />,
    texto: 'Celaya, Guanajuato',
    color: '#2b4acb',
  },
];

const redes = [
  { icono: <FacebookIcon />, color: '#1877F2', href: '#' },
  { icono: <InstagramIcon />, color: '#E1306C', href: '#' },
  { icono: <LinkedInIcon />, color: '#0A66C2', href: '#' },
  { icono: <YouTubeIcon />, color: '#FF0000', href: '#' },
];
// ─────────────────────────────────────────────

export default function Footer() {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* ── Franja superior decorativa ── */}
      <Box
        sx={{
          height: 4,
          background: 'linear-gradient(90deg, #2b4acb 0%, #58d1c9 50%, #2b4acb 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s linear infinite',
          '@keyframes shimmer': {
            '0%': { backgroundPosition: '0% 0%' },
            '100%': { backgroundPosition: '200% 0%' },
          },
        }}
      />

      {/* ── Cuerpo principal ── */}
      <Box
        sx={{
          background: 'linear-gradient(160deg, #0d1b6e 0%, #0a1240 60%, #071030 100%)',
          px: { xs: 3, md: 8 },
          pt: 6,
          pb: 3,
          position: 'relative',
        }}
      >
        {/* Círculo decorativo fondo */}
        <Box
          sx={{
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: '50%',
            top: -150,
            right: -100,
            background: 'radial-gradient(circle, rgba(88,209,201,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 300,
            height: 300,
            borderRadius: '50%',
            bottom: 0,
            left: -80,
            background: 'radial-gradient(circle, rgba(43,74,203,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <Grid container spacing={5}>
          {/* ── Columna 1: Marca ── */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                component="img"
                src={logo}
                alt="Incotech"
                sx={{ width: 46, height: 46, objectFit: 'contain' }}
              />
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: '1.6rem',
                  background: 'linear-gradient(50deg, #7b96ff 15%, #58d1c9 95%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Incotech
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: '0.85rem',
                color: alpha('#fff', 0.55),
                lineHeight: 1.8,
                mb: 3,
                maxWidth: 280,
              }}
            >
              Lideramos la transformación digital de empresas con soluciones tecnológicas de
              vanguardia. Conectamos el futuro con tu negocio.
            </Typography>

            {/* Redes sociales */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {redes.map((r, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={r.href}
                  target="_blank"
                  size="small"
                  sx={{
                    color: alpha('#fff', 0.5),
                    border: '1px solid',
                    borderColor: alpha('#fff', 0.1),
                    borderRadius: 2,
                    transition: 'all 0.25s',
                    '&:hover': {
                      color: r.color,
                      borderColor: alpha(r.color, 0.5),
                      bgcolor: alpha(r.color, 0.1),
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {r.icono}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* ── Columna 2: Servicios ── */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#58d1c9',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Servicios
            </Typography>
            {links.servicios.map((s, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mb: 1.2,
                  color: alpha('#fff', 0.5),
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': { color: '#58d1c9', transform: 'translateX(4px)' },
                }}
              >
                <Box sx={{ color: 'inherit', display: 'flex' }}>{s.icono}</Box>
                <Typography sx={{ fontSize: '0.82rem', color: 'inherit' }}>{s.label}</Typography>
              </Box>
            ))}
          </Grid>

          {/* ── Columna 3: Empresa ── */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#58d1c9',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Empresa
            </Typography>
            {links.empresa.map((e, i) => (
              <Typography
                key={i}
                sx={{
                  fontSize: '0.82rem',
                  color: alpha('#fff', 0.5),
                  mb: 1.2,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': { color: '#7b96ff', transform: 'translateX(4px)' },
                }}
              >
                {e}
              </Typography>
            ))}
          </Grid>

          {/* ── Columna 4: Contacto ── */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#58d1c9',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Contacto
            </Typography>
            {contacto.map((c, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: 1.5,
                    flexShrink: 0,
                    bgcolor: alpha(c.color, 0.15),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: c.color,
                  }}
                >
                  {c.icono}
                </Box>
                <Typography sx={{ fontSize: '0.82rem', color: alpha('#fff', 0.6) }}>
                  {c.texto}
                </Typography>
              </Box>
            ))}

            {/* Badge horario */}
            <Box
              sx={{
                mt: 2,
                p: 1.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: alpha('#58d1c9', 0.2),
                bgcolor: alpha('#58d1c9', 0.05),
              }}
            >
              <Typography sx={{ fontSize: '0.7rem', color: '#58d1c9', fontWeight: 700 }}>
                ● En línea ahora
              </Typography>
              <Typography sx={{ fontSize: '0.68rem', color: alpha('#fff', 0.4), mt: 0.3 }}>
                Lun – Vie · 9:00 am – 6:00 pm CST
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* ── Divider ── */}
        <Divider sx={{ my: 4, borderColor: alpha('#fff', 0.08) }} />

        {/* ── Pie inferior ── */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontSize: '0.75rem', color: alpha('#fff', 0.3) }}>
            © {new Date().getFullYear()} Incotech. Todos los derechos reservados.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            {links.legal.map((l, i) => (
              <Typography
                key={i}
                sx={{
                  fontSize: '0.72rem',
                  color: alpha('#fff', 0.3),
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  '&:hover': { color: alpha('#fff', 0.7) },
                }}
              >
                {l}
              </Typography>
            ))}
          </Box>

          <Chip
            label="By Wes-K - Hecho en México 🇲🇽"
            size="small"
            sx={{
              bgcolor: alpha('#2b4acb', 0.2),
              color: alpha('#fff', 0.5),
              fontSize: '0.68rem',
              border: '1px solid',
              borderColor: alpha('#2b4acb', 0.3),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
