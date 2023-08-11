import React, { useReducer } from 'react'
import reducer, { BOOK_ACTION_TYPES, initialState } from '../reducers/books'

export const BooksContext = React.createContext()

const BooksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { selectedBooks, availableBooks } = state

  const addToSelectedBooks = (ISBN) =>
    dispatch({
      type: BOOK_ACTION_TYPES.ADD_BOOK_TO_READING_LIST,
      payload: { ISBN }
    })

  const removeFromSelectedBooks = (ISBN) =>
    dispatch({
      type: BOOK_ACTION_TYPES.REMOVE_BOOK__FROM_READING_LIST,
      payload: { ISBN }
    })

  const updateBooks = () =>
    dispatch({
      type: BOOK_ACTION_TYPES.UPDATE_STATE
    })

  return (
    <BooksContext.Provider
      value={{
        selectedBooks,
        addToSelectedBooks,
        removeFromSelectedBooks,
        availableBooks,
        updateBooks
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider
