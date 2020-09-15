import React, { createContext, useEffect, useReducer } from "react"
import { fetchData } from "../api"
import { familyReducer } from "../reducers/family"

export const FamilyContext = createContext()

const ContextProvider = (props) => {
  const [data, dispatch] = useReducer(familyReducer, [])
  const returnData = async () => {
    const result = await fetchData()
    dispatch({ type: "SET_DATA", result: result })
  }
  useEffect(() => {
    returnData()
  }, [])
  return (
    <FamilyContext.Provider value={{ data, dispatch }}>
      {props.children}
    </FamilyContext.Provider>
  )
}

export default ContextProvider
