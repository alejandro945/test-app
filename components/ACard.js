import React from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ACard = ({ test }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={test.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {test.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {test.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Try
                </Button>
            </CardActions>
        </Card>
    )
}

export default ACard



