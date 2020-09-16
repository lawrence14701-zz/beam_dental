import React from "react"
import CardContainer from "./CardContainer"
import { ThemeProvider } from "@material-ui/styles"
import muiTheme from "../../Theme/theme"
import Card from "../Card/Card"
import IconWithText from "../IconAndText/IconAndText"
import uuid from "react-uuid"

export default {
  title: "CardContainer",
  component: CardContainer,
  decorators: [
    (Story) => (
      <ThemeProvider theme={muiTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

const Template = (args) => <CardContainer {...args} />

export const Primary = Template.bind({})

Primary.args = {
  data: [
    <Card key={uuid()}>
      <IconWithText num={2} text="replacement heads" color="blue" />
      <IconWithText num={2} text="Brushes" color="green" />
    </Card>,
    <Card key={uuid()}>
      <IconWithText num={2} text="replacement heads" color="blue" />
      <IconWithText num={2} text="Brushes" color="green" />
    </Card>,
    <Card key={uuid()}>
      <IconWithText num={2} text="replacement heads" color="blue" />
      <IconWithText num={2} text="Brushes" color="green" />
    </Card>,
  ],
}
