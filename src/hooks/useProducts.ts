import { useEffect, useState } from "react";
import { Product } from "../types/product";
import { fetchProducts } from "../services/api";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch {
        setError("Something went wrong fetching the products.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { products, loading, error };
}
