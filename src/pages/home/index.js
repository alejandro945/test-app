import { Grid } from '@mui/material';
import React from 'react'
import ACard from '../../components/ACard';
import Container from '../../components/Container';
import Title from '../../components/Title';
import { testService } from '../../services/testService';
import { userService } from '../../services/userService';
import withAuth from '../../services/withAuth'


const dashboard = ({ data }) => {
  const user = userService.get()

  let desc = (user.role === 'Student') ? "In this section you can access your exams, we hope you pass most of them 🍄" : "In this section you can check the exams of all the classes 🦧"
  return (
    <div className='p-4'>
      <Container>
        <Title title="Dashboard 💥" description={desc} />
      </Container>
      <Container>
        <Grid container spacing={2}>
          {data.map(t => (
            <Grid item key={t.uid} xs={6} md={4}>
              <ACard key={t.uid} test={t} />
            </Grid>
          ))
          }
        </Grid>
      </Container>
    </div>
  )

}
export async function getServerSideProps() {
  const res = await testService.getTests()
  const data = await res.json()
  return { props: { data } }
}


export default withAuth(dashboard)