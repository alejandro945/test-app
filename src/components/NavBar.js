import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Tooltip } from '@mui/material';
import { getAvatar } from '../utils';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import AAvatar from './AAvatar';
import { userService } from '../services/userService';
import { useRouter } from 'next/router';
import ASpeedDial from './ASpeedDial';
import Link from 'next/link';

export default function BottomAppBar({ children }) {
    const router = useRouter()
    const user = userService.get()

    const handleLogout = () => {
        userService.logOut()
        router.replace('/')
    }

    return (
        <React.Fragment>
            {children}<br/><br/>
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <Link href={'/home/profile/' + user.id}>
                    <IconButton size="large" color="inherit">
                            <AssignmentIndOutlinedIcon />
                    </IconButton>
                    </Link>
                    
                    <IconButton
                        size="large"
                        aria-label="show 1 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={1} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    {user.role == 'Teacher' && <ASpeedDial aria-label="add">
                        <AddIcon />
                    </ASpeedDial>}

                    <Box sx={{ flexGrow: 1 }} />
                    <Tooltip title="Log out">
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            onClick={handleLogout}
                            color="inherit"
                        >
                            <AAvatar username={getAvatar(user.userName)} />
                        </IconButton>
                    </Tooltip>

                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
