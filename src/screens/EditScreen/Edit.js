import React, { useContext, useEffect, useState } from "react"
import CrudTable from "../../components/Table/Table"
import { FamilyContext } from "../../global/family"
import Spinner from "../../components/Spinner/Spinner"
import Button from "../../components/Button/Button"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import { styled } from "@material-ui/core/styles"
import Shipping from "../ShippingScreen/Shipping"

const Space = styled(Box)({
  padding: "30px",
})

const Edit = () => {
  const { data, dispatch } = useContext(FamilyContext)
  const [clicked, setClicked] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (data.length === 0) {
      //loading
    } else {
      const timer = setTimeout(() => {
        setLoading(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [data])

  const tableData = {
    columns: [
      { title: "ID", field: "id" },
      { title: "Name", field: "name" },
      { title: "Brush Color", field: "brush_color", type: "string" },
    ],
    data: data.familyMembers,
  }

  const screenType = () => {
    if (clicked) {
      return <Shipping data={data} dispatch={dispatch} />
    }
    if (!clicked) {
      return (
        <div>
          <Space />
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <CrudTable
                dispatch={dispatch}
                type="CRUD"
                title="Star Wars Family"
                data={tableData}
              />
            </Grid>
            <Grid item>
              <Button
                onClick={() => setClicked(true)}
                variant="outlined"
                color="secondary"
              >
                Continue to shipping
              </Button>
            </Grid>
          </Grid>
        </div>
      )
    }
  }

  return <>{!loading ? <Spinner /> : screenType()}</>
}

export default Edit
