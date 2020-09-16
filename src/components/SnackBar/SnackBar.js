import React, { useEffect } from "react"
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"

export default function SimpleSnackbar(props) {
  const { isOpen, text, type } = props
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        onClose={handleClose}
        message={text}
        action={
          <React.Fragment>
            <Button color={type} size="small" onClick={handleClose}>
              {type}
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  )
}
