import React, { useState } from "react"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import useStyles from "./style"
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function CustomizedSnackbars(props) {
  const { isOpen, text, type } = props
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  if (isOpen === true && open === false) {
    setOpen(true)
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }
  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
          {text}
        </Alert>
      </Snackbar>
    </div>
  )
}
