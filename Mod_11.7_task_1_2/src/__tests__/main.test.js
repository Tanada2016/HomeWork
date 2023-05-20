import { getPercents } from "../main";

describe("getPercents", () => {
  it("should return 0 when given 0 as percent or number", () => {
    expect(getPercents(0, 200)).toBe(0);
    expect(getPercents(30, 0)).toBe(0);
  });

  it("should calculate the correct percentage", () => {
    expect(getPercents(30, 200)).toBe(60);
    expect(getPercents(50, 500)).toBe(250);
  });

  it("should return NaN when given non-numeric values", () => {
    expect(getPercents("test", "test")).toBe(NaN);
    expect(getPercents(10, null)).toBe(NaN);
  });

  it("should handle negative values", () => {
    expect(getPercents(-30, 200)).toBe(-60);
    expect(getPercents(30, -200)).toBe(-60);
  });
});