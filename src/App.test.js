import React from "react"
import { render, fireEvent, screen } from "./shared/utils/testUtils"

import App from "./App"
import flushPromises from "flush-promises"

jest.mock("./jokes/services/chuckNorrisAPI");

it("Displays random joke and categories", async () => {
  render(<App />)
  await flushPromises()
  // console.log(screen.debug())
  expect(screen.getByText(process.env.JOKE_RANDOM)).toBeInTheDocument()
})