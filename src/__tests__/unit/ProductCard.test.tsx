import { render, screen } from "@testing-library/react";
import ProductCard from "../../components/ProductCard";

describe("ProductCard", () => {
  it("renders product name and price", () => {
    render(
      <ProductCard
        name="Testglass"
        imageUrl="/test.jpg"
        price={2500}
        quantity={6}
      />
    );

    expect(screen.getByText("Testglass")).toBeInTheDocument();
    expect(screen.getByText("25 kr")).toBeInTheDocument();
    expect(screen.getByText("6st")).toBeInTheDocument();
  });
});

it("renders fallback background when no backgroundImageUrl is provided", () => {
  const { container } = render(
    <ProductCard
      name="Glass utan bakgrund"
      imageUrl="null"
      price={2500}
      quantity={3}
    />
  );

  const backgroundDiv = container.querySelector("div.bg-hemglass-lightblue");
  expect(backgroundDiv).toBeTruthy();
});
