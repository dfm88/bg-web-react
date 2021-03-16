import React from 'react'
import { AppBar, colors, Toolbar, Typography, CardMedia } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import CronologyAccordion from './CronologyAccordion';
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
    console.log(logo)

    return (

        <AppBar position='static' >
            <Toolbar className={classes.root}>
                <img src={logo} width="40" height="60" />

                <Typography variant='h3' style={{ fontWeight: 'bold' }}>

                    &emsp; Provincia di BG
                </Typography>


            </Toolbar>


        </AppBar>



    )
}

export default HeaderBar
