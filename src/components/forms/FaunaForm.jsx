import React from 'react'
import { Card, CardContent, Checkbox, Radio, Grid } from '@material-ui/core'
import { Form, Formik, Field, useField } from 'formik'
import { FormControlLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';


const initialValues = {
    tipoIntervento: '',
    specie: '',
    condizioni: ['Ferito', 'Vivo', 'Morto', 'Disorientato'],
    

};

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
        <Card>
            <CardContent>
                <Formik
                    initialValues={initialValues}
                    onSubmit={() => { }}>
                    {({ values }) =>
                    (
                        <Form>
                            <Grid container spacing={3}>
                                <Grid item md={4} xs={12} >
                                    <div>
                                        <MyRadio name="tipoIntervento" value='Fauna selvatica' type="radio" label="Fauna selvatica" />
                                    </div>
                                    <div>
                                        <MyRadio name="tipoIntervento" value='Emergenza ambientale' type="radio" label="Emergenza ambientale" />
                                    </div>

                                </Grid>

                                <Grid item md={4} xs={12}>
                                    <Field as={TextField}></Field>
                                </Grid>

                                <Grid item md={4} xs={12}>
                                    <Field as={TextField} select></Field>
                                </Grid>

                            </Grid>


                            <pre>{JSON.stringify(values, null, 4)}</pre>
                        </Form>

                    )}

                </Formik>
            </CardContent>
        </Card>

    )
}

export default FaunaForm
