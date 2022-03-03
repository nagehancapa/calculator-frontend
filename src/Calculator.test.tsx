import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Calculator from "./Calculator";

describe("Calculator", () => {
  it("shows numbers", () => {
    render(<Calculator />);
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.forEach((n) => {
      expect(screen.getByText(n.toString())).toBeInTheDocument();
    });
  });

  it("shows 4 rows", () => {
    render(<Calculator />);
    const numberRows = screen.getAllByRole("row");
    expect(numberRows).toHaveLength(4);
  });

  it("shows the calculation operators", () => {
    render(<Calculator />);
    const calculationOperators = ["+", "-", "×", "÷"];
    calculationOperators.forEach((operator) => {
      expect(screen.getByText(operator.toString())).toBeInTheDocument();
    });
  });

  it("shows the back, parenthesis and equal signs", () => {
    render(<Calculator />);
    const otherSigns = ["↶", "(", ")", ","];
    otherSigns.forEach((sign) => {
      expect(screen.getByText(sign.toString())).toBeInTheDocument();
    });
  });

  it("shows clear sign", () => {
    render(<Calculator />);
    const clear = "C";
    expect(screen.getByText(clear)).toBeInTheDocument();
  });

  it("shows equal sign", () => {
    render(<Calculator />);
    const equal = "=";
    expect(screen.getByText(equal)).toBeInTheDocument();
  });

  it("shows initial input as zero", () => {
    render(<Calculator />);
    expect(screen.getByPlaceholderText("0")).toBeInTheDocument();
  });

  it("initial input disabled when entered new number", () => {
    render(<Calculator />);
    expect(screen.getByPlaceholderText("0")).toBeDisabled();
  });

  it("displays users inputs", async () => {
    render(<Calculator />);
    const one = screen.getByText("1");
    const two = screen.getByText("2");
    const plus = screen.getByText("+");
    fireEvent.click(one);
    fireEvent.click(plus);
    fireEvent.click(two);
    const result = await screen.findByPlaceholderText("0");
    // @ts-ignore
    expect(result.value).toBe("1+2");
  });

  it("displays users' multiple inputs", async () => {
    render(<Calculator />);
    const openParenthesis = screen.getByText("(");
    const zero = screen.getByText("0");
    const one = screen.getByText("1");
    const two = screen.getByText("2");
    const closeParenthesis = screen.getByText(")");
    const three = screen.getByText("3");
    const five = screen.getByText("5");
    const eight = screen.getByText("8");
    const divide = screen.getByText("÷");
    const mul = screen.getByText("×");
    const minus = screen.getByText("-");
    const plus = screen.getByText("+");
    const comma = screen.getByText(",");
    fireEvent.click(openParenthesis);
    fireEvent.click(zero);
    fireEvent.click(comma);
    fireEvent.click(two);
    fireEvent.click(plus);
    fireEvent.click(zero);
    fireEvent.click(comma);
    fireEvent.click(eight);
    fireEvent.click(closeParenthesis);
    fireEvent.click(mul);
    fireEvent.click(three);
    fireEvent.click(mul);
    fireEvent.click(two);
    fireEvent.click(minus);
    fireEvent.click(one);
    fireEvent.click(divide);
    fireEvent.click(five);
    const result = await screen.findByPlaceholderText("0");
    // @ts-ignore
    expect(result.value).toBe("(0,2+0,8)×3×2-1÷5");
  });

  it("calculate based on users inputs", async () => {
    render(<Calculator />);
    const one = screen.getByText("1");
    const two = screen.getByText("2");
    const plus = screen.getByText("+");
    const equal = screen.getByText("=");
    fireEvent.click(one);
    fireEvent.click(plus);
    fireEvent.click(two);
    fireEvent.click(equal);
    const result = await screen.findByPlaceholderText("0");
    expect((result as HTMLElement & { value: string }).value).toBe("3");
  });

  it("calculate based on users' multiple inputs", async () => {
    render(<Calculator />);
    const openParenthesis = screen.getByText("(");
    const zero = screen.getByText("0");
    const one = screen.getByText("1");
    const two = screen.getByText("2");
    const closeParenthesis = screen.getByText(")");
    const three = screen.getByText("3");
    const five = screen.getByText("5");
    const eight = screen.getByText("8");
    const divide = screen.getByText("÷");
    const mul = screen.getByText("×");
    const minus = screen.getByText("-");
    const plus = screen.getByText("+");
    const comma = screen.getByText(",");
    const equal = screen.getByText("=");
    fireEvent.click(openParenthesis);
    fireEvent.click(zero);
    fireEvent.click(comma);
    fireEvent.click(two);
    fireEvent.click(plus);
    fireEvent.click(zero);
    fireEvent.click(comma);
    fireEvent.click(eight);
    fireEvent.click(closeParenthesis);
    fireEvent.click(mul);
    fireEvent.click(three);
    fireEvent.click(mul);
    fireEvent.click(two);
    fireEvent.click(minus);
    fireEvent.click(one);
    fireEvent.click(divide);
    fireEvent.click(five);
    fireEvent.click(equal);
    const result = await screen.findByPlaceholderText("0");
    expect((result as HTMLElement & { value: string }).value).toBe("5.8");
  });

  it("can clear results", async () => {
    render(<Calculator />);
    const one = screen.getByText("1");
    const two = screen.getByText("2");
    const plus = screen.getByText("+");
    const clear = screen.getByText("C");
    fireEvent.click(one);
    fireEvent.click(plus);
    fireEvent.click(two);
    fireEvent.click(clear);
    const result = await screen.findByPlaceholderText("0");
    expect((result as HTMLElement & { value: string }).value).toBe("");
  });
});
