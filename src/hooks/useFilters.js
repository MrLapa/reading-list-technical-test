import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContextProvider";
import { library } from "../../books.json";

const useFilters = () => {
  const { contextFilters: filters, setContextFilters } =
    useContext(FiltersContext);

  const { pages: pagesFilter, category: categoryFilter } = filters;

  const setFilters = ({ pages = pagesFilter, category = categoryFilter }) => {
    setContextFilters((prevState) => ({ ...prevState, pages, category }));
  };

  const filteredBooks = library.filter(({ book: { pages, genre } }) => {
    return categoryFilter === "all"
      ? pages <= pagesFilter
      : pages <= pagesFilter && genre === categoryFilter;
  });

  return { filters, setFilters, filteredBooks };
};

export default useFilters;
