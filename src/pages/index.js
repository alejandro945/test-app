import { Button, Chip, Divider, TextField } from "@mui/material";
import Container from "../components/Container";
import styles from "../styles/Home.module.css";
import Select from "../components/Select";
import { useState } from "react";
import AAvatar from "../components/AAvatar";
import { getAvatar } from "../utils";
import Mixim from "../components/Mixim";
import { userService } from "../services/userService";
import { useRouter } from "next/router";



export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState({
    username: '',
    password: '',
    role: ''
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'username') {
      let temp = value.toUpperCase()
      setUser({ ...user, username: temp })
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    userService.logIn(user, ({ m, type }) => {
      Mixim(m, type)
      if (userService.isAuth) {
        router.replace('/home/');
      }
    })
  }

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ✌️ Welcome to <a href="https://nextjs.org">
            Next.js Test App!</a>
        </h1>
      </main>

      <form onSubmit={handleSubmit}>
        <Container>
          <Divider sx={{ m: 2 }}>
            <Chip label="SIGN IN" />
          </Divider>
          <div className="text-center">
            <p>In this section you can get into our test app depending of your university organization role</p>
            {getAvatar(user.username) !== '' ? <AAvatar username={getAvatar(user.username)} /> : ''}
          </div>
          <div className="row mt-3">
            <div className="col-md-4 p-2">
              <TextField fullWidth name="username" label="Username" variant="outlined" required={true} size="medium" onChange={handleChange} />
            </div>
            <div className="col-md-4 p-2">
              <TextField type="password" fullWidth name="password" label="Password" variant="outlined" required={true} size="medium" onChange={handleChange} />
            </div>
            <div className="col-md-4 p-2">
              <Select info={['Student', 'Teacher']} title="User role" name="role" handle={handleChange} />
            </div>
          </div>
          <div className="text-center">
            <Button sx={{ m: 2, width: '60%' }} size="large" variant="contained" type="submit">Log in</Button>
          </div>
        </Container>
      </form>

      <footer className={styles.footer}>
        <span> 🐱 Copyright <a href="https://github.com/alejandro945">Alejandro Varela</a> and <a href="https://github.com/GabrielSB19">Gabriel Suarez</a> 🧶 </span>
      </footer>
    </div>
  );
}

