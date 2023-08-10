import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import { library } from "../../../books.json";
import BooksList from "./BooksList";

describe("BooksList", () => {
  const mockOnClickAdd = vi.fn();
  const mockOnClickRemove = vi.fn();
  const data = library;

  it("renders correctly with default props", () => {
    const { container } = render(<BooksList data={data} />);
    const bookImages = container.querySelectorAll("article");
    expect(bookImages).toHaveLength(data.length);
  });

  it('renders "Add" and "Remove" buttons when enabled', () => {
    const { container } = render(
      <BooksList
        data={data}
        isAddButtonEnabled={true}
        isRemoveButtonEnabled={true}
      />
    );

    const addButton = container.querySelector("._add-button_995f52");
    const removeButton = container.querySelector("._close-button_995f52");

    expect(addButton).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
  });

  it("calls onClickAddButton and onClickRemoveButton on button click", () => {
    const { container } = render(
      <BooksList
        data={data}
        isAddButtonEnabled={true}
        isRemoveButtonEnabled={true}
        onClickAddButton={mockOnClickAdd}
        onClickRemoveButton={mockOnClickRemove}
      />
    );

    const addButton = container.querySelector("._add-button_995f52");
    const removeButton = container.querySelector("._close-button_995f52");

    fireEvent.click(addButton);
    expect(mockOnClickAdd).toHaveBeenCalledTimes(1);

    fireEvent.click(removeButton);
    expect(mockOnClickRemove).toHaveBeenCalledTimes(1);
  });
});
