import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import muiTheme from "./Theme/theme"
import Routes from "./routes/routes"

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  )
}

export default App
