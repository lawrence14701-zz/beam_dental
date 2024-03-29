import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import useStyles from "./style"
import uuid from "react-uuid"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export default function SimpleTabs(props) {
  const { tabs } = props
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static" elevation={0}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {Object.keys(tabs).map((tabName, i) => (
            <Tab
              className={classes.tab}
              key={uuid()}
              label={tabName}
              {...a11yProps(i)}
            />
          ))}
        </Tabs>
      </AppBar>
      {Object.values(tabs).map((tabValue, i) => (
        <TabPanel key={uuid()} value={value} index={i}>
          <Box p={3}>
            <Typography component="div">{tabValue}</Typography>
          </Box>
        </TabPanel>
      ))}
    </div>
  )
}
