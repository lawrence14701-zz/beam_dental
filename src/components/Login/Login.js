import React, { useState, useContext } from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import useStyles from "./style"
import { AuthContext } from "../../global/auth"

const Login = (props) => {
  const { login } = useContext(AuthContext)
  const handleClick = () => {
    setClicked(true)
    setTimeout(() => {
      login()
    }, 1000)
  }
  const { email, password } = props
  const [clicked, setClicked] = useState(false)
  const classes = useStyles()
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          value={clicked ? email : ""}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          value={clicked ? password : ""}
        />
        <Button
          onClick={() => handleClick()}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
      </div>
    </Container>
  )
}

export default Login
