import React from "react"
import Tabs from "../../components/Tabs/Tabs"
import "../jestsetup"

function createTestProps() {
  return {
    tabs: { itemOne: "itemOnePage", itemTwo: "itemTwoPage" },
  }
}

test("render tabs props correctly", () => {
  const props = createTestProps()
  const { tabs } = props
  const wrapper = mount(<Tabs tabs={tabs} />)
  wrapper.debug()
  expect(wrapper.prop("tabs")).toEqual({
    itemOne: "itemOnePage",
    itemTwo: "itemTwoPage",
  })
})
