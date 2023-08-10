import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import to use jest-dom matchers
import Categories from "./Categories"; // Adjust the path to your component

describe("Categories", () => {
  const data = [
    { value: "Fantasía", text: "Fantasía" },
    { value: "Ciencia ficción", text: "Ciencia ficción" },
    { value: "Zombies", text: "Zombies" },
    { value: "Terror", text: "Terror" },
  ];

  it("renders without errors", () => {
    render(<Categories data={data} />);
  });

  it("renders the label", () => {
    const textLabel = "Select Category";
    render(<Categories textLabel={textLabel} data={data} />);
    const labelElement = screen.getByText(textLabel);
    expect(labelElement).toBeInTheDocument();
  });

  it("renders options based on data prop", () => {
    render(<Categories data={data} />);
    data.forEach(({ value, text }) => {
      const optionElement = screen.getByText(text);
      expect(optionElement).toBeInTheDocument();
      expect(optionElement).toHaveAttribute("value", value);
    });
  });

  it("calls onChange when select value changes", () => {
    const onChange = vi.fn();
    render(<Categories data={data} onChange={onChange} />);
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "Zombies" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('select element has a default value of "all"', () => {
    const onChange = vi.fn();
    render(
      <Categories
        textLabel="Filter by category"
        data={data}
        onChange={onChange}
      />
    );

    const allOption = screen.getByDisplayValue("All");
    expect(allOption).toBeInTheDocument();
  });
});
