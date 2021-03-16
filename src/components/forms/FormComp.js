import React from 'react'
import { Card, CardContent, TextField, Typography, Grid, makeStyles, Divider } from '@material-ui/core'
import { Form, Formik, useField } from 'formik';
import { CardHeader } from '@material-ui/core';
import * as Yup from 'yup';
import MyTextField from './FormsCompPersonalized/MyTextField'
import MySelectField from './FormsCompPersonalized/MySelectField';
import MyDateTimeField from './FormsCompPersonalized/MyDateTimeField';

const today = new Date();

const INITIAL_VALUES = {

    date: today.toISOString().slice(0, 10),
    timeReceived: (new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString().slice(11, 16)),
    caller: '',
    callerGenerics: '',
    callerPhone: '',
    city: '',
    street: '',
    address: '',
    otherAddress: '',
    notes: '',
    worker: '',

};

const VALIDATION_SCHEMA = Yup.object(
    {
        city: Yup.string().required('Campo Obbligatorio'),
        callerPhone: Yup.number().integer().typeError('Numero non valido').required('Campo Obbligatorio'),
        callerGenerics: Yup.string("formato non valido").required('Campo Obbligatorio'),
        caller: Yup.string("formato non valido").required("Campo obbligatorio"),
        street: Yup.string(),
        address: Yup.string(),
        otherAddress: Yup.string(),
        worker: Yup.string().required('Campo obbligatorio'),
        date: Yup.date("Formato data errato").required("Campo obbligatorio"),
        timeReceived: Yup.string().required("Campo obbligatorio"),

    }
)
.test('at-least-one-property', "Almeno un campo fra Indirizzo, S.P., Altro è obbligatorio", value => 
  !!(value.street || value.address || value.otherAddress)
  
)

const callerList =  ['Carabinieri', 'Vigili del Fuoco', 'Prefettura', 'Privato Cittadino',
        'Regione Lombardia', 'Autorità Giudiziaria', 'Forestale', 'Polizia Locale', 'Polizia di Stato',
        'Guardia di Finanza', 'ARPA', 'Ufficio Tecnico Comunale', 'ASL'];


const MyTextFieldOld = ({ label, placeholder, ...props }) => {
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


function FormComp(props) {
    const classes = useStyles();

const aggiungta = props.selectedTab;


    return (
        <Card style={{ backgroundColor: '#DAE0E7' }} raised>
            <CardHeader title='Dati Generali della segnalazione' style={{ backgroundColor: '#A9B7C7' }} />
            <CardContent style={{ width: 'flex' }}>
                <Formik
                    initialValues={{...INITIAL_VALUES}}
                    onSubmit={values => { console.log(values) }}
                    validationSchema={VALIDATION_SCHEMA}>
                    {({ values, errors }) =>
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


                            <Grid container spacing={2}>
                                {/******DATA SEGNALAZIONE******/}
                                <Grid item xs={6}>
                                    <MyDateTimeField style={{ width: '98%' }} type='date' name='date' label='Data Segnalazione'/>
                                </Grid>
                                <Grid item xs={6}>
                                    {/******ORA SEGNALAZIONE******/}
                                    <MyDateTimeField style={{ width: '98%' }} name="timeReceived" type="time"  label="Ora segnalazione"/>
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

                            {/******SEGNALATORE******/}
                            <Grid container >
                                <Grid item xs={12} lg={4}>
                                    <MySelectField style={{ width: '98%' }} name='caller' listToBeRendered={callerList} label="Segnalatore"/>
                                </Grid>
                                {/******SEGNALATORE NOME******/}
                                <Grid item xs={12} lg={4}>
                                    <MyTextField style={{ width: '98%' }} name="callerGenerics" type="text" label="Generalità" placeholder="Nome, Compagnia, ecc." />
                                </Grid>
                                {/******SEGNALATORE TELEFONO******/}
                                <Grid item xs={12} lg={4}>
                                    <MyTextField style={{ width: '98%' }} name="callerPhone" type="tel" label="Telefono" placeholder="Contatto segnalatore" />
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
                                     {/******COMUNE******/}
                                    <Grid item xs={12} md={6} >
                                        <MyTextField style={{ width: '98%' }} name="city" type="address" label="Comune" placeholder="Città, Comune" />
                                    </Grid>
                                     {/******INDIRIZZO******/}
                                    <Grid item xs={12} md={6} >
                                        <MyTextField style={{ width: '98%' }} name="address" type="address"  label="Indirizzo" placeholder="Via, Piazza, Viale" />
                                    </Grid>
                                     {/******S.P.******/}
                                    <Grid item xs={12} md={6} >
                                        <MyTextField style={{ width: '98%' }} name="street" type="number"  label="Strada Provinciale (solo Nr.)" placeholder="Nr. strada provinciale" />
                                    </Grid>
                                     {/******ALTRO...******/}
                                    <Grid item xs={12} md={6} >
                                        <MyTextField style={{ width: '98%' }} name="otherAddress" type="address" label="Altro" placeholder="Dettagli luogo.." />
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
                                {/******NOTE******/}
                                <Grid item xs={12}>
                                    <MyTextField  style={{ width: '99%' }} name="notes" multiline rows={3} rowsMax={5} label="Note" />                                    
                                </Grid>
                                <Grid item xs={12}>
                                    <MyTextField style={{ width: '99%' }} name="worker" type="text" label="Nome Operatore" placeholder="Nominativo" />
                                </Grid>
                            </Grid>

                        

                            <pre>{JSON.stringify(values, null, 4)}</pre>
                            <pre>{JSON.stringify(errors, null, 4)}</pre>
                        </Form>
                    </>
                    )}

                </Formik>
            </CardContent>
        </Card>

    )
}

export default FormComp
