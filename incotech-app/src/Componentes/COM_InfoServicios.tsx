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
  //useTheme,
  Collapse,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RouterIcon from '@mui/icons-material/Router';
import BuildIcon from '@mui/icons-material/Build';
import StorageIcon from '@mui/icons-material/Storage';
import CampaignIcon from '@mui/icons-material/Campaign';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from 'react';

interface ServicesModalProps {
  open: boolean;
  onClose: () => void;
}

//! I Array de declaracion de áreas y servicios
const areas = [
  {
    titulo: 'Fibra Óptica',
    icono: <RouterIcon />,
    color: '#2b4acb',
    descripcion: 'Conectividad de alta velocidad para empresas y hogares.',
    servicios: [
      'Instalación de red de fibra óptica',
      'Mantenimiento preventivo y correctivo',
      'Monitoreo 24/7 de la red',
      'Ampliación de infraestructura existente',
    ],
  },
  {
    titulo: 'Mantenimientos',
    icono: <BuildIcon />,
    color: '#58d1c9',
    descripcion: 'Soporte técnico especializado para tu equipo y red.',
    servicios: [
      'Mantenimiento de equipos de cómputo',
      'Revisión y diagnóstico de redes',
      'Soporte técnico en sitio',
      'Contratos de mantenimiento mensual',
    ],
  },
  {
    titulo: 'Infraestructura',
    icono: <StorageIcon />,
    color: '#7c3aed',
    descripcion: 'Soluciones de servidores, nube y almacenamiento.',
    servicios: [
      'Configuración de servidores',
      'Migración a la nube',
      'Respaldo y recuperación de datos',
      'Virtualización de entornos',
    ],
  },
  {
    titulo: 'Streaming & Media',
    icono: <CampaignIcon />,
    color: '#e11d48',
    descripcion: 'Transmisión profesional de audio y video en vivo.',
    servicios: [
      'Configuración de plataformas de streaming',
      'Transmisiones en vivo para eventos',
      'Radio en línea y podcast',
      'CDN y distribución de contenido',
    ],
  },
];
//! T Array de declaracion de áreas y servicios

