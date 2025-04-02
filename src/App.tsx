import "./App.css";
import ProductGrid from "./components/ProductGrid";
import { mockProducts } from "./data/mockProducts";

function App() {
  return (
    <main className="p-4 min-h-screen mx-auto">
      <ProductGrid products={mockProducts} />
    </main>
  );
}

export default App;
