const BooksCounter = ({ availableBooks, selectedBooks = 0 }) => {
  return (
    <section>
      <h1>{availableBooks} available books</h1>
      <p>{selectedBooks} in the reading list</p>
    </section>
  )
}

export default BooksCounter
