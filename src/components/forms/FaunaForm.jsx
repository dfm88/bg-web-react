import React from 'react'
import { Card, CardContent, Radio, Grid, Hidden } from '@material-ui/core'
import { Form, Formik, useField, useFormikContext } from 'formik'
import { FormControlLabel } from '@material-ui/core';
import * as Yup from 'yup';
import MySubmitButton from './FormsCompPersonalized/MySubmitButton';
import MyTextFieldComp from './FormsCompPersonalized/MyTextField';
import MySelectField from './FormsCompPersonalized/MySelectField';


const INITIAL_VALUES = {
    tipoIntervento: '',
    specie: '',
    condizioni: '',
};

const VALIDATION_SCHEMA = Yup.object(
    {
        tipoIntervento: Yup.string().required('Campo Obbligatorio'),
        specie: Yup.string().required('Campo Obbligatorio'),
        condizioni: Yup.string().required('Campo Obbligatorio').oneOf(['Ferito', 'Vivo', 'Morto', 'Disorientato']),
    }
)

const condizioniAnimale = ['Ferito', 'Vivo', 'Morto', 'Disorientato'];

const MyRadio = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    //'field' è una props di Formik, per vederne i metodi scrivo field.(ctrl+space), 
    //passo tutte queste props in una volta
    //così come per 'meta'
    return (
        <FormControlLabel {...field} control={<Radio color='default' />} label={label} />
    )
}








function FaunaForm() {



    return (
        <Card style={{ backgroundColor: '#DAE0E7' }} raised>
            <CardContent style={{ width: 'flex' }}>
                <Formik
                    initialValues={INITIAL_VALUES}
                    validationSchema={VALIDATION_SCHEMA}
                    onSubmit={(values) => { console.log(values) }}
                >
                    {({ values, errors, isValid, meta }) =>

                    (
                        <Form>

                            <Grid container spacing={3}  >
                                <Grid item md={4} xs={12} >
                                    <div>
                                        <MyRadio name="tipoIntervento" value='Fauna selvatica' type="radio" label="Fauna selvatica" />
                                    </div>
                                    <div>
                                        <MyRadio name="tipoIntervento" value='Emergenza ambientale' type="radio" label="Emergenza ambientale" />
                                    </div>
                                </Grid>

                                <Grid item md={4} xs={12} style={{ alignSelf: 'center' }}>
                                    <MyTextFieldComp style={{ width: '98%', alignSelf: 'center' }} name="specie" label="Specie" />

                                </Grid>

                                <Grid item md={4} xs={12} style={{ alignSelf: 'center' }}>
                                    <MySelectField style={{ width: '98%', alignSelf: 'center' }} listToBeRendered={condizioniAnimale} name="condizioni" label="Condizioni" />
                                </Grid>

                                <Hidden smDown>
                                    <Grid item md={10} xs={false}>

                                    </Grid>
                                </Hidden>

                                <Grid item md={2} xs={12}>
                                    <MySubmitButton >
                                        Invia
                                    </MySubmitButton>
                                </Grid>

                            </Grid>


                            <pre>{JSON.stringify(values, null, 4)}</pre>
                            <pre>{JSON.stringify(errors, null, 4)}</pre>
                            <pre>{JSON.stringify(meta, null, 4)}</pre>


                        </Form>

                    )

                    }



                </Formik>
            </CardContent>
        </Card>

    )
}

export default FaunaForm
