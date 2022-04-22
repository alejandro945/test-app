import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { userService } from '../services/userService';
import DeleteIcon from '@mui/icons-material/Delete';
import QuizIcon from '@mui/icons-material/Quiz';

const ACard = ({ test }) => {
    const user = userService.get()
    return (
        <div>
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
                    {(user.role === 'Student') ?
                        <Button variant="outlined" color="secondary" startIcon={<QuizIcon />}>
                            Present
                        </Button> :
                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                    }
                </CardActions>
            </Card>
        </div>
    )
}

export default ACard



