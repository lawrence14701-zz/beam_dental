import { makeStyles } from "@material-ui/core/styles"

const useStyles = (theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    left: "50%",
    width: "75%",
    height: "auto",
    transform: "translate(-50%, 10px)",
  },
  container: {
    height: "100px",
  },
})

export default makeStyles(useStyles)
