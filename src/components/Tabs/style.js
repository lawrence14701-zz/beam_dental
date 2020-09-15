import { makeStyles } from "@material-ui/core/styles"

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
})

export default makeStyles(useStyles)
