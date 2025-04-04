import { describe, it, expect } from "vitest";
import { extractQuantity } from "../../utils/extractQuantity";

describe("extractQuantity", () => {
  it("returns correct quantity for valid input with spacing", () => {
    const html = "<p>Innehåller: 6 st glassar</p>";
    expect(extractQuantity(html)).toBe(6);
  });

  it("returns correct quantity for valid input without", () => {
    const html = "<p>Innehåller: 6st glassar</p>";
    expect(extractQuantity(html)).toBe(6);
  });

  it("returns 1 when no quantity is found", () => {
    const html = "<p>En pizza med ost</p>";
    expect(extractQuantity(html)).toBe(1);
  });

  it("handles edge case with without spacing", () => {
    const html = "<p>Innehåller:  12x chokladbitar</p>";
    expect(extractQuantity(html)).toBe(12);
  });

  it("handles edge case with spacing", () => {
    const html = "<p>Paketet har 9 x glassar</p>";
    expect(extractQuantity(html)).toBe(9);
  });
});
