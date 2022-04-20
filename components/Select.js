import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

const Select = ({info,title}) => {
    return (
        <Autocomplete
            disablePortal
            id="cb-role"
            options={info}
            sx={{ width: 500 , m:2}}
            renderInput={(params) => <TextField  required={true} {...params} label={title} />}
        />
    )
}

export default Select