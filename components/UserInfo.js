import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { yellow } from '@mui/material/colors';
import { capitalizeFirstLetter } from '../utils';
import { Grid } from '@mui/material';

export default function UserInfo({ userName, role }) {
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper', justifyContent: 'center' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: yellow[500] }} >
                            <AssignmentIcon />
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
                                    Role:
                                </Typography>
                                {" " + role}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </Grid>
    );
}
