import classes from './Filters.module.css'
import Range from '../Range/Range'
import Categories from '../Categories/Categories'
import useFilters from '../../hooks/useFilters'
import useBooks from '../../hooks/useBooks'

const categoryOptions = [
  { value: 'Fantasía', text: 'Fantasía' },
  { value: 'Ciencia ficción', text: 'Ciencia ficción' },
  { value: 'Zombies', text: 'Zombies' },
  { value: 'Terror', text: 'Terror' }
]

const Filters = () => {
  const { filters, setFilters } = useFilters()
  const { pages } = filters
  const { maxPages } = useBooks()

  const onChangeRangeHandler = (event) => {
    setFilters({ pages: event.target.value })
  }

  const onChangeCategoriesHandler = (event) => {
    setFilters({ category: event.target.value })
  }

  return (
    <section className={classes.wrapper}>
      <Range
        minPages={1}
        maxPages={maxPages}
        currentValue={pages || maxPages}
        label='Filter by max number of pages'
        onChange={onChangeRangeHandler}
      />
      <Categories
        data={categoryOptions}
        textLabel='Filter by category'
        onChange={onChangeCategoriesHandler}
      />
    </section>
  )
}

export default Filters
