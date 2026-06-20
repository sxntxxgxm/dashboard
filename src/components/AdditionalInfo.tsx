import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

// Información adicional: contexto del dataset y la fuente de los datos.
export default function AdditionalInfo() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Acerca de los datos
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Este dashboard utiliza el dataset <strong>Retail Product Catalog</strong>,
        que reúne información de productos de comercio electrónico: nombre, marca,
        categoría, subcategoría, precio, calificación, número de reseñas y estado
        de stock. Los datos se almacenan y consumen desde Firebase Realtime
        Database en tiempo real.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link
          href="https://www.kaggle.com/datasets/noopurbhatt/retail-product-catalog-dataset"
          target="_blank"
          rel="noopener"
        >
          Fuente del dataset en Kaggle
        </Link>
      </Box>
    </Paper>
  );
}
