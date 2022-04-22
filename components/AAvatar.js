import React from 'react'
import { purple } from '@mui/material/colors';
import { Avatar, Badge } from '@mui/material';

const AAvatar = ({ username }) => {
    return (
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            color="success"
            variant='dot'
        >
            <Avatar sx={{ bgcolor: purple[900] }} variant="circular">
                {username}
            </Avatar>
        </Badge>
    )
}

export default AAvatar