import React from "react"
import { Switch } from "react-router-dom"
import Shipping from "../screens/ShippingScreen/Shipping"
import Login from "../screens/LoginScreen/Login"
import PrivateRoute from "./privateroute"
import Auth from "../global/auth"

const Routes = () => {
  return (
    <Auth>
      <Switch>
        <PrivateRoute component={Login} exact path="/" />
        <PrivateRoute component={Shipping} exact path="/shipping" />
      </Switch>
    </Auth>
  )
}
export default Routes
