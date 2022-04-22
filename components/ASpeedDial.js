import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import AddTaskIcon from '@mui/icons-material/AddTask';

const actions = [
  { icon: <DynamicFormIcon />, name: 'Test' },
  { icon: <AddTaskIcon />, name: 'Questions' },
  { icon: <QuestionAnswerIcon />, name: 'Answers' },
];

export default function ASpeedDial() {
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
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
