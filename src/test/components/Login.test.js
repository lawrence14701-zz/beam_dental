import Login from "../../components/Login/Login"
import React from "react"
import "../jestsetup"
import { render, fireEvent } from "@testing-library/react"

function createTestProps() {
  return {
    email: "testing",
    password: "testing",
  }
}

const mockHistoryPush = jest.fn()

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

describe("Login", () => {
  const props = createTestProps()

  it("Displays Login", () => {
    const { getByText } = render(<Login {...props} />)
    fireEvent.click(getByText("Sign In"))
    expect(mockHistoryPush).toHaveBeenCalledWith("/shipping")

    // bttn.simulate("click")
  })
})
