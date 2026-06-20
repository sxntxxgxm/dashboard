import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import FilterListIcon from "@mui/icons-material/FilterList";
import Box from "@mui/material/Box";

interface Props {
  categories: string[];
  selected: string;
  onChange: (value: string) => void;
}

// Selector interactivo: permite filtrar el dashboard por categoría.
export default function Selector({ categories, selected, onChange }: Props) {
  return (
    <Paper sx={{ p: 2, height: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <FilterListIcon color="primary" />
        <Typography variant="h6">Filtros</Typography>
      </Box>
      <FormControl fullWidth>
        <InputLabel id="cat-label">Categoría</InputLabel>
        <Select
          labelId="cat-label"
          value={selected}
          label="Categoría"
          onChange={(e) => onChange(e.target.value)}
        >
          <MenuItem value="Todas">Todas</MenuItem>
          {categories.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
}
