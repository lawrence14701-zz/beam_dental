import React from "react"
import { shallow } from "enzyme"
import Spinner from "./Spinner"

const Composition = () => <Spinner />

describe("<Composition />", () => {
  it("should render a Spinner", () => {
    const wrapper = shallow(<Composition />)
    expect(wrapper.find(Spinner)).toHaveLength(1)
  })
})
