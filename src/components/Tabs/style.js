import { makeStyles } from "@material-ui/core/styles"

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    color: theme.palette.common.blue,
  },
  selected: {
    background: "#888888",
  },
})

export default makeStyles(useStyles)
