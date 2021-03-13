import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => (
    {
        root: {
            boxShadow: "none",
            backgroundColor: "#273654",
            color: "#E0E1DD",
            fontSize: '150%'
        }


    })
);


function CronologyAccordion() {



    const classes = useStyles();
    console.log(classes.root)

    return (
        <Accordion className={classes.root}>
            <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.root} />}>
                <Typography variant='h5'>
                    Storico
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h5'>
                    aaa
                </Typography>

            </AccordionDetails>
        </Accordion>
    )
}

export default CronologyAccordion
