import "./App.css";
import { useEffect, useState } from "react";
import ProductGrid from "./components/ProductGrid";
import { fetchProducts } from "./services/api";
import { Product } from "./types/product";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Something went wrong fetching the products.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p className="p-4">Laddar produkter...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <>
      <Navbar />
      <main className="p-4 bg-hemglass-white min-h-screen">
        <ProductGrid products={products} />
      </main>
    </>
  );
}

export default App;
