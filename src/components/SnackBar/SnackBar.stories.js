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
  type: "success",
  text: "success",
}

openFail.args = {
  isOpen: true,
  text: "fail",
  type: "error",
}

closed.args = {
  isOpen: false,
  type: "error",
  text: "closed",
}
