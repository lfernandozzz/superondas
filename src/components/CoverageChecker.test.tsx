import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CoverageChecker } from './CoverageChecker'

describe('CoverageChecker', () => {
  it('explica como corrigir uma consulta incompleta', () => {
    render(<CoverageChecker />)
    fireEvent.click(screen.getByRole('link', { name: /consultar pelo whatsapp/i }))
    expect(screen.getByRole('alert')).toHaveTextContent('Escolha a cidade e informe sua rua ou bairro')
  })
})
