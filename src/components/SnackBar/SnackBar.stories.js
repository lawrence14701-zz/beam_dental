import React from "react"
import SnackBar from "./SnackBar"
import { ThemeProvider } from "@material-ui/styles"
import muiTheme from "../../Theme/theme"

export default {
  title: "SnackBar",
  component: SnackBar,
  decorators: [
    (Story) => (
      <ThemeProvider theme={muiTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

const Template = (args) => <SnackBar {...args} />
export const openSuccess = Template.bind({})
export const openFail = Template.bind({})
export const closed = Template.bind({})

openSuccess.args = {
  isOpen: true,
  type: "primary",
  text: "success",
}

openFail.args = {
  isOpen: true,
  text: "fail",
  type: "secondary",
}

closed.args = {
  isOpen: false,
  type: "primary",
  text: "closed",
}
