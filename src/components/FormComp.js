import React from 'react'
import { Card, CardContent, TextField, MenuItem } from '@material-ui/core'
import { Form, Formik, Field, useField } from 'formik'
import { FormControlLabel } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';

const today = new Date();
console.log(today)

const initialValues = {

    date: today.toISOString().slice(0,10),
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







function FormComp() {
    return (
        <Card style={{backgroundColor:'#DAE0E7'}} raised>
            <CardHeader title='Dati Generali della segnalazione' style={{backgroundColor:'#A9B7C7'}}/>
            <CardContent>
                <Formik
                    initialValues={initialValues}
                    onSubmit={() => { }}>
                    {({ values }) =>
                    (<>
                        <Form>
                            <Field style={{input: "#2EFF22"}} name="date" type="date" as={TextField}  label="Data segnalazione" InputLabelProps={{
                                shrink: true,
                            }} variant="outlined"/>
                            <Field name="timeReceived" type="time" as={TextField} label="Ora segnalazione" InputLabelProps={{
                                shrink: true,
                            }} variant="outlined"/>
                            <Field name="caller" as={TextField} type="select-multiple" multiple={false} select label="Segnalatore">
                                <MenuItem  value={initialValues.caller[0]}>{initialValues.caller[0]}</MenuItem>
                                <MenuItem  value={initialValues.caller[1]}>{initialValues.caller[1]}</MenuItem>
                                <MenuItem value={initialValues.caller[2]}>{initialValues.caller[2]}</MenuItem>
                                <MenuItem  value={initialValues.caller[3]}>{initialValues.caller[3]}</MenuItem>
                                <MenuItem  value={initialValues.caller[4]}>{initialValues.caller[4]}</MenuItem>
                                <MenuItem  value={initialValues.caller[5]}>{initialValues.caller[5]}</MenuItem>
                                <MenuItem  value={initialValues.caller[6]}>{initialValues.caller[6]}</MenuItem>
                                <MenuItem  value={initialValues.caller[7]}>{initialValues.caller[7]}</MenuItem>
                                <MenuItem  value={initialValues.caller[8]}>{initialValues.caller[8]}</MenuItem>
                                <MenuItem  value={initialValues.caller[9]}>{initialValues.caller[9]}</MenuItem>
                                <MenuItem  value={initialValues.caller[10]}>{initialValues.caller[10]}</MenuItem>
                                <MenuItem  value={initialValues.caller[11]}>{initialValues.caller[11]}</MenuItem>
                                <MenuItem value={initialValues.caller[12]}>{initialValues.caller[12]}</MenuItem>
                            </Field>
                            <Field name="callerGenerics" />
                            <Field name="callerPhone" />
                            <Field name="city" />
                            <Field name="street" />
                            <Field name="address" />
                            <Field name="otherAddress" />
                            <Field name="notes" as={TextField} multiline rows={3} rewsMaz={5} variant="outlined"/>
                            <Field name="worker" />


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
