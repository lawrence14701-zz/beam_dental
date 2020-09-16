import CardContainer from "../../components/CardContainer/CardContainer"
import { shallow } from "enzyme"
import React from "react"
import "../jestsetup"

function createTestProps() {
  return {
    data: [0, 1, 2].map((num) => <div key={num}>{num}</div>),
  }
}

test("render a list of items", () => {
  const props = createTestProps()
  const wrapper = shallow(<CardContainer {...props} />)
  expect(wrapper).toMatchSnapshot()
})
