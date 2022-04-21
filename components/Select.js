import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

const Select = ({info,title}) => {
    return (
        <Autocomplete
            disablePortal
            id={title}
            options={info}
            renderInput={(params) => <TextField  required={true} {...params} label={title} />}
        />
    )
}

export default Select