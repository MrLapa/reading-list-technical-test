/* eslint-disable no-unused-vars */
import classes from "./App.module.css";

import Filters from "./components/Filters/Filters";
import BooksList from "./components/BooksList/BooksList";
import BooksCounter from "./components/BooksCounter/BooksCounter";
import { library } from "../books.json";
import useFilters from "./hooks/useFilters";
import useBooks from "./hooks/useBooks";
import { LOCAL_STORAGE_KEYS } from "./constants/localStorage";

function App() {
  const { filteredBooks } = useFilters();
  const {
    selectedBooks,
    addToSelectedBooks,
    removeFromSelectedBooks,
    updateBooks,
  } = useBooks();

  const onClickAddButtonHandler = (ISBN) => {
    addToSelectedBooks(ISBN);
  };

  const onClickRemoveButtonHandler = (ISBN) => {
    removeFromSelectedBooks(ISBN);
  };

  const handleStorageChange = (event) => {
    if (
      event.key !== LOCAL_STORAGE_KEYS.AVAILABLE_BOOKS &&
      event.key !== LOCAL_STORAGE_KEYS.SELECTED_BOOKS
    ) {
      return;
    }

    updateBooks();
  };

  window.addEventListener("storage", handleStorageChange);

  return (
    <main className={classes["main-wrapper"]}>
      <section className={classes["available-books"]}>
        <section className={classes["header-wrapper"]}>
          <BooksCounter
            availableBooks={filteredBooks.length}
            selectedBooks={selectedBooks.length}
          />
          <Filters />
        </section>
        <BooksList
          data={filteredBooks}
          isAddButtonEnabled={true}
          onClickAddButton={onClickAddButtonHandler}
        />
      </section>
      {selectedBooks.length > 0 && (
        <aside className={classes["selected-books"]}>
          <h2 className={classes.title}>Reading list</h2>
          <BooksList
            data={selectedBooks}
            isRemoveButtonEnabled={true}
            onClickRemoveButton={onClickRemoveButtonHandler}
          />
        </aside>
      )}
    </main>
  );
}

export default App;
