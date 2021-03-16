import React from 'react'
import { TextField } from '@material-ui/core'
import { useField } from 'formik'

function MyTextFieldComp ({name, ...anyOtherProp}) {

    //hook di formik dal quale recupero i valori 'field' e 'meta', che sono 
    //props di formik, per passarli all'oggetto di configurazione del 
    //TextField personalizzato in modo che ne possa fare uso
    const [field, meta] = useField(name);

    //creo alcuni questo oggetto in modo da passare 
    //alcune props di default senza passarle ad ogni TextField che creo
    const configTextField = { 
        ...field,
        ...anyOtherProp,
        variant: 'outlined'
    }

    //se nell'oggetto meta sono presenti degli errori, aggiungo
    //all'oggetto personalizzato 'configTextField',    
    // un attributo booleano 'errors' per visualizzare gli errori con la 
    //props 'error' di Material UI e aggiungo la prop "helperText"
    // sempre di material UI per visualizzarlo 
    if(meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }

    return (
        <TextField {...configTextField}/>
            
       
    )
}

export default  MyTextFieldComp
