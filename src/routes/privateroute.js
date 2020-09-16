import React, { useContext } from "react"
import { Route } from "react-router-dom"
import { AuthContext } from "../global/auth"
import Login from "../screens/LoginScreen/Login"
import Edit from "../screens/EditScreen/Edit"

const PrivateRoute = ({ ...otherProps }) => {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <Route
      {...otherProps}
      render={() =>
        isAuthenticated ? (
          <Route component={Edit} to="/shipping" />
        ) : (
          <Route component={Login} to="./" />
        )
      }
    />
  )
}

export default PrivateRoute
