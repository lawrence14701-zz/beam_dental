import MaterialUIButton from "@material-ui/core/Button"
import React, { useState } from "react"

const Button = (props) => {
  const { variant, children, color } = props
  const [disable, setDisable] = useState(false)
  const handleClick = () => {
    setDisable(true)
  }
  return (
    <>
      {disable === true ? (
        <MaterialUIButton variant="contained" disabled>
          {children}
        </MaterialUIButton>
      ) : (
        <MaterialUIButton
          color={color}
          variant={variant}
          onClick={() => handleClick()}
        >
          {children}
        </MaterialUIButton>
      )}
    </>
  )
}

export default Button
