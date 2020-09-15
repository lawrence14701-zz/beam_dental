import { makeStyles } from "@material-ui/core/styles"

const useStyles = (theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
})

export default makeStyles(useStyles)
