import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import { purple } from '@mui/material/colors';
import { capitalizeFirstLetter } from '../utils';
import { Grid } from '@mui/material';
import { userService } from '../services/userService';

export default function UserInfo({ id, userName }) {
    return (
        <Grid
            container
            direction="column"
            alignItems="left"
            justifyContent="center"
        >
            <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'transparent', justifyContent: 'center' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: purple[800] }} >
                            <AdminPanelSettingsOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={"Username: " + capitalizeFirstLetter(userName)}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Id:
                                </Typography>
                                {" " + id}
                                <br/>
                                <Typography
                                     sx={{ display: 'inline' }}
                                     component="span"
                                     variant="body2"
                                     color="text.primary"
                                >
                                    Role:
                                </Typography>
                                {" " + userService.get().role}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </Grid>
    );
}
