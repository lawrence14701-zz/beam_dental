import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  blue: {
    color: theme.palette.common.blue,
  },
  pink: {
    color: theme.palette.common.pink,
  },
  green: {
    color: theme.palette.common.green,
  },
}))

export default useStyles
