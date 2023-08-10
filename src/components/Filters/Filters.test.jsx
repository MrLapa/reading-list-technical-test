import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Filters from "./Filters";

// Mock the custom hooks
vi.mock("../../hooks/useFilters.js", () => ({
  default: vi.fn(() => ({
    filters: { category: "Fantasía", pages: 50 },
    setFilters: vi.fn(),
  })),
}));

vi.mock("../../hooks/useBooks.js", () => ({
  default: vi.fn(() => ({
    maxPages: 100,
  })),
}));

describe("Filters", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<Filters />);

    // Find elements to test
    const rangeInput = getByLabelText("Filter by max number of pages");
    const categorySelect = getByLabelText("Filter by category");

    // Test range input
    expect(rangeInput).toBeInTheDocument();
    expect(rangeInput).toHaveAttribute("type", "range");
    expect(rangeInput).toHaveAttribute("min", "1");
    expect(rangeInput).toHaveAttribute("max", "100");
    expect(rangeInput).toHaveAttribute("value", "50");

    // Test category select
    expect(categorySelect).toBeInTheDocument();
    expect(categorySelect).toHaveValue("Fantasía");

    //simulate events (e.g., changing value)
    fireEvent.change(rangeInput, { target: { value: "70" } });
    fireEvent.change(categorySelect, { target: { value: "Terror" } });

    // Add more assertions or test interaction with the component as needed...
  });

  // Add more tests as needed...
});
