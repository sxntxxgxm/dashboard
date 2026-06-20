import { useMemo, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

import Header from "./components/Header";
import Alerts from "./components/Alerts";
import Selector from "./components/Selector";
import Indicators from "./components/Indicators";
import ChartUI from "./components/ChartUI";
import TableUI from "./components/TableUI";
import AdditionalInfo from "./components/AdditionalInfo";

import { useFetchData } from "./hooks/useFetchData";
import type { Indicators as IndicatorsType } from "./types/DashboardTypes";

function App() {
  const { data, loading, error } = useFetchData();
  const [categoria, setCategoria] = useState<string>("Todas");

  // Lista de categorías únicas para el selector.
  const categories = useMemo(
    () => Array.from(new Set(data.map((p) => p.category))).sort(),
    [data]
  );

  // Datos filtrados según la categoría seleccionada.
  const filtered = useMemo(
    () =>
      categoria === "Todas"
        ? data
        : data.filter((p) => p.category === categoria),
    [data, categoria]
  );

  // Cálculo de indicadores (KPIs).
  const indicators: IndicatorsType = useMemo(() => {
    const totalProducts = filtered.length;
    const avgPrice =
      totalProducts > 0
        ? filtered.reduce((s, p) => s + p.price, 0) / totalProducts
        : 0;
    const avgRating =
      totalProducts > 0
        ? filtered.reduce((s, p) => s + p.rating, 0) / totalProducts
        : 0;
    const totalCategories = new Set(filtered.map((p) => p.category)).size;
    return { totalProducts, avgPrice, avgRating, totalCategories };
  }, [filtered]);

  if (loading) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: "center", alignItems: "stretch" }}
      >
        {/* Encabezado */}
        <Grid size={{ xs: 12, md: 12 }}>
          <Header />
        </Grid>

        {/* Alertas */}
        <Grid size={{ xs: 12, md: 12 }}>
          {error ? (
            <Alert severity="error">
              Error al cargar los datos desde Firebase: {error}. Revisa la
              configuración en src/firebase/config.ts.
            </Alert>
          ) : (
            <Alerts data={filtered} />
          )}
        </Grid>

        {/* Selector */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Selector
            categories={categories}
            selected={categoria}
            onChange={setCategoria}
          />
        </Grid>

        {/* Indicadores */}
        <Grid size={{ xs: 12, md: 9 }}>
          <Indicators indicators={indicators} />
        </Grid>

        {/* Gráfico */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: "none", md: "block" } }}>
          <ChartUI data={filtered} />
        </Grid>

        {/* Tabla */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: "none", md: "block" } }}>
          <TableUI data={filtered} />
        </Grid>

        {/* Información adicional */}
        <Grid size={{ xs: 12, md: 12 }}>
          <AdditionalInfo />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
