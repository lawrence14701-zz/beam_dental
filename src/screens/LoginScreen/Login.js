import React, { useContext, useState, useEffect } from "react"
import Login from "../../components/Login/Login"
import { ManagerContext } from "../../global/manager"
import Spinner from "../../components/Spinner/Spinner"

const LoginScreen = () => {
  const { data } = useContext(ManagerContext)
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
  return !loading ? (
    <Spinner />
  ) : (
    <div>
      <Login {...data} />
    </div>
  )
}

export default LoginScreen
