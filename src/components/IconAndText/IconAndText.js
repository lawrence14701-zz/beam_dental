import React from "react"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import useStyles from "./style"
import cx from "classnames"

const IconAndText = (props) => {
  const classes = useStyles()
  const { text, color, num } = props
  return (
    <div>
      <FiberManualRecordIcon
        className={cx(
          color && {
            [classes.blue]: color === "blue",
            [classes.green]: color === "green",
            [classes.pink]: color === "pink",
          }
        )}
      />
      <span>{num}</span>
      <span>{text}</span>
    </div>
  )
}

export default IconAndText
