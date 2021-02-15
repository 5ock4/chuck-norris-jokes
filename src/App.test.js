import React from "react"
import { render, screen } from "./shared/utils/testUtils"
import userEvent from "@testing-library/user-event"
import flushPromises from "flush-promises"

import App from "./App"

jest.mock("./jokes/services/chuckNorrisAPI")

beforeEach(async () => {
  render(<App />)
  await flushPromises()
})

it("Displays joke and categories.", async () => {
  expect(screen.getByText(process.env.JOKE_RANDOM)).toBeInTheDocument()

  userEvent.click(screen.getByText(process.env.JOKE_RANDOM))
  await flushPromises()

  expect(screen.getByText(process.env.JOKE_RANDOM)).toBeInTheDocument()
  expect(screen.getByText(process.env.CAT1)).toBeInTheDocument()
  expect(screen.getByText(process.env.CAT2)).toBeInTheDocument()
})

it("Displays correct jokes after clicking category.", async () => {
  userEvent.click(screen.getByText(process.env.CAT1))
  await flushPromises()

  expect(screen.getByText(process.env.JOKE_CATEGORY_RANDOM)).toBeInTheDocument()

  userEvent.click(screen.getByText(process.env.CAT1))
  await flushPromises()

  expect(screen.getByText(process.env.JOKE_RANDOM)).toBeInTheDocument()
})

it("Displays correct jokes after adding phrase.", async () => {
  userEvent.type(screen.getByLabelText('Find joke with phrase'), process.env.PHRASE)
  await flushPromises()

  expect(screen.getByText(new RegExp(process.env.JOKE_SEARCH_QUERRY))).toBeInTheDocument()
  expect(screen.getByText(new RegExp(process.env.PHRASE))).toBeInTheDocument()
})