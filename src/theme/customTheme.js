import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

export const customTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1500,
  },

  typography: {
    fontFamily: "Montserrat",
  },
});
