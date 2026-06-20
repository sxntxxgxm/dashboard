import { BarChart } from "@mui/x-charts/BarChart";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import type { Product } from "../types/DashboardTypes";

interface Props {
  data: Product[];
}

// ChartUI: gráfico de barras del precio promedio por categoría.
export default function ChartUI({ data }: Props) {
  // Agrupamos por categoría y calculamos el precio promedio.
  const grupos: Record<string, { suma: number; cuenta: number }> = {};
  data.forEach((p) => {
    if (!grupos[p.category]) grupos[p.category] = { suma: 0, cuenta: 0 };
    grupos[p.category].suma += p.price;
    grupos[p.category].cuenta += 1;
  });

  const categorias = Object.keys(grupos);
  const promedios = categorias.map(
    (c) => Math.round((grupos[c].suma / grupos[c].cuenta) * 100) / 100
  );

  return (
    <Paper sx={{ p: 2, height: "100%" }}>
      <Typography variant="h6" gutterBottom>
        Precio promedio por categoría
      </Typography>
      {categorias.length === 0 ? (
        <Typography color="text.secondary">No hay datos para mostrar.</Typography>
      ) : (
        <BarChart
          height={320}
          xAxis={[{ scaleType: "band", data: categorias }]}
          series={[{ data: promedios, label: "Precio promedio ($)" }]}
        />
      )}
    </Paper>
  );
}
