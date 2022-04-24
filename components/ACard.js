import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { userService } from '../services/userService';
import DeleteIcon from '@mui/icons-material/Delete';
import QuizIcon from '@mui/icons-material/Quiz';
import { testService } from '../services/testService';
import Mixim from './Mixim';
import Link from 'next/link';

const ACard = ({ test }) => {
    const user = userService.get()

    const handleRemove = () => {
        testService.removeTest(test.UID, ({ m, type }) => {
            Mixim(m, type)
        })
    }

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
                        <Link href={'/home/exam/'+test.UID}>
                            <Button variant="outlined" color="secondary" startIcon={<QuizIcon />}>
                                Present
                            </Button>
                        </Link>
                        :
                        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleRemove}>
                            Delete
                        </Button>
                    }
                </CardActions>
            </Card>
        </div>
    )
}

export default ACard



