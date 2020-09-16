import React from "react"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import useStyles from "./style"
import { styled } from "@material-ui/core/styles"
import cx from "classnames"
import Box from "@material-ui/core/Box"

const Space = styled(Box)({
  padding: "2.5px",
})

const IconAndText = (props) => {
  const classes = useStyles()
  const { text, color, num } = props
  return (
    <div className={classes.root}>
      <FiberManualRecordIcon
        className={cx(
          color && {
            [classes.blue]: color === "blue",
            [classes.green]: color === "green",
            [classes.pink]: color === "pink",
          }
        )}
      />
      <Space />
      <span>{num}</span>
      <Space />
      <Space />
      <span>{text}</span>
    </div>
  )
}

export default IconAndText
