import SnackBar from "../../components/SnackBar/SnackBar"
import "../jestsetup"
import React from "react"

function createTestProps() {
  return {
    isOpen: true,
    type: "primary",
    text: "success",
  }
}

test("renders a snackbar component", () => {
  const props = createTestProps()
  const wrapper = shallow(<SnackBar {...props} />)
  expect(wrapper).toMatchSnapshot()
})
