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

import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Chip,
  Divider,
  Button,
  alpha,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const contactInfo = [
  {
    icon: <EmailIcon />,
    valor: 'contacto@incotech.mx',
    label: 'Correo electrónico',
    color: '#2b4acb',
    href: 'mailto:contacto@incotech.mx',
  },
  {
    icon: <PhoneIcon />,
    valor: '+52 461 123 4567',
    label: 'Teléfono directo',
    color: '#58d1c9',
    href: 'tel:+524611234567',
  },
  {
    icon: <WhatsAppIcon />,
    valor: '+52 461 987 6543',
    label: 'WhatsApp',
    color: '#25D366',
    href: 'https://wa.me/524619876543',
  },
  {
    icon: <LocationOnIcon />,
    valor: 'Celaya, Guanajuato',
    label: 'Ubicación',
    color: '#2b4acb',
    href: '#',
  },
];

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: 'blur(6px)',
            backgroundColor: 'rgba(10, 20, 80, 0.4)',
          },
        },
        paper: {
          sx: {
            borderRadius: 4,
            overflow: 'hidden',
            background: 'linear-gradient(145deg, #ffffff 60%, #eef1fc 100%)',
            boxShadow: '0 24px 60px rgba(43, 74, 203, 0.2)',
          },
        },
      }}
    >
      {/* ── Header ── */}
      <Box
        sx={{
          background: 'linear-gradient(90deg, #2b4acb 0%, #58d1c9 100%)',
          px: 3,
          py: 2.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Chip
            label="ESTAMOS PARA AYUDARTE"
            size="small"
            sx={{
              bgcolor: 'rgba(255,255,255,0.2)',
              color: 'white',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.1em',
              mb: 0.8,
            }}
          />
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 800, lineHeight: 1 }}>
            Contáctanos
          </Typography>
        </Box>
        <IconButton
          onClick={onClose}
          sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' } }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ p: 3 }}>
        {/* ── Horario destacado ── */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            p: 1.5,
            borderRadius: 3,
            mb: 3,
            background: 'linear-gradient(90deg, rgba(43,74,203,0.06), rgba(88,209,201,0.06))',
            border: '1px solid',
            borderColor: alpha('#2b4acb', 0.12),
          }}
        >
          <AccessTimeIcon sx={{ color: '#2b4acb', fontSize: 20 }} />
          <Box>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#2b4acb' }}>
              Horario de atención
            </Typography>
            <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>
              Lunes a Viernes · 9:00 am – 6:00 pm · Zona Centro (CST)
            </Typography>
          </Box>
          <Box
            sx={{
              ml: 'auto',
              px: 1.5,
              py: 0.4,
              borderRadius: 99,
              bgcolor: alpha('#25D366', 0.12),
            }}
          >
            <Typography sx={{ fontSize: '0.68rem', fontWeight: 700, color: '#25D366' }}>
              ● En línea
            </Typography>
          </Box>
        </Box>

        {/* ── Tarjetas de contacto ── */}
        {contactInfo.map((c, i) => (
          <Box
            key={i}
            component="a"
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              p: 2,
              mb: 1.5,
              borderRadius: 3,
              textDecoration: 'none',
              border: '1px solid',
              borderColor: alpha(c.color, 0.15),
              bgcolor: alpha(c.color, 0.04),
              transition: 'all 0.25s ease',
              cursor: 'pointer',
              '&:hover': {
                bgcolor: alpha(c.color, 0.1),
                borderColor: alpha(c.color, 0.4),
                transform: 'translateX(4px)',
              },
            }}
          >
            {/* Icono */}
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2,
                flexShrink: 0,
                bgcolor: alpha(c.color, 0.12),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: c.color,
              }}
            >
              {c.icon}
            </Box>

            {/* Texto */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                sx={{ fontSize: '0.7rem', color: 'text.disabled', fontWeight: 500, mb: 0.2 }}
              >
                {c.label}
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: c.color }}>
                {c.valor}
              </Typography>
            </Box>

            {/* Flecha */}
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                bgcolor: alpha(c.color, 0.1),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: c.color,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              →
            </Box>
          </Box>
        ))}

        <Divider sx={{ my: 2.5 }} />

        {/* ── Mensaje rápido ── */}
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, color: 'text.primary' }}>
          ¿Prefieres que te contactemos?
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, fontSize: '0.8rem' }}>
          Déjanos tu información y un asesor se pondrá en contacto contigo en menos de 24 horas.
        </Typography>

        {/* ── Botones ── */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
          <Button
            onClick={onClose}
            variant="outlined"
            sx={{
              borderRadius: 3,
              borderColor: 'divider',
              color: 'text.secondary',
              '&:hover': { borderColor: '#2b4acb', color: '#2b4acb' },
            }}
          >
            Cerrar
          </Button>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              borderRadius: 3,
              fontWeight: 700,
              background: 'linear-gradient(90deg, #2b4acb, #58d1c9)',
              boxShadow: '0 8px 20px rgba(43,74,203,0.3)',
              '&:hover': { boxShadow: '0 12px 28px rgba(43,74,203,0.4)' },
            }}
          >
            Enviar mensaje
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
