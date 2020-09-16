import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import uuid from "react-uuid"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}))

export default function TitlebarGridList(props) {
  const { data } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList}>
        <GridListTile
          key="Subheader"
          cols={2}
          style={{ height: "auto" }}
        ></GridListTile>
        {data.map((ele) => (
          <GridListTile key={uuid}>{ele}</GridListTile>
        ))}
      </GridList>
    </div>
  )
}
