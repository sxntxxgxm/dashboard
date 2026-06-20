import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import type { Product } from "../types/DashboardTypes";

interface Props {
  data: Product[];
}

// Alertas visuales: avisan al usuario sobre situaciones relevantes del catálogo.
export default function Alerts({ data }: Props) {
  const outOfStock = data.filter(
    (p) => p.stock_status?.toLowerCase() !== "in stock"
  ).length;

  const lowRated = data.filter((p) => p.rating < 3).length;

  return (
    <Stack spacing={1}>
      {outOfStock > 0 && (
        <Alert severity="warning">
          Hay <strong>{outOfStock}</strong> producto(s) sin stock disponible.
        </Alert>
      )}
      {lowRated > 0 && (
        <Alert severity="error">
          <strong>{lowRated}</strong> producto(s) tienen una calificación baja
          (menor a 3 estrellas).
        </Alert>
      )}
      {outOfStock === 0 && lowRated === 0 && (
        <Alert severity="success">
          Todos los productos están en stock y bien calificados.
        </Alert>
      )}
    </Stack>
  );
}
