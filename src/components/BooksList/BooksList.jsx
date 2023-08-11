import classes from './BooksList.module.css'
import Book from '../BookItem/BookItem'

const BooksList = ({
  data,
  isAddButtonEnabled = false,
  isRemoveButtonEnabled = false,
  onClickAddButton = () => { },
  onClickRemoveButton = () => { }
}) => {
  return (
    <section className={classes.wrapper}>
      {data &&
        data.map(({ book: { cover, ISBN, title } }) => (
          <Book
            key={ISBN}
            imgSource={cover}
            imgText={title}
            isAddButtonVisible={isAddButtonEnabled}
            isCloseButtonVisible={isRemoveButtonEnabled}
            onClickAddButton={() => onClickAddButton(ISBN)}
            onClickRemoveButton={() => onClickRemoveButton(ISBN)}
          />
        ))}
    </section>
  )
}

export default BooksList
