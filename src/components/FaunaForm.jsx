import React from 'react'
import { Card, CardContent, Checkbox, Radio } from '@material-ui/core'
import { Form, Formik, Field, useField } from 'formik'
import { FormControlLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';


const initialValues = {
    tipoIntervento : '',
    specie : '',
    condizioni : ['Ferito', 'Vivo', 'Morto', 'Disorientato'],
    caller : ['Carabinieri','Vigili del Fuoco','Prefettura','Privato Cittadino',
    'Regione Lombardia','Autorità Giudiziaria','Forestale','Polizia Locale','Polizia di Stato',
    'Guardia di Finanza','ARPA', 'Ufficio Tecnico Comunale', 'ASL'],
        
};

const MyRadio = ({label, ...props}) => {
    const [field, meta] = useField(props);
    //'field' è una props di Formik, per vederne i metodi scrivo field.(ctrl+space), 
    //passo tutte queste props in una volta
    //così come per 'meta'
    return(
        <FormControlLabel {...field} control={<Radio color='default'/>} label={label}/>
    )
}



function FaunaForm() {
    return (
        <Card>
        <CardContent>
            <Formik 
            initialValues={initialValues}
            onSubmit={()=>{}}>
               {({values}) => 
                    (
                   <Form>
                       <MyRadio name="tipoIntervento" value='Fauna selvatica' type="radio" label="Fauna selvatica" />
                       <MyRadio name="tipoIntervento" value='Emergenza ambientale' type="radio" label="Emergenza ambientale"/>

                       <pre>{JSON.stringify(values, null, 4)}</pre>                                                            
                   </Form>

               )}
               
            </Formik>
        </CardContent>
        </Card>
        
    )
}

export default FaunaForm
