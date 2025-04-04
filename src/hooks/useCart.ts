import { useState } from "react";

export function useCart() {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (productName: string) => {
    setCart((prev) => [...prev, productName]);
    console.log(`Added ${productName} to cart`);
  };

  return {
    cart,
    addToCart,
    cartSize: cart.length,
  };
}
