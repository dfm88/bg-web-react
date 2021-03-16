import React from 'react'
import { TextField } from '@material-ui/core';
import { useField } from 'formik'

function MyDateTimeField({name, ...anyOtherProp}) {

    const [field, meta ] = useField(name);

    const configDatePicker = {
        variant: 'outlined',
        fullWidth: true,
        InputLabelProps : {
            shrink: true,
        },
        ...field,
        ...anyOtherProp,
    }

    if(meta && meta.touched && meta.error) {
        configDatePicker.error = true;
        configDatePicker.helperText = meta.error;
    }

    return (
        <TextField {...configDatePicker}/>
            
        
    )
}

export default MyDateTimeField
