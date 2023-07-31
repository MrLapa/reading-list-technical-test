/* eslint-disable no-unused-vars */
import classes from "./App.module.css";

import Filters from "./components/Filters/Filters";
import BooksList from "./components/BooksList/BooksList";
import BooksCounter from "./components/BooksCounter/BooksCounter";
import { library } from "../books.json";
import useFilters from "./hooks/useFilters";

function App() {
  const { filteredBooks } = useFilters();

  const onClickAddButtonHandler = (ISBN) => {
    console.log("Add");
  };

  const onClickRemoveButtonHandler = (ISBN) => {
    console.log("Remove");
  };

  return (
    <main className={classes["main-wrapper"]}>
      <section className={classes["available-books"]}>
        <section className={classes["header-wrapper"]}>
          <BooksCounter
            availableBooks={library.length}
            selectedBooks={library.length}
          />
          <Filters />
        </section>
        <BooksList
          data={filteredBooks}
          isAddButtonEnabled={true}
          onClickAddButton={onClickAddButtonHandler}
        />
      </section>
      {library.length > 0 && (
        <aside className={classes["selected-books"]}>
          <h2 className={classes.title}>Reading list</h2>
          <BooksList
            data={library}
            isRemoveButtonEnabled={true}
            onClickRemoveButton={onClickRemoveButtonHandler}
          />
        </aside>
      )}
    </main>
  );
}

export default App;
