import React from 'react'
import { Card, CardContent, TextField, Typography, MenuItem, Select, Grid, makeStyles, Divider } from '@material-ui/core'
import { Form, Formik, Field, useField, FieldArray, } from 'formik'
import { FormControlLabel } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';

const today = new Date();
console.log(today)

const initialValues = {

    date: today.toISOString().slice(0, 10),
    timeReceived: (new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString().slice(11, 16)),
    caller: ['Carabinieri', 'Vigili del Fuoco', 'Prefettura', 'Privato Cittadino',
        'Regione Lombardia', 'Autorità Giudiziaria', 'Forestale', 'Polizia Locale', 'Polizia di Stato',
        'Guardia di Finanza', 'ARPA', 'Ufficio Tecnico Comunale', 'ASL'],
    callerGenerics: '',
    callerPhone: '',
    city: '',
    street: '',
    address: '',
    otherAddress: '',
    notes: '',
    worker: '',

};
const MyTextField = ({ label, placeholder, ...props }) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : ''

    return (
        <TextField placeholder={placeholder} {...field} helperText={errorText} />
    )
}

const useStyles = makeStyles((theme) => ({
    root: {

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    dividerFullWidth: {
        margin: `5px 0 0 ${theme.spacing(2)}px`,
        textAlign: 'right'
    },
    dividerInset: {
        margin: `5px 0 0 ${theme.spacing(9)}px`,

    },
    textField: {
        width: '100%',
        margin: 5000,
    },
}));


function FormComp() {
    const classes = useStyles();
    return (
        <Card style={{ backgroundColor: '#DAE0E7' }} raised>
            <CardHeader title='Dati Generali della segnalazione' style={{ backgroundColor: '#A9B7C7' }} />
            <CardContent style={{ width: 'flex' }}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={() => { }}>
                    {({ values }) =>
                    (<>
                        <Form className={classes.root}>

                            <Divider />
                            <Typography
                                className={classes.dividerFullWidth}
                                color="textSecondary"
                                display="block"
                                variant="caption"
                            >
                                DATA E ORA
                            </Typography>


                            <Grid container >
                                {/*DATA SEGNALAZIONE*/}
                                <Grid item xs={6}>
                                    <Field style={{ width: '98%' }} name="date" type="date" as={TextField} label="Data segnalazione" InputLabelProps={{
                                        shrink: true,
                                    }} variant="outlined" />
                                </Grid>
                                <Grid item xs={6}>
                                    {/*ORA SEGNALAZIONE*/}
                                    <Field style={{ width: '98%' }} name="timeReceived" type="time" as={TextField} label="Ora segnalazione" InputLabelProps={{
                                        shrink: true,
                                    }} variant="outlined" />
                                </Grid>

                            </Grid>

                            <Divider />
                            <Typography
                                className={classes.dividerFullWidth}
                                color="textSecondary"
                                display="block"
                                variant="caption"
                            >
                                INFO SEGNALATORE
                            </Typography>

                            {/*SEGNALATORE*/}
                            <Grid container >
                                <Grid item xs={12} lg={4}>
                                    <Field style={{ width: '98%' }} defaultValue="Carabinieri" name="caller" as={TextField} type="text" multiple={false} select label="Segnalatore" variant="outlined" InputLabelProps={{
                                        shrink: true,
                                    }}>

                                        {initialValues.caller.map((singleCaller, index) => {
                                            return (

                                                <MenuItem key={index} value={singleCaller} placeholder>{singleCaller}
                                                </MenuItem>

                                            )
                                        })}
                                    </Field>
                                </Grid>
                                <Grid item xs={12} lg={4}>
                                    <Field style={{ width: '98%' }} name="callerGenerics" as={TextField} type="text" variant="outlined" label="Generalità" placeholder="Nome, Compagnia, ecc." />
                                </Grid>
                                <Grid item xs={12} lg={4}>
                                    <Field style={{ width: '98%' }} name="callerPhone" as={TextField} type="tel" variant="outlined" label="Telefono" placeholder="Contatto segnalatore" />
                                </Grid>

                            </Grid>

                            <Divider />
                            <Typography
                                className={classes.dividerFullWidth}
                                color="textSecondary"
                                display="block"
                                variant="caption"
                            >
                                LUOGO
                            </Typography>

                            <div >
                                <Grid container >
                                    <Grid item xs={12} md={6} >
                                        <Field style={{ width: '98%' }} name="city" as={TextField} type="address" variant="outlined" label="Comune" placeholder="Città, Comune" />
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <Field style={{ width: '98%' }} name="address" as={TextField} type="address" variant="outlined" label="Indirizzo" placeholder="Via, Piazza, Viale" />
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <Field style={{ width: '98%' }} name="street" as={TextField} type="number" variant="outlined" label="Strada Provinciale (solo Nr.)" placeholder="Nr. strada provinciale" />
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <Field style={{ width: '98%' }} name="otherAddress" as={TextField} type="address" variant="outlined" label="Altro" placeholder="Dettagli luogo.." />
                                    </Grid>
                                </Grid>
                            </div>

                            <Divider />
                            <Typography
                                className={classes.dividerFullWidth}
                                color="textSecondary"
                                display="block"
                                variant="caption"
                            >
                                NOTE E NOMINATIVO
                            </Typography>

                            <Grid container>
                                {/*NOTE*/}
                                <Grid item xs={12}>
                                    <Field style={{ width: '99%' }} name="notes" as={TextField} multiline rows={3} rowsMax={5} variant="outlined" label="Note" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field style={{ width: '99%' }} name="worker" as={TextField} type="text" variant="outlined" label="Nome Operatore" placeholder="Nominativo" />
                                </Grid>
                            </Grid>

                            <pre>{JSON.stringify(values, null, 4)}</pre>
                        </Form>
                    </>
                    )}

                </Formik>
            </CardContent>
        </Card>

    )
}

export default FormComp
