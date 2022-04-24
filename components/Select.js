import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

const Select = ({info,title, handle,name,img}) => {
    return (
        <Autocomplete
            disablePortal
            options={info}
            value={img}
            onChange={(event,value) =>( handle({ target: { name, value: value } }))}
            renderInput={(params) => <TextField  required={true} {...params} label={title} />}
        />
    )
}

export default Select