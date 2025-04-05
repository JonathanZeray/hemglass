import { render, screen } from "@testing-library/react";
import ProductGrid from "../../components/ProductGrid";
import { describe, it, expect } from "vitest";
import type { Product } from "../../types/product";

describe("ProductGrid", () => {
  const mockProducts: Product[] = [
    {
      productId: "1",
      productVariantId: "1a",
      sku: "SKU-1",
      slug: "glass-1",
      productName: "Chokladglass",
      description: "<p>Innehåller: 6st</p>",
      productAsset: {
        id: "img1",
        preview: "https://example.com/img1.jpg",
      },
      backgroundImgCard: {
        preview: "https://example.com/bg1.jpg",
      },
      priceWithTax: {
        min: 2500,
        max: 0,
      },
    },
    {
      productId: "2",
      productVariantId: "2a",
      sku: "SKU-2",
      slug: "glass-2",
      productName: "Vaniljglass",
      description: "<p>Innehåller: 4 x</p>",
      productAsset: {
        id: "img2",
        preview: "https://example.com/img2.jpg",
      },
      backgroundImgCard: {
        preview: "https://example.com/bg2.jpg",
      },
      priceWithTax: {
        min: 3000,
        max: 0,
      },
    },
  ];

  it("renders correct number of product cards with correct content", () => {
    render(<ProductGrid products={mockProducts} onAddToCart={() => {}} />);

    expect(screen.getAllByRole("img").length).toBe(2);

    expect(screen.getByText("Chokladglass")).toBeInTheDocument();
    expect(screen.getByText("Vaniljglass")).toBeInTheDocument();

    expect(screen.getByText("6st")).toBeInTheDocument();
    expect(screen.getByText("4st")).toBeInTheDocument();

    expect(screen.getByText("25 kr")).toBeInTheDocument();
    expect(screen.getByText("30 kr")).toBeInTheDocument();
  });
});
