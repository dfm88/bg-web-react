import React from 'react'
import { TextField, MenuItem } from '@material-ui/core'
import { useField, useFormikContext} from 'formik'

function MySelectField({name, listToBeRendered, ...anyOtherProp}) {

    const [field, meta] = useField(name);
    const { setFieldValue } = useFormikContext();


    const handleChange = evt => {
        const { value } = evt.target;
        setFieldValue(name, value); 
    }

    const configSelect={
        select: true,
        variant: 'outlined',
        onChange: handleChange,
        ...field,
        ...anyOtherProp,
    }

    if(meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta. error;    
    }



    return (
        <TextField {...configSelect}>
            {listToBeRendered.map((item, index) => {
                return (
                    <MenuItem key={index} value={item}>
                        {listToBeRendered[index]}                    
                    </MenuItem>
                )
            })}

        </TextField>
            
        
    )
}

export default MySelectField
