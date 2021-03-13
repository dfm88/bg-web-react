import React from 'react'
import { AppBar, colors, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import CronologyAccordion from './CronologyAccordion';

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
                <Typography variant='h3'>
                    TITOLO
                </Typography>


            </Toolbar>


        </AppBar>



    )
}

export default HeaderBar
