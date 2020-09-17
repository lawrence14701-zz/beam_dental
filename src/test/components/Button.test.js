import React from "react"
import Button from "../../components/Button/Button"
import "../jestsetup"

test("render a button", () => {
  const wrapper = shallow(<Button />)
  expect(wrapper).toMatchSnapshot()
})
