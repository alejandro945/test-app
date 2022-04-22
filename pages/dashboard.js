import { Grid } from '@mui/material';
import React from 'react'
import ACard from '../components/ACard';
import Container from '../components/Container';
import NavBar from '../components/NavBar'
import Title from '../components/Title';
import UserInfo from '../components/UserInfo';
import { testService } from '../services/testService';
import { userService } from '../services/userService';
import withAuth from '../services/withAuth';

const dashboard = ({ data }) => {
  const user = userService.get()
  let desc = (user.role === 'Student') ? "In this section you can access your exams, we hope you pass most of them 🍄" : "In this section you can check the exams of all the classes 🦧"
  return (
    <NavBar>
      <div className='align-items-center'>
        <UserInfo userName={user.userName} role={user.role} />
      </div>
      <Container>
        <Title title="Dashboard 💥" description={desc} />
      </Container>
      <Container>
        <Grid container spacing={2}>
          {data.map(t => (
            <Grid item xs={4}>
              <ACard key={t.UID} test={t} />
            </Grid>
          ))
          }
        </Grid>
      </Container>
      <br />
      <br />
      <br />
    </NavBar>
  )

}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await testService.get()
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}


export default withAuth(dashboard)