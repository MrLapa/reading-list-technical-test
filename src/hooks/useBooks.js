import { useContext, useEffect } from "react";
import { BooksContext } from "../context/BooksContextProvider";
import { library } from "../../books.json";

const useBooks = () => {
  const { selectedBooks, setSelectedBooks, availableBooks, setAvailableBooks } =
    useContext(BooksContext);

  useEffect(() => {
    setAvailableBooks(library);
  }, [setAvailableBooks]);

  const maxPages = library.reduce((max, { book: { pages } }) => {
    return pages > max ? pages : max;
  }, library[0].book.pages);

  const minPages = library.reduce((max, { book: { pages } }) => {
    return pages < max ? pages : max;
  }, library[0].book.pages);

  const addBookToReadingList = (newISBN) => {
    const newBook = availableBooks.find(
      ({ book: { ISBN } }) => ISBN === newISBN
    );

    setSelectedBooks((prevItems) => [...prevItems, newBook]);

    setAvailableBooks((prevItems) =>
      prevItems.filter(({ book: { ISBN } }) => ISBN !== newISBN)
    );
  };

  const removeBookFromReadingList = (removedISBN) => {
    const removedBook = selectedBooks.find(
      ({ book: { ISBN } }) => ISBN === removedISBN
    );

    setAvailableBooks((prevItems) => [...prevItems, removedBook]);

    setSelectedBooks((prevItems) =>
      prevItems.filter(({ book: { ISBN } }) => ISBN !== removedISBN)
    );
  };

  return {
    maxPages,
    minPages,
    selectedBooks,
    availableBooks,
    addBookToReadingList,
    removeBookFromReadingList,
  };
};

export default useBooks;
