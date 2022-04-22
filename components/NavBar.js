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
import { Badge, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { getAvatar, logout } from '../utils';
import AAvatar from './AAvatar';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

export default function BottomAppBar() {
    return (
        <React.Fragment>
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
                    <StyledFab color="secondary" aria-label="add">
                        <AddIcon />
                    </StyledFab>
                    <Box sx={{ flexGrow: 1 }} />
                    <Tooltip title="Log out">
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            onClick={logout}
                            color="inherit"
                        >
                            <AAvatar username={getAvatar(JSON.parse(localStorage.getItem('user')).userName)} />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
