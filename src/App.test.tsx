import { render, screen } from '@testing-library/react'
import App from './App'
import { ORTHOGRAPHY } from './constants/orthography'
import { WORDS } from './constants/wordlist'
import { ORTHOGRAPHY_PATTERN } from './lib/tokenizer'
import { CONFIG } from './constants/config'

test('renders LongIslandle', () => {
  render(<App />)
  const linkElement = screen.getByText(/LongIslandle/i)
  expect(linkElement).toBeInTheDocument()
})

test('no surprise characters', () => {
  let splitWords = WORDS.map((x) =>
    x.split(ORTHOGRAPHY_PATTERN).filter((x) => x)
  )
  splitWords.forEach((word) => {
    expect(ORTHOGRAPHY).toEqual(expect.arrayContaining(word))
  })
})

test('date is valid', () => {
  expect(new Date(CONFIG.startDate).valueOf()).toBeTruthy()
})
