// Hook que lee los productos desde Firebase Realtime Database.
// Lee el nodo "data" (el mismo nombre que indica el tutorial al importar el JSON).

import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase/config";
import type { Product } from "../types/DashboardTypes";

export function useFetchData() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dataRef = ref(db, "data");

    const unsubscribe = onValue(
      dataRef,
      (snapshot) => {
        const value = snapshot.val();

        if (!value) {
          setData([]);
          setLoading(false);
          return;
        }

        // Firebase puede devolver un arreglo o un objeto con claves.
        // Normalizamos ambos casos a un arreglo de Product.
        const list: Product[] = Array.isArray(value)
          ? value.filter(Boolean)
          : Object.values(value);

        // Garantizamos que cada fila tenga un id numérico (lo exige DataGrid).
        const normalized = list.map((item, index) => ({
          ...item,
          id: item.id ?? index,
          price: Number(item.price),
          rating: Number(item.rating),
          review_count: Number(item.review_count),
        }));

        setData(normalized);
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { data, loading, error };
}
