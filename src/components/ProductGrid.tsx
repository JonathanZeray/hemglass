import ProductCard from "./ProductCard";
import { Product } from "../types/product";
import { extractQuantity } from "../utils/extractQuantity";

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <>
      <h2 className="font-burbank text-hemglass-darkblue text-5xl w-full text-left py-8">
        Alla produkter
      </h2>
      <div className="mt-4 mb-16 flex gap-2 w-full font-bariol text-sm text-hemglass-darkblue">
        <p className="py-2 px-5 border border-hemglass-blue rounded-4xl">
          Kategori
        </p>
        <p className="py-2 px-5 border border-hemglass-blue rounded-4xl">
          Smaker
        </p>
        <p className="py-2 px-5 border border-hemglass-blue rounded-4xl">
          Innehåller inte
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const quantity = extractQuantity(product.description);
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
    </>
  );
};

export default ProductGrid;
