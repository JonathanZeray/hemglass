import ProductCard from "./ProductCard";
import { Product } from "../types/product";
import { extractQuantity } from "../utils/extractQuantity";

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => {
        const quantity = extractQuantity(product.description);
        console.log(`${product.productName}: ${quantity ?? "saknas"}`);
        return (
          <ProductCard
            key={product.productId}
            name={product.productName}
            imageUrl={product.productAsset.preview}
            backgroundImageUrl={product.backgroundImgCard?.preview}
            price={product.priceWithTax.min}
            quantity={quantity}
            onAddToCart={() => console.log(`Added ${product.productName}`)}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
