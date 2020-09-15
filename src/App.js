import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import muiTheme from "./Theme/theme"
import Routes from "./routes/routes"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  )
}

export default App
