import React, { useEffect, useState } from "react"
import Table from "../../components/Table/Table"
import Button from "../../components/Button/Button"
import Spinner from "../../components/Spinner/Spinner"
import Tabs from "../../components/Tabs/Tabs"
import Refill from "./Refill"
import Starter from "./Starter"

const ShippingScreen = (props) => {
  const { data, dispatch } = props
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

  const actionOne = {
    node: <Button color="primary">Starter</Button>,
    name: "add starter",
    hook: { type: "SET_STARTER" },
  }
  const actionTwo = {
    node: <Button color="secondary">Refill</Button>,
    name: "add refill",
    hook: { type: "SET_REFILL" },
  }

  return (
    <>
      {!loading ? (
        <Spinner />
      ) : (
        <div>
          <Table
            title="Family Members"
            data={tableData}
            actionOne={actionOne}
            actionTwo={actionTwo}
            dispatch={dispatch}
          />
          <Tabs
            tabs={{
              "Starter Boxes": <Starter {...data} />,
              "Refill Boxes": <Refill {...data} />,
            }}
          />
        </div>
      )}
    </>
  )
}

export default ShippingScreen
