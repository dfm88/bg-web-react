import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, makeStyles } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
        tableLayout: 'inherit'
    },
    root: {


        '& .MuiTableCell-head': {
            color: '#eff0eb',
            fontWeight: 'bold',
            backgroundColor: '#445f94',
        },
        '& .MuiTableCell-body': {
            color: '#e2e3de',

            backgroundColor: '#687a9e',
        },
        '& .MuiSvgIcon-root': {
            color: '#f3f5ed',

        },
    },

}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function CronologyTable() {
    const classes = useStyles();
    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow >
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="center">Calories</TableCell>
                        <TableCell align="center">Fat&nbsp;(g)</TableCell>
                        <TableCell align="center">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="center">Protein&nbsp;(g)</TableCell>
                        <TableCell align="center">Scarica</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.calories}</TableCell>
                            <TableCell align="center">{row.fat}</TableCell>
                            <TableCell align="center">{row.carbs}</TableCell>
                            <TableCell align="center">{row.protein}</TableCell>
                            <TableCell align="center">
                                <IconButton>
                                    <GetAppIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CronologyTable
