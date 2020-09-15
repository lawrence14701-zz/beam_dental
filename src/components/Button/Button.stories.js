import React from "react"
import Button from "./Button"

export default {
  title: "Button",
  component: Button,
  args: { variant: "contained", children: "Button" },
  argTypes: { onClick: { action: "clicked" } },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
export const Secondary = Template.bind({})

Primary.args = {
  color: "primary",
  type: "error",
  text: "failed",
}

Secondary.args = {
  color: "secondary",
  type: "success",
  text: "good job",
}
