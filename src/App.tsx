import "./App.css";
import { useProducts } from "./hooks/useProducts";
import ProductGrid from "./components/ProductGrid";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";

function App() {
  const { products, loading, error } = useProducts();

  return (
    <>
      <Navbar />
      <Hero />
      <main className="p-4 lg:px-20 bg-hemglass-white min-h-screen">
        {loading && <p>Laddar produkter...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && !error && <ProductGrid products={products} />}
      </main>
    </>
  );
}

export default App;
