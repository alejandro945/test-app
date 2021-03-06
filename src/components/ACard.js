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
import { useRouter } from "next/router";
import Modal from './Modal';

const ACard = ({ test }) => {
    const user = userService.get()
    const router = useRouter();

    const handleRemove = () => {
        testService.removeTest(test.uid, ({ m, type }) => {
            Mixim(m, type)
        })
        router.reload();
    }

    const handleModal = () => {
        Modal("Please enter your access code", (code => {
            testService.accessCode({ test, code }, ({ m, type }) => {
                Mixim(m, type);
                if (type == 'success') {
                    router.replace('home/exam/' + test.uid)
                }
            });
        }));
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
                        <Button variant="outlined" color="secondary" startIcon={<QuizIcon />} onClick={handleModal}>
                            Present
                        </Button>
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



