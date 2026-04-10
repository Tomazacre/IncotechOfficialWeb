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
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

interface JobsModalProps {
  open: boolean;
  onClose: () => void;
  onContacto: () => void;
}

const puestos = [
  {
    titulo: 'Técnico en Fibra Óptica',
    area: 'Fibra Óptica',
    tipo: 'Tiempo completo',
    ubicacion: 'Celaya, Gto.',
    salario: '$8,000 – $12,000 MXN',
    color: '#2b4acb',
    requisitos: [
      'Experiencia mínima 1 año en instalación de fibra óptica',
      'Conocimiento en fusión y certificación',
      'Licencia de manejo vigente',
      'Disponibilidad para trabajar en campo',
    ],
  },
  {
    titulo: 'Técnico en Soporte y Mantenimiento',
    area: 'Mantenimientos',
    tipo: 'Tiempo completo',
    ubicacion: 'Celaya, Gto.',
    salario: '$7,000 – $10,000 MXN',
    color: '#58d1c9',
    requisitos: [
      'Conocimientos en redes y equipo de cómputo',
      'Experiencia en soporte técnico presencial',
      'Habilidad para diagnóstico y resolución de fallas',
      'Trato amable con el cliente',
    ],
  },
  {
    titulo: 'Desarrollador Web Full Stack',
    area: 'Tecnología',
    tipo: 'Remoto / Híbrido',
    ubicacion: 'Remoto',
    salario: '$15,000 – $25,000 MXN',
    color: '#7c3aed',
    requisitos: [
      'React, Node.js y bases de datos SQL/NoSQL',
      'Experiencia mínima 2 años en proyectos web',
      'Conocimiento en APIs REST',
      'Trabajo en equipo bajo metodologías ágiles',
    ],
  },
];

