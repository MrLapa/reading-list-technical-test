import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import Range from './Range'

describe('Range', () => {
  it('renders without errors', () => {
    render(<Range />)
  })

  it('renders the label', () => {
    const label = 'Page Range'
    render(<Range label={label} />)
    const labelElement = screen.getByText(label)
    expect(labelElement).toBeInTheDocument()
  })

  it('displays the current range value', () => {
    const currentValue = 50
    render(<Range currentValue={currentValue} />)
    const valueElement = screen.getByText(String(currentValue))
    expect(valueElement).toBeInTheDocument()
  })

  it('calls onChange when range value changes', () => {
    const onChange = vi.fn()
    const minPages = 0
    const maxPages = 100
    render(
      <Range
        currentValue={50}
        minPages={minPages}
        maxPages={maxPages}
        onChange={onChange}
      />
    )

    const rangeInput = screen.getByRole('slider')
    fireEvent.change(rangeInput, { target: { value: '75' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('updates rangeValue when range input changes', () => {
    const minPages = 0
    const maxPages = 100
    render(<Range currentValue={50} minPages={minPages} maxPages={maxPages} />)
    const rangeInput = screen.getByRole('slider')
    fireEvent.change(rangeInput, { target: { value: '25' } })
    const valueElement = screen.getByText('25')
    expect(valueElement).toBeInTheDocument()
  })
})
