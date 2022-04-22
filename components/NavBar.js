import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Tooltip } from '@mui/material';
import { getAvatar } from '../utils';
import AAvatar from './AAvatar';
import { userService } from '../services/userService';
import { useRouter } from 'next/router';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});



export default function BottomAppBar({children}) {
    const router = useRouter()
    const user = userService.get()
    
    const handleLogout = () => {
        userService.logOut()
        router.push('/')
    }
    return (
        <React.Fragment>
            {children}
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>

                    <IconButton size="large" aria-label="show 2 new mails" color="inherit">
                        <Badge badgeContent={2} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="show 1 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={1} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    {user.role=='Teacher' && <StyledFab color="secondary" aria-label="add">
                        <AddIcon />
                    </StyledFab>}

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
