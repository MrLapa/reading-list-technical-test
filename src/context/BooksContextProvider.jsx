/* eslint-disable react/prop-types */
import React from "react";

export const BooksContext = React.createContext();

const BooksContextProvider = ({ children }) => {
  const [selectedBooks, setSelectedBooks] = React.useState([]);
  const [availableBooks, setAvailableBooks] = React.useState([]);

  return (
    <BooksContext.Provider
      value={{
        selectedBooks,
        setSelectedBooks,
        availableBooks,
        setAvailableBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
