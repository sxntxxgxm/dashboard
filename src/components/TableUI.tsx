import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type { Product } from "../types/DashboardTypes";

interface Props {
  data: Product[];
}

const columns: GridColDef[] = [
  { field: "product_name", headerName: "Producto", width: 200 },
  { field: "brand", headerName: "Marca", width: 130 },
  { field: "category", headerName: "Categoría", width: 140 },
  { field: "sub_category", headerName: "Subcategoría", width: 150 },
  {
    field: "price",
    headerName: "Precio ($)",
    width: 110,
    type: "number",
  },
  {
    field: "rating",
    headerName: "Calificación",
    width: 120,
    type: "number",
  },
  {
    field: "review_count",
    headerName: "Reseñas",
    width: 110,
    type: "number",
  },
  { field: "stock_status", headerName: "Stock", width: 120 },
];

// TableUI: tabla detallada de productos con paginación y ordenamiento.
export default function TableUI({ data }: Props) {
  return (
    <Paper sx={{ p: 2, height: "100%" }}>
      <Typography variant="h6" gutterBottom>
        Detalle de productos
      </Typography>
      <Box sx={{ height: 350, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
        />
      </Box>
    </Paper>
  );
}
