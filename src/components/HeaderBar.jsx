import React from 'react'
import { AppBar, Toolbar, Typography, Hidden } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import logo from './NO BG logo.png'



const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: "none",
        backgroundColor: "#0D1B2A",
        color: "#E0E1DD",
        fontSize: '250%'
    }
}));

function HeaderBar() {

    const classes = useStyles();

    return (

        <AppBar position='static' >
            <Toolbar className={classes.root}>
                <img src={logo} width="40" height="60" />

                <Hidden smDown>
                    <Typography variant='h3' style={{ fontWeight: 'bold' }}>
                        &emsp; Provincia di Bergamo
                    </Typography>
                </Hidden>

                <Hidden mdUp xsDown>
                    <Typography variant='h3' style={{ fontWeight: 'bold' }}>
                        &emsp; Prov. di BG
                    </Typography>
                </Hidden>




            </Toolbar>


        </AppBar>



    )
}

export default HeaderBar
