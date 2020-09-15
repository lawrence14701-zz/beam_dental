import React from "react"
import Card from "./Card"
import { Blue } from "../IconAndText/IconAndText.stories"
import { ThemeProvider } from "@material-ui/styles"
import muiTheme from "../../Theme/theme"
import Grid from "@material-ui/core/Grid"

export default {
  title: "Card",
  component: Card,
  decorators: [
    (Story) => (
      <ThemeProvider theme={muiTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

const Template = (args) => (
  <div>
    <Grid container="flex" spacing={8}>
      <Grid item>
        <Card {...args} />
      </Grid>
      <Grid item>
        <Card {...args} />
      </Grid>
    </Grid>
    <Grid container="flex" spacing={8}>
      <Grid item>
        <Card {...args} />
      </Grid>
      <Grid item>
        <Card {...args} />
      </Grid>
    </Grid>
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  children: <Blue color="blue" text="brush" num="2" />,
}
