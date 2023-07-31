/* eslint-disable react/prop-types */
import React from "react";

export const FiltersContext = React.createContext();

const FiltersContextProvider = ({ children }) => {
  const [contextFilters, setContextFilters] = React.useState({
    category: "all",
    pages: 0,
  });

  return (
    <FiltersContext.Provider
      value={{
        contextFilters,
        setContextFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersContextProvider;
