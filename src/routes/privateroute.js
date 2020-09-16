import React, { useContext } from "react"
import { Route } from "react-router-dom"
import { AuthContext } from "../global/auth"
import Login from "../screens/LoginScreen/Login"
import Edit from "../screens/EditScreen/Edit"

// eslint-disable-next-line no-unused-vars
const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <Route
      {...otherProps}
      render={() =>
        isAuthenticated ? (
          <Route component={Edit} path="/shipping" />
        ) : (
          <Route component={Login} to="/" />
        )
      }
    />
  )
}

export default PrivateRoute
