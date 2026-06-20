import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InsightsIcon from "@mui/icons-material/Insights";

export default function Header() {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        color: "#fff",
        background: "linear-gradient(90deg, #1f6feb 0%, #0d9488 100%)",
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <InsightsIcon sx={{ fontSize: 40 }} />
      <Box>
        <Typography variant="h4" component="h1">
          Dashboard de Catálogo de Productos
        </Typography>
        <Typography variant="subtitle1">
          Exploración y análisis de precios, categorías y calificaciones
        </Typography>
      </Box>
    </Box>
  );
}