export default function ServicesModal({ open, onClose }: ServicesModalProps) {
  //const theme = useTheme();
  const [areaAbierta, setAreaAbierta] = useState<number | null>(0);

  //+ I funcion de apertura y cierre de los servicios
  const toggle = (i: number) => setAreaAbierta(areaAbierta === i ? null : i);
  //+ T funcion de apertura y cierre de los servicios

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
            // ← bottom sheet en móvil, modal normal en PC
            borderRadius: { xs: '16px 16px 0 0', sm: 4 },
            overflow: 'hidden',
            background: 'linear-gradient(145deg, #ffffff 60%, #eef1fc 100%)',
            boxShadow: '0 24px 60px rgba(43, 74, 203, 0.2)',
            position: { xs: 'fixed', sm: 'relative' },
            bottom: { xs: 0, sm: 'auto' },
            left: { xs: 0, sm: 'auto' },
            right: { xs: 0, sm: 'auto' },
            margin: { xs: 0, sm: 'auto' },
            maxHeight: { xs: '92dvh', sm: '90vh' },
            width: '100%',
          },
        },
      }}
    >
      {/*//* I Header del modal */}
      <Box
        sx={{
          background: 'linear-gradient(90deg, #2b4acb 0%, #58d1c9 100%)',
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 2.5 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {/*//~ I Pill de arrastre móvil */}
        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
            position: 'absolute',
            top: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 36,
            height: 4,
            borderRadius: 99,
            bgcolor: 'rgba(255,255,255,0.4)',
          }}
        />
        {/*//~ T Pill de arrastre móvil */}

        {/*//& I Titulos */}
        <Box>
          <Chip
            label="LO QUE HACEMOS"
            size="small"
            sx={{
              bgcolor: 'rgba(255,255,255,0.2)',
              color: 'white',
              fontSize: { xs: 9, sm: 10 },
              fontWeight: 700,
              letterSpacing: '0.1em',
              mb: 0.8,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontWeight: 800,
              lineHeight: 1,
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
          >
            Nuestros Servicios
          </Typography>
        </Box>
        {/*//& T Titulos */}

        {/*//+ I Icono de cierre */}
        <IconButton
          onClick={onClose}
          size="small"
          sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' } }}
        >
          <CloseIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
        </IconButton>
        {/*//+ T Icono de cierre */}
      </Box>
      {/* //* T Header del modal */}

      {/* //^ I Contenido del modal */}
      <DialogContent
        sx={{
          p: { xs: 1.5, sm: 3 },
          overflowY: 'auto',
        }}
      >
        {/* ── Intro ── */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            p: { xs: 1.2, sm: 1.5 },
            borderRadius: 3,
            mb: { xs: 2, sm: 3 },
            background: 'linear-gradient(90deg, rgba(43,74,203,0.06), rgba(88,209,201,0.06))',
            border: '1px solid',
            borderColor: alpha('#2b4acb', 0.12),
          }}
        >
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: { xs: '0.72rem', sm: '0.75rem' },
                fontWeight: 700,
                color: '#2b4acb',
              }}
            >
              Soluciones tecnológicas integrales
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.68rem', sm: '0.72rem' },
                color: 'text.secondary',
              }}
            >
              Selecciona un área para ver los servicios disponibles
            </Typography>
          </Box>
          <Box
            sx={{
              ml: 'auto',
              px: 1.5,
              py: 0.4,
              borderRadius: 99,
              bgcolor: alpha('#2b4acb', 0.1),
              flexShrink: 0,
            }}
          >
            <Typography sx={{ fontSize: '0.68rem', fontWeight: 700, color: '#2b4acb' }}>
              {areas.length} áreas
            </Typography>
          </Box>
        </Box>

        {/* ── Áreas acordeón ── */}
        {areas.map((area, i) => (
          <Box key={i} sx={{ mb: 1.5 }}>
            {/* Cabecera del área */}
            <Box
              onClick={() => toggle(i)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1.2, sm: 2 },
                p: { xs: 1.5, sm: 2 },
                borderRadius: areaAbierta === i ? '12px 12px 0 0' : 3,
                border: '1px solid',
                borderColor: areaAbierta === i ? alpha(area.color, 0.4) : alpha(area.color, 0.15),
                borderBottom: areaAbierta === i ? 'none' : undefined,
                bgcolor: areaAbierta === i ? alpha(area.color, 0.08) : alpha(area.color, 0.04),
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                '&:hover': {
                  bgcolor: alpha(area.color, 0.1),
                  borderColor: alpha(area.color, 0.35),
                },
              }}
            >
              {/* Icono */}
              <Box
                sx={{
                  width: { xs: 36, sm: 44 },
                  height: { xs: 36, sm: 44 },
                  borderRadius: 2,
                  flexShrink: 0,
                  bgcolor: alpha(area.color, 0.12),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: area.color,
                  '& .MuiSvgIcon-root': { fontSize: { xs: 18, sm: 24 } },
                }}
              >
                {area.icono}
              </Box>

              {/* Texto */}
              <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                <Typography
                  sx={{
                    fontSize: { xs: '0.88rem', sm: '0.95rem' },
                    fontWeight: 700,
                    color: area.color,
                    lineHeight: 1,
                  }}
                >
                  {area.titulo}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '0.68rem', sm: '0.72rem' },
                    color: 'text.secondary',
                    mt: 0.3,
                    // recorta descripcion larga en móvil
                    display: { xs: '-webkit-box' },
                    WebkitLineClamp: { xs: 1, sm: 'unset' },
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {area.descripcion}
                </Typography>
              </Box>

              {/* Flecha */}
              <ExpandMoreIcon
                sx={{
                  color: area.color,
                  flexShrink: 0,
                  fontSize: { xs: 20, sm: 24 },
                  transition: 'transform 0.3s ease',
                  transform: areaAbierta === i ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Box>

            {/* Lista de servicios */}
            <Collapse in={areaAbierta === i}>
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: alpha(area.color, 0.4),
                  borderTop: 'none',
                  borderRadius: '0 0 12px 12px',
                  bgcolor: alpha(area.color, 0.03),
                  px: { xs: 1.5, sm: 2 },
                  pt: { xs: 1.2, sm: 1.5 },
                  pb: { xs: 1.5, sm: 2 },
                }}
              >
                {area.servicios.map((srv, j) => (
                  <Box key={j} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2, mb: 1 }}>
                    <CheckCircleOutlineIcon
                      sx={{
                        fontSize: { xs: 14, sm: 16 },
                        color: area.color,
                        flexShrink: 0,
                        mt: '2px',
                      }}
                    />
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        fontSize: { xs: '0.78rem', sm: '0.82rem' },
                      }}
                    >
                      {srv}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Collapse>
          </Box>
        ))}

        <Divider sx={{ my: { xs: 2, sm: 2.5 } }} />

        {/* ── Botones ── */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 1.5, sm: 2 },
            justifyContent: 'flex-end',
            flexDirection: { xs: 'column', sm: 'row' }, // ← apilados en móvil
          }}
        >
          <Button
            onClick={onClose}
            variant="outlined"
            sx={{
              borderRadius: 3,
              borderColor: 'divider',
              color: 'text.secondary',
              fontSize: { xs: '0.82rem', sm: '0.875rem' },
              order: { xs: 2, sm: 1 },
              '&:hover': { borderColor: '#2b4acb', color: '#2b4acb' },
            }}
          >
            Cerrar
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 3,
              fontWeight: 700,
              fontSize: { xs: '0.82rem', sm: '0.875rem' },
              order: { xs: 1, sm: 2 },
              background: 'linear-gradient(90deg, #2b4acb, #58d1c9)',
              boxShadow: '0 8px 20px rgba(43,74,203,0.3)',
              '&:hover': { boxShadow: '0 12px 28px rgba(43,74,203,0.4)' },
            }}
          >
            Solicitar servicio
          </Button>
        </Box>
      </DialogContent>
      {/* //^ T Contenido del modal */}
    </Dialog>
  );
}
