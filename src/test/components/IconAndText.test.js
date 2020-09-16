import IconAndText from "../../components/IconAndText/IconAndText"
import { shallow } from "enzyme"
import React from "react"
import "../jestsetup"

function createTestProps() {
  return {
    text: "testing",
    color: "blue",
    num: "2",
  }
}

test("render a circle icon with text", () => {
  const props = createTestProps()
  const wrapper = shallow(<IconAndText {...props} />)
  expect(wrapper).toMatchSnapshot()
})
