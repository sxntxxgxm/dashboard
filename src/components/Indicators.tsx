import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import type { Indicators as IndicatorsType } from "../types/DashboardTypes";

interface Props {
  indicators: IndicatorsType;
}

function KpiCard({ title, value }: { title: string; value: string }) {
  return (
    <Paper sx={{ p: 2.5, height: "100%" }}>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h4" color="primary" sx={{ mt: 1 }}>
        {value}
      </Typography>
    </Paper>
  );
}

// Indicadores: resumen rápido y comprensible del catálogo (KPIs).
export default function Indicators({ indicators }: Props) {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 3 }}>
          <KpiCard
            title="Total de productos"
            value={indicators.totalProducts.toString()}
          />
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <KpiCard
            title="Precio promedio"
            value={`$${indicators.avgPrice.toFixed(2)}`}
          />
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <KpiCard
            title="Calificación promedio"
            value={`${indicators.avgRating.toFixed(2)} / 5`}
          />
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <KpiCard
            title="Categorías"
            value={indicators.totalCategories.toString()}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