export default function JobsModal({ open, onClose, onContacto }: JobsModalProps) {
  //const theme = useTheme();
  const [puestoAbierto, setPuestoAbierto] = useState<number | null>(null);
  const [puestoSeleccionado, setPuestoSeleccionado] = useState<string | null>(null);
  const [archivo, setArchivo] = useState<File | null>(null);
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggle = (i: number) => setPuestoAbierto(puestoAbierto === i ? null : i);

  const handleArchivo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setArchivo(e.target.files[0]);
  };

  const handleEnviar = () => {
    if (!puestoSeleccionado || !archivo) return;
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
    }, 1800);
  };

  const handleCerrar = () => {
    setEnviado(false);
    setArchivo(null);
    setPuestoSeleccionado(null);
    setPuestoAbierto(null);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCerrar}
      maxWidth="md"
      fullWidth
      // ← en móvil ocupa toda la pantalla
      fullScreen={false}
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: 'blur(6px)',
            backgroundColor: 'rgba(10, 20, 80, 0.4)',
          },
        },
        paper: {
          sx: {
            borderRadius: { xs: '16px 16px 0 0', sm: 4 }, // ← bottom sheet en móvil
            overflow: 'hidden',
            background: 'linear-gradient(145deg, #ffffff 60%, #eef1fc 100%)',
            boxShadow: '0 24px 60px rgba(43, 74, 203, 0.2)',
            // ← en móvil se ancla abajo como bottom sheet
            position: { xs: 'fixed', sm: 'relative' },
            bottom: { xs: 0, sm: 'auto' },
            left: { xs: 0, sm: 'auto' },
            right: { xs: 0, sm: 'auto' },
            margin: { xs: 0, sm: 'auto' },
            maxHeight: { xs: '92dvh', sm: '90vh' },
            width: { xs: '100%', sm: 'auto' },
          },
        },
      }}
    >
      {/* ── Header ── */}
      <Box
        sx={{
          background: 'linear-gradient(90deg, #2b4acb 0%, #58d1c9 100%)',
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 2.5 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Pill de arrastre en móvil */}
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

        <Box>
          <Chip
            label="ÚNETE AL EQUIPO"
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
            Bolsa de Trabajo
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Button
            onClick={onContacto}
            startIcon={<HelpOutlineIcon sx={{ fontSize: 15 }} />}
            size="small"
            sx={{
              color: 'white',
              borderRadius: 3,
              border: '1px solid rgba(255,255,255,0.3)',
              fontSize: { xs: '0.68rem', sm: '0.75rem' },
              px: { xs: 1, sm: 1.5 },
              minWidth: 0,
              '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' },
            }}
          >
            {/* Oculta el texto en móvil muy pequeño */}
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
              Dudas
            </Box>
          </Button>
          <IconButton
            onClick={handleCerrar}
            size="small"
            sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' } }}
          >
            <CloseIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
          </IconButton>
        </Box>
      </Box>

      <DialogContent
        sx={{
          p: { xs: 1.5, sm: 3 },
          overflowY: 'auto',
        }}
      >
        <AnimatePresence mode="wait">
          {/* ══ VISTA: CONFIRMACIÓN ══ */}
          {enviado ? (
            <MotionBox
              key="confirmacion"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                py: { xs: 4, sm: 6 },
                textAlign: 'center',
              }}
            >
              <MotionBox
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                sx={{
                  width: { xs: 64, sm: 80 },
                  height: { xs: 64, sm: 80 },
                  borderRadius: '50%',
                  mb: 3,
                  background: 'linear-gradient(135deg, #2b4acb, #58d1c9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CheckCircleIcon sx={{ fontSize: { xs: 34, sm: 44 }, color: 'white' }} />
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    mb: 1,
                    fontSize: { xs: '1.2rem', sm: '1.5rem' },
                    background: 'linear-gradient(90deg, #2b4acb, #58d1c9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  ¡Recibimos tu CV!
                </Typography>
                <Typography
                  sx={{ color: 'text.secondary', fontSize: { xs: '0.82rem', sm: '0.9rem' }, mb: 1 }}
                >
                  Tu postulación para <strong>{puestoSeleccionado}</strong> fue enviada con éxito.
                </Typography>
                <Typography
                  sx={{ color: 'text.disabled', fontSize: { xs: '0.75rem', sm: '0.8rem' }, mb: 4 }}
                >
                  Nos pondremos en contacto contigo pronto. 🚀
                </Typography>

                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 1,
                    borderRadius: 99,
                    bgcolor: alpha('#25D366', 0.1),
                    border: '1px solid',
                    borderColor: alpha('#25D366', 0.3),
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: '#25D366',
                      animation: 'pulse 1.5s infinite',
                      '@keyframes pulse': {
                        '0%, 100%': { opacity: 1 },
                        '50%': { opacity: 0.3 },
                      },
                    }}
                  />
                  <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#25D366' }}>
                    Postulación activa
                  </Typography>
                </Box>
              </MotionBox>

              <Button
                onClick={handleCerrar}
                variant="contained"
                sx={{
                  mt: 4,
                  borderRadius: 3,
                  fontWeight: 700,
                  px: { xs: 3, sm: 4 },
                  background: 'linear-gradient(90deg, #2b4acb, #58d1c9)',
                  boxShadow: '0 8px 20px rgba(43,74,203,0.3)',
                }}
              >
                Cerrar
              </Button>
            </MotionBox>
          ) : (
            <MotionBox
              key="contenido"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* ── Banner info ── */}
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
                <WorkIcon sx={{ color: '#2b4acb', fontSize: { xs: 18, sm: 20 }, flexShrink: 0 }} />
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.72rem', sm: '0.75rem' },
                      fontWeight: 700,
                      color: '#2b4acb',
                    }}
                  >
                    Vacantes disponibles
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: '0.68rem', sm: '0.72rem' }, color: 'text.secondary' }}
                  >
                    Selecciona un puesto, adjunta tu CV y postúlate
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
                    {puestos.length} puestos
                  </Typography>
                </Box>
              </Box>

              {/* ── Lista de puestos ── */}
              {puestos.map((p, i) => (
                <Box key={i} sx={{ mb: 1.5 }}>
                  <Box
                    onClick={() => {
                      toggle(i);
                      setPuestoSeleccionado(p.titulo);
                    }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: { xs: 1.2, sm: 2 },
                      p: { xs: 1.5, sm: 2 },
                      borderRadius: puestoAbierto === i ? '12px 12px 0 0' : 3,
                      border: '1px solid',
                      borderColor: puestoAbierto === i ? alpha(p.color, 0.4) : alpha(p.color, 0.15),
                      borderBottom: puestoAbierto === i ? 'none' : undefined,
                      bgcolor: puestoAbierto === i ? alpha(p.color, 0.08) : alpha(p.color, 0.03),
                      cursor: 'pointer',
                      transition: 'all 0.25s',
                      '&:hover': {
                        bgcolor: alpha(p.color, 0.08),
                        borderColor: alpha(p.color, 0.35),
                      },
                    }}
                  >
                    {/* Icono — oculto en móvil muy pequeño */}
                    <Box
                      sx={{
                        width: { xs: 36, sm: 44 },
                        height: { xs: 36, sm: 44 },
                        borderRadius: 2,
                        flexShrink: 0,
                        bgcolor: alpha(p.color, 0.12),
                        display: { xs: 'none', sm: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: p.color,
                      }}
                    >
                      <WorkIcon />
                    </Box>

                    <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontSize: { xs: '0.85rem', sm: '0.95rem' },
                          fontWeight: 700,
                          color: p.color,
                          lineHeight: 1.2,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {p.titulo}
                      </Typography>
                      {/* Info en móvil: apilada verticalmente */}
                      <Box
                        sx={{
                          display: 'flex',
                          gap: { xs: 1, sm: 1.5 },
                          mt: 0.5,
                          flexWrap: 'wrap',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
                          <LocationOnIcon sx={{ fontSize: 11, color: 'text.disabled' }} />
                          <Typography sx={{ fontSize: '0.65rem', color: 'text.disabled' }}>
                            {p.ubicacion}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
                          <AccessTimeIcon sx={{ fontSize: 11, color: 'text.disabled' }} />
                          <Typography sx={{ fontSize: '0.65rem', color: 'text.disabled' }}>
                            {p.tipo}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
                          <MonetizationOnIcon sx={{ fontSize: 11, color: 'text.disabled' }} />
                          <Typography sx={{ fontSize: '0.65rem', color: 'text.disabled' }}>
                            {p.salario}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 0.5, sm: 1 },
                        flexShrink: 0,
                      }}
                    >
                      {/* Chip area — oculto en móvil para ahorrar espacio */}
                      <Chip
                        label={p.area}
                        size="small"
                        sx={{
                          display: { xs: 'none', sm: 'flex' },
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          bgcolor: alpha(p.color, 0.1),
                          color: p.color,
                          border: '1px solid',
                          borderColor: alpha(p.color, 0.2),
                        }}
                      />
                      <ExpandMoreIcon
                        sx={{
                          color: p.color,
                          transition: 'transform 0.3s',
                          fontSize: { xs: 20, sm: 24 },
                          transform: puestoAbierto === i ? 'rotate(180deg)' : 'rotate(0)',
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Detalle del puesto */}
                  <Collapse in={puestoAbierto === i}>
                    <Box
                      sx={{
                        border: '1px solid',
                        borderColor: alpha(p.color, 0.4),
                        borderTop: 'none',
                        borderRadius: '0 0 12px 12px',
                        bgcolor: alpha(p.color, 0.02),
                        px: { xs: 1.5, sm: 2.5 },
                        pt: { xs: 1.5, sm: 2 },
                        pb: { xs: 2, sm: 2.5 },
                      }}
                    >
                      {/* Chip área visible dentro del detalle en móvil */}
                      <Box sx={{ display: { xs: 'flex', sm: 'none' }, mb: 1 }}>
                        <Chip
                          label={p.area}
                          size="small"
                          sx={{
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            bgcolor: alpha(p.color, 0.1),
                            color: p.color,
                            border: '1px solid',
                            borderColor: alpha(p.color, 0.2),
                          }}
                        />
                      </Box>
                      <Typography
                        sx={{ fontSize: '0.75rem', fontWeight: 700, color: p.color, mb: 1 }}
                      >
                        Requisitos del puesto
                      </Typography>
                      {p.requisitos.map((r, j) => (
                        <Box
                          key={j}
                          sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 0.8 }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              flexShrink: 0,
                              bgcolor: p.color,
                              mt: '6px',
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: { xs: '0.78rem', sm: '0.82rem' },
                              color: 'text.secondary',
                            }}
                          >
                            {r}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              ))}

              <Divider sx={{ my: { xs: 2, sm: 2.5 } }} />

              {/* ── Sección de postulación ── */}
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                  mb: 0.5,
                  color: 'text.primary',
                  fontSize: { xs: '0.85rem', sm: '0.875rem' },
                }}
              >
                Postúlate ahora
              </Typography>
              <Typography
                sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem' }, color: 'text.secondary', mb: 2 }}
              >
                {puestoSeleccionado
                  ? 'Postulándose a: '
                  : 'Selecciona un puesto arriba y adjunta tu CV.'}
                {puestoSeleccionado && (
                  <Box component="span" sx={{ fontWeight: 700, color: '#2b4acb' }}>
                    {puestoSeleccionado}
                  </Box>
                )}
              </Typography>

              {/* Upload CV */}
              <Box
                onClick={() => inputRef.current?.click()}
                sx={{
                  border: '2px dashed',
                  borderColor: archivo ? alpha('#2b4acb', 0.5) : alpha('#2b4acb', 0.2),
                  borderRadius: 3,
                  p: { xs: 2, sm: 2.5 },
                  mb: 2.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 1.5, sm: 2 },
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  bgcolor: archivo ? alpha('#2b4acb', 0.04) : 'transparent',
                  '&:hover': {
                    borderColor: alpha('#2b4acb', 0.5),
                    bgcolor: alpha('#2b4acb', 0.03),
                  },
                }}
              >
                <AttachFileIcon
                  sx={{
                    color: archivo ? '#2b4acb' : 'text.disabled',
                    fontSize: { xs: 20, sm: 24 },
                  }}
                />
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.78rem', sm: '0.82rem' },
                      fontWeight: 600,
                      color: archivo ? '#2b4acb' : 'text.secondary',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: { xs: '180px', sm: '100%' },
                    }}
                  >
                    {archivo ? archivo.name : 'Adjuntar CV'}
                  </Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: 'text.disabled' }}>
                    {archivo
                      ? `${(archivo.size / 1024).toFixed(0)} KB`
                      : 'PDF, DOC o DOCX · máx. 5MB'}
                  </Typography>
                </Box>
                {archivo && (
                  <CheckCircleIcon
                    sx={{ ml: 'auto', color: '#2b4acb', fontSize: 20, flexShrink: 0 }}
                  />
                )}
              </Box>
              <input
                ref={inputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                style={{ display: 'none' }}
                onChange={handleArchivo}
              />

              {/* Botones */}
              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 1.5, sm: 2 },
                  justifyContent: 'flex-end',
                  flexDirection: { xs: 'column', sm: 'row' }, // ← apilados en móvil
                }}
              >
                <Button
                  onClick={handleCerrar}
                  variant="outlined"
                  fullWidth={false}
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
                  onClick={handleEnviar}
                  variant="contained"
                  disabled={!puestoSeleccionado || !archivo || enviando}
                  sx={{
                    borderRadius: 3,
                    fontWeight: 700,
                    px: { xs: 2, sm: 3 },
                    fontSize: { xs: '0.82rem', sm: '0.875rem' },
                    order: { xs: 1, sm: 2 },
                    background: 'linear-gradient(90deg, #2b4acb, #58d1c9)',
                    boxShadow: '0 8px 20px rgba(43,74,203,0.3)',
                    '&:hover': { boxShadow: '0 12px 28px rgba(43,74,203,0.4)' },
                    '&:disabled': { opacity: 0.5 },
                  }}
                >
                  {enviando ? 'Enviando...' : 'Enviar postulación'}
                </Button>
              </Box>
            </MotionBox>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
