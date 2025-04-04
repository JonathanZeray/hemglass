import "./App.css";
import { useProducts } from "./hooks/useProducts";
import { useCart } from "./hooks/useCart";
import ProductGrid from "./components/ProductGrid";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";

function App() {
  const { products, loading, error } = useProducts();
  const { cart, addToCart } = useCart();

  return (
    <>
      <Navbar cart={cart} />
      <Hero />
      <main className="p-4 lg:px-20 bg-hemglass-white min-h-screen">
        {loading && <p>Laddar produkter...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && !error && (
          <ProductGrid products={products} onAddToCart={addToCart} />
        )}
      </main>
    </>
  );
}

export default App;
