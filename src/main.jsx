import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FiltersContextProvider from "./context/FiltersContextProvider.jsx";
import BooksContextProvider from "./context/BooksContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BooksContextProvider>
      <FiltersContextProvider>
        <App />
      </FiltersContextProvider>
    </BooksContextProvider>
  </React.StrictMode>
);
