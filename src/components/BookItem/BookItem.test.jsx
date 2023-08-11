import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import BookItem from './BookItem'

describe('BookItem', () => {
  it('renders without errors', () => {
    render(<BookItem />)
  })

  it('renders book image with alt text', () => {
    const imgSource = 'book.jpg'
    const imgText = 'Book Cover'
    render(<BookItem imgSource={imgSource} imgText={imgText} />)
    const imgElement = screen.getByAltText(imgText)
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', imgSource)
  })

  it('displays close button when isCloseButtonVisible is true', () => {
    render(<BookItem isCloseButtonVisible />)
    const closeButton = screen.getByText('x')
    expect(closeButton).toBeInTheDocument()
  })

  it('displays add button when isAddButtonVisible is true', () => {
    render(<BookItem isAddButtonVisible />)
    const addButton = screen.getByText('Add book')
    expect(addButton).toBeInTheDocument()
  })

  it('calls onClickRemoveButton when close button is clicked', () => {
    const onClickRemoveButton = vi.fn()
    render(
      <BookItem
        isCloseButtonVisible
        onClickRemoveButton={onClickRemoveButton}
      />
    )
    const closeButton = screen.getByText('x')
    fireEvent.click(closeButton)
    expect(onClickRemoveButton).toHaveBeenCalledTimes(1)
  })

  it('calls onClickAddButton when add button is clicked', () => {
    const onClickAddButton = vi.fn()
    render(
      <BookItem isAddButtonVisible onClickAddButton={onClickAddButton} />
    )
    const addButton = screen.getByText('Add book')
    fireEvent.click(addButton)
    expect(onClickAddButton).toHaveBeenCalledTimes(1)
  })
})
