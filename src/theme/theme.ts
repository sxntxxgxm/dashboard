import { createTheme } from "@mui/material/styles";

// Tema claro y sobrio para el dashboard.
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1f6feb" },
    secondary: { main: "#0d9488" },
    background: { default: "#f4f6f9" },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
});
