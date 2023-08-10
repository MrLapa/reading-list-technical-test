import { useContext } from "react";
import { BooksContext } from "../context/BooksContextProvider";

const useBooks = () => {
  const {
    selectedBooks,
    addToSelectedBooks,
    removeFromSelectedBooks,
    availableBooks,
    updateBooks,
  } = useContext(BooksContext);

  const maxPagesAvailableBooks = availableBooks.reduce(
    (max, { book: { pages } }) => {
      return pages > max ? pages : max;
    },
    availableBooks[0].book.pages
  );

  const maxPagesSelectedBooks =
    selectedBooks.length > 0
      ? selectedBooks.reduce((max, { book: { pages } }) => {
          return pages > max ? pages : max;
        }, selectedBooks[0].book.pages)
      : 0;

  const maxPages = Math.max(maxPagesAvailableBooks, maxPagesSelectedBooks);

  return {
    maxPages,
    selectedBooks,
    availableBooks,
    addToSelectedBooks,
    removeFromSelectedBooks,
    updateBooks,
  };
};

export default useBooks;
