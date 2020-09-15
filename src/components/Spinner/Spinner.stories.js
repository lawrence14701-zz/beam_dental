import React from "react"
import Spinner from "./Spinner"
import { ThemeProvider } from "@material-ui/styles"
import muiTheme from "../../Theme/theme"

export default {
  title: "Spinner",
  component: Spinner,
  decorators: [
    (Story) => (
      <ThemeProvider theme={muiTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

const Template = (args) => <Spinner {...args} />

export const Primary = Template.bind({})
