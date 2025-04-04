import { renderHook, act } from "@testing-library/react";
import { useCart } from "../../hooks/useCart";

describe("useCart", () => {
  it("adds items to cart", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addToCart("Chokladglass");
    });

    expect(result.current.cart).toContain("Chokladglass");
    expect(result.current.cartSize).toBe(1);
  });
});
