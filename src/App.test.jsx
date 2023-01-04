import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('App shows default value', () => {
  render(<App />)
  expect(screen.queryByRole("heading")).toBeInTheDocument()
})
