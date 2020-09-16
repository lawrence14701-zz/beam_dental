import React from "react"
import Card from "../../components/Card/Card"
import "../jestsetup"

function createTestProps() {
  return {
    color: "blue",
    text: "brush",
    num: "2",
  }
}

test("render a list of items", () => {
  const props = createTestProps()
  const wrapper = shallow(<Card {...props} />)
  expect(wrapper).toMatchSnapshot()
})
