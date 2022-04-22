import React from 'react'
import Container from '../components/Container';
import NavBar from '../components/NavBar'
import Title from '../components/Title';
import UserInfo from '../components/UserInfo';
import { userService } from '../services/userService';
import withAuth from '../services/withAuth';

const dashboard = () => {
  const user = userService.get()
  let desc = (user.role === 'Student') ? "En esta seccion podras acceder a tus examenes, esperamos que apruebes la mayoría 🍄" : "En esta seccion podrás verificar los examenes de tus clases 🦧"
  return (
    <NavBar>
      <div className='align-items-center'>
      <UserInfo userName={user.userName} role={user.role}/>
      </div>
      <Container>
        <Title title="Dashboard 💥" description={desc} />
      </Container>
      <Container>
      </Container>
    </NavBar>
  )

}


export default withAuth(dashboard)