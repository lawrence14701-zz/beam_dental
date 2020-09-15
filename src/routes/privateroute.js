import React, { useContext } from "react"
import { Route } from "react-router-dom"
import { AuthContext } from "../global/auth"

const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <Route
      {...otherProps}
      render={(props) =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          //   <Redirect
          //     from="/"
          //     to={otherProps.redirectTo ? otherProps.redirectTo : "/shipping"}
          //   />
          (window.location.href = "http://localhost:3000/shipping")
        )
      }
    />
  )
}

export default PrivateRoute
