
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Counter Application", () => {

  test("displays the initial count and all buttons", () => {
    render(<App />);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Increment" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Decrement" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reset" })).toBeInTheDocument();
  });

  test("increments the count from 0 to 1", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Increment" }));

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  test("decrements the count from 0 to -1", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Decrement" }));

    expect(screen.getByText("Count: -1")).toBeInTheDocument();
  });

  test("resets the count back to 0", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Increment" }));
    fireEvent.click(screen.getByRole("button", { name: "Increment" }));
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  test("handles multiple actions in sequence", () => {
    render(<App />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    const resetButton = screen.getByRole("button", { name: "Reset" });

    fireEvent.click(incrementButton);
    expect(screen.getByText("Count: 1")).toBeInTheDocument();

    fireEvent.click(incrementButton);
    expect(screen.getByText("Count: 2")).toBeInTheDocument();

    fireEvent.click(decrementButton);
    expect(screen.getByText("Count: 1")).toBeInTheDocument();

    fireEvent.click(resetButton);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();

    fireEvent.click(decrementButton);
    expect(screen.getByText("Count: -1")).toBeInTheDocument();
  });

});
