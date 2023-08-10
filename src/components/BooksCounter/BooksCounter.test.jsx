import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import BooksCounter from "./BooksCounter"; // Adjust the import path

describe("BooksCounter", () => {
  it("displays the available and selected books count", () => {
    const availableBooks = 10;
    const selectedBooks = 3;

    render(
      <BooksCounter
        availableBooks={availableBooks}
        selectedBooks={selectedBooks}
      />
    );

    // Check if the available books count and selected books count are displayed
    const availableBooksCount = screen.getByText(
      `${availableBooks} available books`
    );
    const selectedBooksCount = screen.getByText(
      `${selectedBooks} in the reading list`
    );

    expect(availableBooksCount).toBeInTheDocument();
    expect(selectedBooksCount).toBeInTheDocument();
  });
});
