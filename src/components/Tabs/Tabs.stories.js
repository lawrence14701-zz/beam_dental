import React from "react"
import Tabs from "./Tabs"
import { ThemeProvider } from "@material-ui/styles"
import muiTheme from "../../Theme/theme"

export default {
  title: "Tabs",
  component: Tabs,
  decorators: [
    (Story) => (
      <ThemeProvider theme={muiTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

const Template = (args) => <Tabs {...args} />

export const Primary = Template.bind({})

Primary.args = {
  tabs: { itemOne: "itemOnePage", itemTwo: "itemTwoPage" },
}
