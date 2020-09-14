import Box  from '@material-ui/core/Box';
import MuiCard  from '@material-ui/core/Card';
import React from 'react';
import useStyles from './style';


const Card = (props) => {
    const {children} = props
    const classes = useStyles()
    return (
        <MuiCard className={classes.root}>
            <Box component="div" m={1}>{children}</Box>
        </MuiCard>
    )
}

export default Card