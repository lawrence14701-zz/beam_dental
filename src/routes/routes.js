import React from "react"
import { Switch } from "react-router-dom"
import Login from "../screens/LoginScreen/Login"
import PrivateRoute from "./privateroute"
import Auth from "../global/auth"
import Edit from "../screens/EditScreen/Edit"

const Routes = () => {
  return (
    <Auth>
      <Switch>
        <PrivateRoute component={Login} exact path="/" />
        <PrivateRoute component={Edit} exact path="/shipping" />
      </Switch>
    </Auth>
  )
}
export default Routes
