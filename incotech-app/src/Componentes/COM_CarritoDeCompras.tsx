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

import { useState } from 'react';
import { Box, Typography, IconButton, Button, Divider, Stack, Badge } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

interface ItemInfo {
  id: number;
  name: string;
  sub: string;
  price: number;
  qty: number;
  emoji: string;
}

const initialItems: ItemInfo[] = [
  { id: 1, name: 'Audífonos Pro Max', sub: 'Color negro', price: 1299, qty: 1, emoji: '🎧' },
  { id: 2, name: 'Cargador USB-C 65W', sub: 'Cable incluido', price: 349, qty: 2, emoji: '🔌' },
  { id: 3, name: 'Funda de silicón', sub: 'Compatible iPhone 15', price: 199, qty: 1, emoji: '📱' },
];

const fmt = (n: number) => n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

export default function CarroDeCompras() {
  const [items, setItems] = useState<ItemInfo[]>(initialItems);

  const contCantidad = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item))
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalCount = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <Box
      sx={{
        width: 400,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
        overflow: 'hidden',
        bgcolor: 'background.paper',
      }}
    >
      {/*//* I Header */}
      <Box
        sx={{
          px: 2.5,
          py: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Badge badgeContent={totalCount} color="primary">
          <ShoppingBagOutlinedIcon fontSize="small" />
        </Badge>
        <Typography variant="subtitle1" fontWeight={500}>
          Mi carrito
        </Typography>
      </Box>
      {/*//* T Header */}

      {/*//& I Items */}
      <Box>
        {items.length === 0 ? (
          <Box sx={{ py: 5, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Tu carrito está vacío
            </Typography>
          </Box>
        ) : (
          items.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 2.5,
                py: 1.5,
                '&:hover': { bgcolor: 'action.hover' },
                transition: 'background .15s',
              }}
            >
              {/* Emoji / imagen */}
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'action.hover',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                {item.emoji}
              </Box>
              {/* Emoji / imagen */}

              {/* Info + qty */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="body2" fontWeight={500} noWrap>
                  {item.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.sub}
                </Typography>

                {/* Qty control */}
                <Stack direction="row" alignItems="center" gap={0.5} mt={0.5}>
                  <IconButton
                    size="small"
                    onClick={() => contCantidad(item.id, -1)}
                    sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, p: '2px' }}
                  >
                    <RemoveIcon sx={{ fontSize: 14 }} />
                  </IconButton>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{ minWidth: 20, textAlign: 'center' }}
                  >
                    {item.qty}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => contCantidad(item.id, 1)}
                    sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, p: '2px' }}
                  >
                    <AddIcon sx={{ fontSize: 14 }} />
                  </IconButton>
                </Stack>
              </Box>
              {/* Info + qty */}

              {/* Precio + eliminar */}
              <Stack alignItems="flex-end" gap={0.5}>
                <IconButton
                  size="small"
                  onClick={() => removeItem(item.id)}
                  sx={{
                    color: 'text.disabled',
                    '&:hover': { color: 'error.main', bgcolor: 'error.light' },
                  }}
                >
                  <DeleteOutlineIcon sx={{ fontSize: 16 }} />
                </IconButton>
                <Typography variant="body2" fontWeight={500}>
                  {fmt(item.price * item.qty)}
                </Typography>
              </Stack>
              {/* Precio + eliminar */}
            </Box>
          ))
        )}
      </Box>
      {/*//& T Items */}

      <Divider />

      {/*//^ I Summary */}
      <Box sx={{ px: 2.5, py: 2 }}>
        <Stack gap={1}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" color="text.secondary">
              Subtotal
            </Typography>
            <Typography variant="body2">{fmt(subtotal)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" color="text.secondary">
              Envío
            </Typography>
            <Typography variant="body2" color="success.main">
              Gratis
            </Typography>
          </Box>
          <Divider sx={{ my: 0.5 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="subtitle2" fontWeight={500}>
              Total
            </Typography>
            <Typography variant="subtitle2" fontWeight={500}>
              {fmt(subtotal)}
            </Typography>
          </Box>
        </Stack>
      </Box>
      {/*//^ T Summary */}

      {/*//+ I Checkout button */}
      <Box sx={{ px: 2.5, pb: 2.5 }}>
        <Button
          fullWidth
          variant="contained"
          disableElevation
          sx={{ borderRadius: 2, py: 1.3, textTransform: 'none', fontWeight: 500 }}
        >
          Proceder al pago
        </Button>
      </Box>
      {/*//+ T Checkout button */}
    </Box>
  );
}
