import { calculateExpression } from "./calculateExpression";

describe("calculateExpression", () => {
  it("correctly adds 2 numbers", () => {
    expect(calculateExpression("1+1")).toBe(2);
    expect(calculateExpression("10+10")).toBe(20);
    expect(calculateExpression("11+345")).toBe(356);
  });

  it("correctly substracts 2 numbers", () => {
    expect(calculateExpression("1-1")).toBe(0);
    expect(calculateExpression("10-1")).toBe(9);
    expect(calculateExpression("11-12")).toBe(-1);
  });

  it("correctly multiples 2 numbers", () => {
    expect(calculateExpression("1×1")).toBe(1);
    expect(calculateExpression("10×0")).toBe(0);
    expect(calculateExpression("11×-12")).toBe(-132);
  });

  it("correctly divides 2 numbers", () => {
    expect(calculateExpression("1÷1")).toBe(1);
    expect(calculateExpression("2÷10")).toBe(0.2);
    expect(calculateExpression("10÷2")).toBe(5);
    expect(calculateExpression("144÷12")).toBe(12);
  });

  it("division by 0 returns undefined and logs exception", () => {
    const errorSpy = jest.spyOn(console, "log");
    expect(calculateExpression("1÷0")).toBe(undefined);
    expect(errorSpy).toHaveBeenCalledTimes(1);
  });

  it("handles multiple operations", () => {
    expect(calculateExpression("1÷1×2×2+3×22")).toBe(70);
  });

  it("handles trailing operator", () => {
    expect(calculateExpression("1÷1×2×2+3×22+")).toBe(70);
  });

  it("handles empty expression", () => {
    expect(calculateExpression("")).toBe(undefined);
  });
});
