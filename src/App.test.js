import React from "react"
import { render, screen } from "./shared/utils/testUtils"
import userEvent from "@testing-library/user-event"
import flushPromises from "flush-promises"

import App from "./App"
import {
  TST_JOKE_RANDOM,
  TST_JOKE_CATEGORY_RANDOM,
  TST_JOKE_SEARCH_QUERRY,
  TST_CAT1,
  TST_CAT2,
} from "./jokes/services/__mocks__/chuckNorrisAPI"

jest.mock("./jokes/services/chuckNorrisAPI")

beforeEach(async () => {
  render(<App />)
  await flushPromises()
})

it("Displays joke and categories.", async () => {
  expect(screen.getByText(TST_JOKE_RANDOM)).toBeInTheDocument()

  userEvent.click(screen.getByText(TST_JOKE_RANDOM))
  await flushPromises()

  expect(screen.getByText(TST_JOKE_RANDOM)).toBeInTheDocument()
  expect(screen.getByText(TST_CAT1)).toBeInTheDocument()
  expect(screen.getByText(TST_CAT2)).toBeInTheDocument()
})

it("Displays correct jokes after clicking category.", async () => {
  userEvent.click(screen.getByText(TST_CAT1))
  await flushPromises()

  expect(screen.getByText(TST_JOKE_CATEGORY_RANDOM)).toBeInTheDocument()

  userEvent.click(screen.getByText(TST_CAT1))
  await flushPromises()

  expect(screen.getByText(TST_JOKE_RANDOM)).toBeInTheDocument()
})

it("Displays correct jokes after adding phrase.", async () => {
  userEvent.type(
    screen.getByLabelText("Find joke with phrase"),
    process.env.PHRASE
  )
  await flushPromises()

  expect(
    screen.getByText(new RegExp(TST_JOKE_SEARCH_QUERRY))
  ).toBeInTheDocument()
  expect(screen.getByText(new RegExp(process.env.PHRASE))).toBeInTheDocument()
})
