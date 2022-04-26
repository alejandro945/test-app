import React from 'react'
import { Divider } from '@mui/material';
const Title = ({title,description}) => {
  return (
    <div className="mb-2 text-center">
      <h2>{title}</h2>
      <p className="lead">
        {description}
      </p>
      <Divider variant="middle" />
    </div>
  )
}

export default Title