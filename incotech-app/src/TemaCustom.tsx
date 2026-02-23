import { createTheme } from "@mui/material/styles";
import Jakarta from "./assets/fonts/PlusJakarta.ttf";

const theme = createTheme({
  typography: {
    fontFamily: "Jakarta, Arial, sans-serif",
  },
  palette: {
    mode: "light",

    primary: {
      light: "#818cf8", // antes 400
      main: "#2B4ACB", // tu color principal real
      dark: "#1C3392", // antes solidActiveBg
      contrastText: "#FFFFFF",
    },

    grey: {
      100: "#E5E7EB", // antes solidDisabledBg
      400: "#9CA3AF", // antes solidDisabledColor
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Jakarta';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${Jakarta}) format('truetype');
        }
      `,
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: "#2B4ACB",
          "&:hover": {
            backgroundColor: "#243FAF", // antes solidHoverBg
          },
          "&.Mui-disabled": {
            backgroundColor: "#E5E7EB",
            color: "#9CA3AF",
          },
        },
      },
    },
  },
});

export default theme;
