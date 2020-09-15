import React, { createContext } from "react"

export const ManagerContext = createContext()

const ContextProvider = (props) => {
  const data = {
    email: "manager@gmail.com",
    password: "password",
  }

  return (
    <ManagerContext.Provider value={{ data }}>
      {props.children}
    </ManagerContext.Provider>
  )
}

export default ContextProvider
