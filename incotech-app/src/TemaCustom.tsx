import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
