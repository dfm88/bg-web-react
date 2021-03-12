import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import { Form, Formik, Field } from 'formik'

const initialValues = {
    worker : 'GGG',
    date : new Date(),
    timeReceived : new Date(),
    caller : ['Carabinieri','Vigili del Fuoco','Prefettura','Privato Cittadino',
    'Regione Lombardia','Autorità Giudiziaria','Forestale','Polizia Locale','Polizia di Stato',
    'Guardia di Finanza','ARPA', 'Ufficio Tecnico Comunale', 'ASL'],
    callerGenerics : '',
    callerPhone : '',
    city : '',
    street : '',
    address : '',
    otherAddress : '',
    notes : '',
    
};

function FormComp() {
    return (
        <Card>
        <CardContent>
            <Formik 
            initialValues={initialValues}
            onSubmit={()=>{}}>
               {({values}) => 
                    (
                   <Form>
                       <Field name="worker"/>
                       <pre>{JSON.stringify(values, null, 4)}</pre>
                        {console.log("VALUES", values)}                    
                                            
                   </Form>

               )}
               
            </Formik>
        </CardContent>
        </Card>
        
    )
}

export default FormComp
