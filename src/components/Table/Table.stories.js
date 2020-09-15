import React from "react"
import Table from "./Table"
import { ThemeProvider } from "@material-ui/styles"
import muiTheme from "../../Theme/theme"
import Button from "../Button/Button"

export default {
  title: "Table",
  component: Table,
  args: {
    data: {
      columns: [
        { title: "ID", field: "id" },
        { title: "Name", field: "name" },
        { title: "Brush Color", field: "brush_color", type: "string" },
      ],
      data: [
        { name: "Padme", brush_color: "blue", id: 2 },
        {
          name: "Luke",
          brush_color: "green",
          id: 3,
        },
      ],
    },
  },
  argTypes: { onClick: { action: "clicked" } },
  decorators: [
    (Story) => (
      <ThemeProvider theme={muiTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

const Template = (args) => <Table {...args} />

export const ButtonTable = Template.bind({})
export const Editable = Template.bind({})

ButtonTable.args = {
  title: "Family Members",
  actionOne: {
    node: <Button color="primary">Starter</Button>,
    name: "starter",
    hook: { type: "SET_STARTER" },
  },
  actionTwo: {
    node: <Button color="secondary">Refill</Button>,
    name: "refill",
    hook: { type: "SET_REFILL" },
  },
}

Editable.args = {
  title: "Family Members",
}
