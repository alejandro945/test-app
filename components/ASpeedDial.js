import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HomeIcon from '@mui/icons-material/Home';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useRouter } from 'next/router';

const actions = [
  { icon: <HomeIcon />, name: 'Home' },
  { icon: <DynamicFormIcon />, name: 'Test' },
  { icon: <AddTaskIcon />, name: 'Question' },
  { icon: <QuestionAnswerIcon />, name: 'Answer' }

];

export default function ASpeedDial() {
  const router = useRouter()

  const handleChange = (e) => {
    let url = e.target.name.toLowerCase()
    if (('/' + url) != router.route) {
      if (url === 'home') {
        router.push('/home')
      } else if (router.route == '/home') {
        router.push('home/' + url)
      } else {
        router.push(url)
      }
    }
  }

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        position: 'absolute', bottom: 35, left: 0,
        right: 0,
        margin: '0 auto',
      }}
      icon={<SpeedDialIcon />}

    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          onClick={() => (handleChange({ target: { name: action.name } }))}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
