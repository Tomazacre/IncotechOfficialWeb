import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
  IconButton,
  Chip,
  Grid,
  Divider,
  Button,
  alpha,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import DevicesIcon from '@mui/icons-material/Devices';
import StarIcon from '@mui/icons-material/Star';

interface InfoModalProps {
  open: boolean;
  onClose: () => void;
}

const stats = [
  { icon: <TrendingUpIcon />, valor: '+120', label: 'Empresas activas', color: '#2b4acb' },
  { icon: <GroupsIcon />, valor: '4.9', label: 'Rating promedio', color: '#58d1c9' },
  { icon: <DevicesIcon />, valor: '99.9%', label: 'Uptime garantizado', color: '#2b4acb' },
  { icon: <StarIcon />, valor: '5★', label: 'Soporte técnico', color: '#58d1c9' },
];

export default function InfoModal({ open, onClose }: InfoModalProps) {
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
            backdropFilter: 'blur(6px)', // ← blur del fondo
            backgroundColor: 'rgba(10, 20, 80, 0.4)',
          },
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: 'hidden',
          background: 'linear-gradient(145deg, #ffffff 60%, #eef1fc 100%)',
          boxShadow: '0 24px 60px rgba(43, 74, 203, 0.2)',
        },
      }}
    >
      {/* ── Header con gradiente ── */}
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
            label="RESUMEN GENERAL"
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
            Panel de Información
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
        {/* ── Tarjetas de estadísticas ── */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {stats.map((s, i) => (
            <Grid size={6} key={i}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: alpha(s.color, 0.15),
                  bgcolor: alpha(s.color, 0.05),
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: alpha(s.color, 0.12),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: s.color,
                  }}
                >
                  {s.icon}
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: '1.3rem', fontWeight: 800, color: s.color, lineHeight: 1 }}
                  >
                    {s.valor}
                  </Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary', fontWeight: 500 }}>
                    {s.label}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ mb: 2.5 }} />

        {/* ── Sección de descripción ── */}
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
          ¿Qué ofrecemos?
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
          En Incotech desarrollamos soluciones tecnológicas a medida para empresas que buscan
          escalar. Desde infraestructura hasta streaming, nuestras herramientas están diseñadas para
          el siguiente nivel digital.
        </Typography>

        {/* ── Lista de features ── */}
        {[
          'Streaming de alta disponibilidad',
          'Soporte técnico 24/7',
          'Infraestructura en la nube',
          'Integraciones personalizadas',
        ].map((item, i) => (
          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                flexShrink: 0,
                background: 'linear-gradient(90deg, #2b4acb, #58d1c9)',
              }}
            />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item}
            </Typography>
          </Box>
        ))}

        <Divider sx={{ my: 2.5 }} />

        {/* ── Botones de acción ── */}
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
            Conocer más
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
