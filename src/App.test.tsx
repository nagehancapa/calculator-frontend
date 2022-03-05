import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "./store";

test("renders calculator", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
  const calculatorElement = screen.getByText(/calculator/i);
  expect(calculatorElement).toBeInTheDocument();
});
