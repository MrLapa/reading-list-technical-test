/* eslint-disable react/prop-types */
import classes from "./BookItem.module.css";

const BookItem = ({
  isCloseButtonVisible = false,
  isAddButtonVisible = false,
  onClickAddButton,
  onClickRemoveButton,
  imgSource,
  imgText,
}) => {
  return (
    <article className={classes["book-wrapper"]}>
      <div className={classes["image-wrapper"]}>
        {isCloseButtonVisible && (
          <button
            className={classes["close-button"]}
            onClick={onClickRemoveButton}
          >
            x
          </button>
        )}
        <img className={classes["book-image"]} src={imgSource} alt={imgText} />
      </div>
      {isAddButtonVisible && (
        <button className={classes["add-button"]} onClick={onClickAddButton}>
          Add book
        </button>
      )}
    </article>
  );
};

export default BookItem;
