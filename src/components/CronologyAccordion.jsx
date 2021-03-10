import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: "none",
        backgroundColor: "#273654",
        color: "#E0E1DD",
        fontSize: '150%'
    }
}));


function CronologyAccordion() {



    const classes = useStyles();

    return (
        <Accordion className={classes.root}>
            <AccordionSummary>
                Accordion 1
            </AccordionSummary>
            <AccordionDetails>
                aaa
            </AccordionDetails>
        </Accordion>
    )
}

export default CronologyAccordion
