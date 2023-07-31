import { library } from "../../books.json";

export const BOOK_ACTION_TYPES = {
  ADD_BOOK_TO_READING_LIST: "ADD_BOOK_TO_READING_LIST",
  REMOVE_BOOK__FROM_READING_LIST: "REMOVE_BOOK__FROM_READING_LIST",
};

const updateLocalStorage = ({ availableBooks, selectedBooks }) => {
  localStorage.setItem("availableBooks", JSON.stringify(availableBooks));
  localStorage.setItem("selectedBooks", JSON.stringify(selectedBooks));
};

export const initialState = {
  availableBooks: JSON.parse(localStorage.getItem("availableBooks")) || library,
  selectedBooks: JSON.parse(localStorage.getItem("selectedBooks")) || [],
};

const reducer = (state, action) => {
  const { availableBooks, selectedBooks } = state;
  const { payload } = action;

  switch (action.type) {
    case BOOK_ACTION_TYPES.ADD_BOOK_TO_READING_LIST: {
      const newBook = availableBooks.find(
        ({ book: { ISBN } }) => ISBN === payload.ISBN
      );

      const newState = {
        selectedBooks: [...selectedBooks, newBook],
        availableBooks: availableBooks.filter(
          ({ book: { ISBN } }) => ISBN !== payload.ISBN
        ),
      };

      updateLocalStorage(newState);

      return newState;
    }

    case BOOK_ACTION_TYPES.REMOVE_BOOK__FROM_READING_LIST: {
      const removedBook = selectedBooks.find(
        ({ book: { ISBN } }) => ISBN === payload.ISBN
      );

      const newState = {
        availableBooks: [...availableBooks, removedBook],
        selectedBooks: selectedBooks.filter(
          ({ book: { ISBN } }) => ISBN !== payload.ISBN
        ),
      };

      updateLocalStorage(newState);

      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
