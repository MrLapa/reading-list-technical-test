import React from 'react'
import useBooks from '../hooks/useBooks'

export const FiltersContext = React.createContext()

const FiltersContextProvider = ({ children }) => {
  const { maxPages } = useBooks()

  const [contextFilters, setContextFilters] = React.useState({
    category: 'all',
    pages: maxPages
  })

  return (
    <FiltersContext.Provider
      value={{
        contextFilters,
        setContextFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export default FiltersContextProvider
