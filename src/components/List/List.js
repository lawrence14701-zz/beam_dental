import React from 'react';
import MuiList from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import useStyles from './style';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const List = (props) => {
    const {title, labels} = props
    const classes = useStyles()
    return (
        <>
            <MuiList subheader={<ListSubheader>{title}</ListSubheader>} className={classes.root}>
                {labels.map(label => (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                    <ListItemText
                        primary={label}
                    />
                    </ListItem>
                ))}
            </MuiList>
        </>
        )
}

export default List