import React from "react"
import { Route, Switch } from "react-router-dom"
import Shipping from "../screens/ShippingScreen/Shipping"

const Routes = () => {
  return (
    <Switch>
      <Route component={Shipping} exact path="/shipping" />
    </Switch>
  )
}
export default Routes
