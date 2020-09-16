import React from "react"
import Spinner from "../../components/Spinner/Spinner"
import "../jestsetup"

const Composition = () => <Spinner />

describe("<Spinner />", () => {
  it("should render a Spinner", () => {
    const wrapper = shallow(<Composition />)
    expect(wrapper.find(Spinner)).toHaveLength(1)
  })
  test("renders a spinning component", () => {
    const wrapper = shallow(<Spinner />)
    expect(wrapper).toMatchSnapshot()
  })
})
