import { Divider, IconButton, makeStyles, Typography } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Badge } from '@material-ui/core';
import React from 'react';
import SideDrawer from '../SideDrawer/SideDrawer';

const useStyles = makeStyles ((theme) =>({
    title: {
        flexGrow: 1,
    },
    tagline: {
        fontSize: 20,
        justifyContent: 'center',
        fontFamily: 'Arial',
    },
}));

const Header = () => {
   const classes = useStyles();

    return (
        <>
            <Toolbar>
                <SideDrawer>
                <IconButton color="inherit">
                    <MenuIcon/>
                        </IconButton >
                </SideDrawer>
                        <Typography variant="h6" className={classes.title}>Fran
                        </Typography>

                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <AccountCircleIcon/>
                        </IconButton>
                
            </Toolbar>

            <Divider/>

            <Toolbar className={classes.tagline}>Abejitas locas</Toolbar>
        </>
    )
}

export default Header
