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
  Slider,
  alpha,
  //useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import RadioIcon from '@mui/icons-material/Radio';
import { useState, useRef } from 'react';

interface RadioStation {
  id: string;
  nombre: string;
  url: string;
  color: string;
}

interface RadioModalProps {
  open: boolean;
  onClose: () => void;
}

//^ Array de estaciones de radio
const radioStations: RadioStation[] = [
  {
    id: '1',
    nombre: 'Radio 1',
    url: 'https://example.com/radio1.m3u8',
    color: '#2b4acb',
  },
  {
    id: '2',
    nombre: 'Radio 2',
    url: 'https://example.com/radio2.m3u8',
    color: '#58d1c9',
  },
  {
    id: '3',
    nombre: 'Radio 3',
    url: 'https://example.com/radio3.m3u8',
    color: '#7c3aed',
  },
  {
    id: '4',
    nombre: 'Radio 4',
    url: 'https://example.com/radio4.m3u8',
    color: '#e11d48',
  },
];

export default function RadioModal({ open, onClose }: RadioModalProps) {
  //const theme = useTheme();
  const audioRef = useRef<HTMLAudioElement>(null);

  const [selectedStation, setSelectedStation] = useState<string>('1');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);

  const currentStation = radioStations.find((s) => s.id === selectedStation);
  const stationColor = currentStation?.color || '#2b4acb';

  //! Manejo de play
  const handlePlay = () => {
    if (audioRef.current) {
      const station = radioStations.find((s) => s.id === selectedStation);
      if (station && audioRef.current.src !== station.url) {
        audioRef.current.src = station.url;
      }
      audioRef.current.play().catch((e) => {
        console.error('Error al reproducir:', e);
      });
      setIsPlaying(true);
    }
  };

  //! Manejo de pausa
  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  //! Manejo de stop
  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  //! Cambio de estación
  const handleStationChange = (newStationId: string) => {
    setSelectedStation(newStationId);
    if (isPlaying && audioRef.current) {
      const newStation = radioStations.find((s) => s.id === newStationId);
      if (newStation) {
        audioRef.current.src = newStation.url;
        audioRef.current.play().catch((e) => {
          console.error('Error al reproducir:', e);
        });
      }
    }
  };

  //! Control de volumen
  const handleVolumeChange = (_event: Event, newValue: number | number[]) => {
    const vol = typeof newValue === 'number' ? newValue : newValue[0];
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol / 100;
    }
  };

  return (
    <>
      {/*//* I Elemento de audio invisible que persiste */}
      <audio ref={audioRef} crossOrigin="anonymous" />
      {/*//* T Elemento de audio invisible que persiste */}

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
        {/*//^ I Header del modal */}
        <Box
          sx={{
            background: `linear-gradient(90deg, ${stationColor} 0%, ${stationColor}dd 100%)`,
            px: { xs: 2, sm: 3 },
            py: { xs: 2, sm: 2.5 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            transition: 'background 0.3s ease',
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

          {/*//+ I Titulos */}
          <Box>
            <Chip
              label="ESCUCHA EN VIVO"
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
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <RadioIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />
              Radio
            </Typography>
          </Box>
          {/*//+ T Titulos */}

          {/*//- I Icono de cierre */}
          <IconButton
            onClick={onClose}
            size="small"
            sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' } }}
          >
            <CloseIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
          </IconButton>
          {/*//- T Icono de cierre */}
        </Box>
        {/*//^ T Header del modal */}

        {/*//& I Contenido del modal */}
        <DialogContent
          sx={{
            p: { xs: 1.5, sm: 3 },
            overflowY: 'auto',
          }}
        >
          {/*//- I Intro destacada  */}
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
            <RadioIcon sx={{ color: '#2b4acb', fontSize: { xs: 18, sm: 20 }, flexShrink: 0 }} />
            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
              <Typography
                sx={{
                  fontSize: { xs: '0.72rem', sm: '0.75rem' },
                  fontWeight: 700,
                  color: '#2b4acb',
                }}
              >
                Transmisión en vivo
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.68rem', sm: '0.72rem' },
                  color: 'text.secondary',
                }}
              >
                Selecciona una estación y comienza a disfrutar
              </Typography>
            </Box>
            <Box
              sx={{
                ml: 'auto',
                px: 1.5,
                py: 0.4,
                borderRadius: 99,
                bgcolor: alpha(stationColor, 0.12),
                flexShrink: 0,
              }}
            >
              <Typography sx={{ fontSize: '0.68rem', fontWeight: 700, color: stationColor }}>
                ● En línea
              </Typography>
            </Box>
          </Box>
          {/*//- T Intro destacada  */}

          {/*//^ I Tarjetas de estaciones  */}
          {radioStations.map((station) => (
            <Box
              key={station.id}
              onClick={() => handleStationChange(station.id)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1.5, sm: 2 },
                p: { xs: 1.5, sm: 2 },
                mb: 1.5,
                borderRadius: 3,
                textDecoration: 'none',
                border: '1px solid',
                borderColor:
                  selectedStation === station.id
                    ? alpha(station.color, 0.4)
                    : alpha(station.color, 0.15),
                bgcolor:
                  selectedStation === station.id
                    ? alpha(station.color, 0.08)
                    : alpha(station.color, 0.04),
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: alpha(station.color, 0.1),
                  borderColor: alpha(station.color, 0.4),
                  transform: 'translateX(4px)',
                },
              }}
            >
              {/* Icono */}
              <Box
                sx={{
                  width: { xs: 38, sm: 44 },
                  height: { xs: 38, sm: 44 },
                  borderRadius: '50%',
                  flexShrink: 0,
                  bgcolor: alpha(station.color, 0.15),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: station.color,
                  '& .MuiSvgIcon-root': { fontSize: { xs: 18, sm: 24 } },
                }}
              >
                <RadioIcon />
              </Box>
              {/* Icono */}

              {/* Texto */}
              <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                <Typography
                  sx={{
                    fontSize: { xs: '0.65rem', sm: '0.7rem' },
                    color: 'text.disabled',
                    fontWeight: 500,
                    mb: 0.2,
                  }}
                >
                  Estación de radio
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '0.85rem', sm: '0.95rem' },
                    fontWeight: 700,
                    color: station.color,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {station.nombre}
                </Typography>
              </Box>
              {/* Texto */}

              {/* Check */}
              <Box
                sx={{
                  width: { xs: 24, sm: 28 },
                  height: { xs: 24, sm: 28 },
                  borderRadius: '50%',
                  flexShrink: 0,
                  bgcolor:
                    selectedStation === station.id ? station.color : alpha(station.color, 0.1),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: selectedStation === station.id ? 'white' : station.color,
                  fontSize: { xs: 14, sm: 16 },
                  fontWeight: 700,
                }}
              >
                {selectedStation === station.id ? '✓' : '→'}
              </Box>
              {/* Check */}
            </Box>
          ))}
          {/*//^ T Tarjetas de estaciones  */}

          <Divider sx={{ my: { xs: 2, sm: 2.5 } }} />

          {/*//~ I Controles de reproducción  */}
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              mb: 1.5,
              color: 'text.primary',
              fontSize: { xs: '0.85rem', sm: '0.875rem' },
            }}
          >
            Controles
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              justifyContent: 'center',
              mb: 3,
              p: { xs: 1.5, sm: 2 },
              borderRadius: 3,
              bgcolor: alpha(stationColor, 0.04),
              border: '1px solid',
              borderColor: alpha(stationColor, 0.12),
            }}
          >
            <IconButton
              onClick={handlePlay}
              disabled={isPlaying}
              sx={{
                width: { xs: 44, sm: 50 },
                height: { xs: 44, sm: 50 },
                borderRadius: 2,
                bgcolor: !isPlaying ? stationColor : alpha(stationColor, 0.12),
                color: !isPlaying ? 'white' : stationColor,
                '&:hover': {
                  bgcolor: !isPlaying ? alpha(stationColor, 0.9) : alpha(stationColor, 0.15),
                },
                '&.Mui-disabled': {
                  bgcolor: alpha(stationColor, 0.12),
                  color: alpha(stationColor, 0.5),
                },
                transition: 'all 0.25s ease',
              }}
            >
              <PlayArrowIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
            </IconButton>

            <IconButton
              onClick={handlePause}
              disabled={!isPlaying}
              sx={{
                width: { xs: 44, sm: 50 },
                height: { xs: 44, sm: 50 },
                borderRadius: 2,
                bgcolor: isPlaying ? stationColor : alpha(stationColor, 0.12),
                color: isPlaying ? 'white' : stationColor,
                '&:hover': {
                  bgcolor: isPlaying ? alpha(stationColor, 0.9) : alpha(stationColor, 0.15),
                },
                '&.Mui-disabled': {
                  bgcolor: alpha(stationColor, 0.12),
                  color: alpha(stationColor, 0.5),
                },
                transition: 'all 0.25s ease',
              }}
            >
              <PauseIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
            </IconButton>

            <IconButton
              onClick={handleStop}
              sx={{
                width: { xs: 44, sm: 50 },
                height: { xs: 44, sm: 50 },
                borderRadius: 2,
                bgcolor: alpha(stationColor, 0.12),
                color: stationColor,
                '&:hover': {
                  bgcolor: alpha(stationColor, 0.2),
                },
                transition: 'all 0.25s ease',
              }}
            >
              <StopIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
            </IconButton>
          </Box>
          {/*//~ T Controles de reproducción  */}

          {/*//& I Control de volumen  */}
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              mb: 1.5,
              color: 'text.primary',
              fontSize: { xs: '0.85rem', sm: '0.875rem' },
            }}
          >
            Volumen: {volume}%
          </Typography>
          <Box
            sx={{
              p: { xs: 1.5, sm: 2 },
              borderRadius: 3,
              bgcolor: alpha(stationColor, 0.04),
              border: '1px solid',
              borderColor: alpha(stationColor, 0.12),
              mb: 3,
            }}
          >
            <Slider
              value={volume}
              onChange={handleVolumeChange}
              min={0}
              max={100}
              sx={{
                color: stationColor,
                '& .MuiSlider-thumb': {
                  backgroundColor: stationColor,
                  boxShadow: `0 0 0 8px ${alpha(stationColor, 0.15)}`,
                  '&:hover': {
                    boxShadow: `0 0 0 12px ${alpha(stationColor, 0.2)}`,
                  },
                },
                '& .MuiSlider-rail': {
                  backgroundColor: alpha(stationColor, 0.15),
                },
                '& .MuiSlider-track': {
                  backgroundColor: stationColor,
                },
              }}
            />
          </Box>
          {/*//& T Control de volumen  */}

          {/*//* I Botones */}
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 1.5, sm: 2 },
              justifyContent: 'flex-end',
              flexDirection: { xs: 'column', sm: 'row' },
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
                '&:hover': { borderColor: stationColor, color: stationColor },
              }}
            >
              Cerrar
            </Button>
            <Button
              onClick={handlePlay}
              disabled={isPlaying}
              variant="contained"
              sx={{
                borderRadius: 3,
                fontWeight: 700,
                fontSize: { xs: '0.82rem', sm: '0.875rem' },
                order: { xs: 1, sm: 2 },
                background: `linear-gradient(90deg, ${stationColor}, ${alpha(stationColor, 0.8)})`,
                boxShadow: `0 8px 20px ${alpha(stationColor, 0.3)}`,
                '&:hover': { boxShadow: `0 12px 28px ${alpha(stationColor, 0.4)}` },
              }}
            >
              {isPlaying ? 'Reproduciendo...' : 'Reproducir'}
            </Button>
          </Box>
          {/*//* T Botones */}
        </DialogContent>
        {/*//& T Contenido del modal */}
      </Dialog>
    </>
  );
}
