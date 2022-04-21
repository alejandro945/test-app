import React from 'react'
import { deepPurple } from '@mui/material/colors';

const Avatar = () => {
    return (
        <div>Avatar
            <Avatar sx={{ bgcolor: deepPurple[500] }}>
                {props.userName}
            </Avatar>
        </div>
    )
}

export default Avatar