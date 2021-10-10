import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { Async } from ".";

test('it renders correctly', async () => {
  render(<Async />)

  expect(screen.getByText('Hello World')).toBeInTheDocument()
  // expect( await screen.findByText('Button')).toBeInTheDocument() // Todos os elemento com get tem um com find que espera

  // await waitFor(() => {
  //   return  expect(screen.queryByText('Button')).not.toBeInTheDocument()
  // })

  await waitForElementToBeRemoved(screen.queryByText('Button'))
})