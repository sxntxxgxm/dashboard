// Tipos de datos del dashboard.
// Cada producto del dataset "Retail Product Catalog" de Kaggle.

export interface Product {
  id: number;
  product_name: string;
  brand: string; // categórica
  category: string; // categórica
  sub_category: string; // categórica
  price: number; // numérica
  rating: number; // numérica (1 a 5)
  review_count: number; // numérica
  stock_status: string; // categórica ("In Stock" / "Out of Stock")
}

// Indicadores (KPIs) calculados a partir de los productos.
export interface Indicators {
  totalProducts: number;
  avgPrice: number;
  avgRating: number;
  totalCategories: number;
}
