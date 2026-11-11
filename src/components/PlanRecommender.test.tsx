import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { PlanRecommender } from './PlanRecommender'

describe('PlanRecommender', () => {
  it('indica HomePro para home office', () => {
    render(<MemoryRouter><PlanRecommender /></MemoryRouter>)
    fireEvent.click(screen.getByRole('button', { name: /home office/i }))
    expect(screen.getByRole('heading', { name: 'Super HomePro' })).toBeInTheDocument()
  })
})
