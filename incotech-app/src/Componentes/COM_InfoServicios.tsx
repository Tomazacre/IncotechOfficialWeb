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

// ─────────────────────────────────────────────────────────
//  AGREGA O MODIFICA ÁREAS Y SERVICIOS SOLO AQUÍ ABAJO
// ─────────────────────────────────────────────────────────
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
  // ── Agrega más áreas aquí ──
];
// ─────────────────────────────────────────────────────────

export default function ServicesModal({ open, onClose }: ServicesModalProps) {
  const theme = useTheme();
  const [areaAbierta, setAreaAbierta] = useState<number | null>(0);

  const toggle = (i: number) => setAreaAbierta(areaAbierta === i ? null : i);

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
            label="LO QUE HACEMOS"
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
            Nuestros Servicios
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
        {/* ── Intro ── */}
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
          <Box>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#2b4acb' }}>
              Soluciones tecnológicas integrales
            </Typography>
            <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>
              Selecciona un área para ver los servicios disponibles
            </Typography>
          </Box>
          <Box
            sx={{ ml: 'auto', px: 1.5, py: 0.4, borderRadius: 99, bgcolor: alpha('#2b4acb', 0.1) }}
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
                gap: 2,
                p: 2,
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
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  flexShrink: 0,
                  bgcolor: alpha(area.color, 0.12),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: area.color,
                }}
              >
                {area.icono}
              </Box>

              {/* Texto */}
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  sx={{ fontSize: '0.95rem', fontWeight: 700, color: area.color, lineHeight: 1 }}
                >
                  {area.titulo}
                </Typography>
                <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary', mt: 0.3 }}>
                  {area.descripcion}
                </Typography>
              </Box>

              {/* Flecha */}
              <ExpandMoreIcon
                sx={{
                  color: area.color,
                  flexShrink: 0,
                  transition: 'transform 0.3s ease',
                  transform: areaAbierta === i ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Box>

            {/* Lista de servicios (Collapse) */}
            <Collapse in={areaAbierta === i}>
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: alpha(area.color, 0.4),
                  borderTop: 'none',
                  borderRadius: '0 0 12px 12px',
                  bgcolor: alpha(area.color, 0.03),
                  px: 2,
                  pt: 1.5,
                  pb: 2,
                }}
              >
                {area.servicios.map((srv, j) => (
                  <Box key={j} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                    <CheckCircleOutlineIcon
                      sx={{ fontSize: 16, color: area.color, flexShrink: 0 }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', fontSize: '0.82rem' }}
                    >
                      {srv}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Collapse>
          </Box>
        ))}

        <Divider sx={{ my: 2.5 }} />

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
            sx={{
              borderRadius: 3,
              fontWeight: 700,
              background: 'linear-gradient(90deg, #2b4acb, #58d1c9)',
              boxShadow: '0 8px 20px rgba(43,74,203,0.3)',
              '&:hover': { boxShadow: '0 12px 28px rgba(43,74,203,0.4)' },
            }}
          >
            Solicitar servicio
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
