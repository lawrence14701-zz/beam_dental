import React, { useState } from "react"
import MaterialTable from "material-table"
import { forwardRef } from "react"
import AddBox from "@material-ui/icons/AddBox"
import ArrowDownward from "@material-ui/icons/ArrowDownward"
import Check from "@material-ui/icons/Check"
import ChevronLeft from "@material-ui/icons/ChevronLeft"
import ChevronRight from "@material-ui/icons/ChevronRight"
import Clear from "@material-ui/icons/Clear"
import DeleteOutline from "@material-ui/icons/DeleteOutline"
import Edit from "@material-ui/icons/Edit"
import FilterList from "@material-ui/icons/FilterList"
import FirstPage from "@material-ui/icons/FirstPage"
import LastPage from "@material-ui/icons/LastPage"
import Remove from "@material-ui/icons/Remove"
import SaveAlt from "@material-ui/icons/SaveAlt"
import Search from "@material-ui/icons/Search"
import ViewColumn from "@material-ui/icons/ViewColumn"
import useStyles from "./style"
import Grid from "@material-ui/core/Grid"
import SnackBar from "../SnackBar/SnackBar"
import uuid from "react-uuid"
import MUIButton from "@material-ui/core/Button"
import Button from "../Button/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
}

export default function Table(props) {
  const classes = useStyles()
  const { data, title, actionOne, actionTwo, dispatch, type } = props
  const [state, setState] = useState(data)
  const [saveNodes, setSaveNodes] = useState([])
  const [actionOneNodes, setOneNodes] = useState([])
  const [actionTwoNodes, setTwoNodes] = useState([])

  const handleClick = () => {
    dispatch({ type: "SAVE_DATA", state: state })
    saveNodes.push(
      React.createElement(SnackBar, {
        type: "primary",
        text: "Successfully Saved",
        isOpen: true,
      })
    )
    setSaveNodes(saveNodes)
  }

  const editable = {
    onRowAdd: (newData) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve()
          setState((prevState) => {
            const data = [...prevState.data]
            data.push(newData)
            return { ...prevState, data }
          })
        }, 600)
      }),
    onRowUpdate: (newData, oldData) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve()
          if (oldData) {
            setState((prevState) => {
              const data = [...prevState.data]
              data[data.indexOf(oldData)] = newData
              return { ...prevState, data }
            })
          }
        }, 600)
      }),
    onRowDelete: (oldData) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve()
          setState((prevState) => {
            const data = [...prevState.data]
            data.splice(data.indexOf(oldData), 1)
            return { ...prevState, data }
          })
        }, 600)
      }),
  }
  return (
    <div className={classes.root}>
      <MaterialTable
        icons={tableIcons}
        title={title}
        columns={state.columns}
        data={state.data}
        editable={!(actionOne && actionTwo) ? editable : null}
        actions={
          actionOne && actionTwo
            ? [
                {
                  icon: actionOne.name,
                  onClick: (event, rowData) => {
                    dispatch({ type: actionOne.hook.type, rowData })
                    actionOneNodes.push(
                      React.createElement(SnackBar, {
                        type: "primary",
                        text: actionOne.snackbar,
                        isOpen: true,
                      })
                    )
                    setOneNodes(actionOneNodes)
                  },
                },
                {
                  icon: actionTwo.name,
                  onClick: (event, rowData) => {
                    dispatch({ type: actionTwo.hook.type, rowData })
                    actionTwoNodes.push(
                      React.createElement(SnackBar, {
                        type: "secondary",
                        text: actionTwo.snackbar,
                        isOpen: true,
                      })
                    )
                    setTwoNodes(actionOneNodes)
                  },
                },
              ]
            : null
        }
        components={
          actionOne && actionTwo
            ? {
                Action: (props) => {
                  const { action } = props
                  if (action.icon === actionOne.name) {
                    return (
                      <ButtonGroup
                        onClick={(event) => props.action.onClick(event, props.data)}
                      >
                        <Button variant="outlined" color={actionOne.color}>
                          {actionOne.name}
                        </Button>
                      </ButtonGroup>
                    )
                  }
                  if (action.icon === actionTwo.name) {
                    return (
                      <ButtonGroup
                        onClick={(event) => props.action.onClick(event, props.data)}
                      >
                        <Button variant="outlined" color={actionTwo.color}>
                          {actionTwo.name}
                        </Button>
                      </ButtonGroup>
                    )
                  }
                },
              }
            : null
        }
      />
      {type === "CRUD" ? (
        <>
          <Grid className={classes.container} container alignContent="center">
            <MUIButton
              className={classes.button}
              variant="outlined"
              color="primary"
              onClick={() => handleClick()}
            >
              Save
            </MUIButton>
          </Grid>
          {saveNodes.length > 0
            ? saveNodes.map((node) => {
                return <div key={uuid()}>{node}</div>
              })
            : null}
        </>
      ) : null}
      {actionOneNodes.length > 0
        ? actionOneNodes.map((node) => {
            return <div key={uuid()}>{node}</div>
          })
        : null}
      {actionTwoNodes.length > 0
        ? actionTwoNodes.map((node) => {
            return <div key={uuid()}>{node}</div>
          })
        : null}
    </div>
  )
}
