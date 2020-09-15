import { makeStyles } from "@material-ui/core/styles"

const useStyles = (theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
})

export default makeStyles(useStyles)
