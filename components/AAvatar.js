import React from 'react'
import { red } from '@mui/material/colors';
import { Avatar, Badge } from '@mui/material';

const AAvatar = ({ username }) => {
    return (
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            color="secondary"
            badgeContent=" "
        >
            <Avatar sx={{ bgcolor: red[900] }} variant="rounded">
                {username}
            </Avatar>
        </Badge>

    )
}

export default AAvatar