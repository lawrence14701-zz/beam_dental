import React, { useState } from "react"

export const AuthContext = React.createContext({})

export default function Auth({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => {
    return setIsAuthenticated(true)
  }

  const logout = () => setIsAuthenticated(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
