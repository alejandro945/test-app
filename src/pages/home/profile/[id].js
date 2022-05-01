import { Paper } from '@mui/material'
import React from 'react'
import ABreadCrumb from '../../../components/ABreadCrumb';
import UserInfo from '../../../components/UserInfo';
import { userService } from '../../../services/userService';
import withAuth from '../../../services/withAuth';

const Profile = ({ user }) => {

    return (
        <div>
            <Paper elevation={24} sx={{ p: 4, m: 4 }}>
                <ABreadCrumb />
                <UserInfo id={user.id} username={user.username} />
            </Paper>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await userService.getAll()
    const users = await res.json()
    const paths = users.map(u => ({
        params: { id: u.id.toString() }
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await userService.getUser(params.id)
    const user = await res.json()
    return { props: { user } }
}

export default withAuth(Profile)