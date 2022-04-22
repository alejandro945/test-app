import React from 'react'
import NavBar from '../components/NavBar'
import withAuth from '../services/withAuth';

const dashboard = () => {

  return (
    <NavBar>

    </NavBar>
  )
 
}


export default withAuth(dashboard)