import { Button, Chip, Divider, TextField } from "@mui/material";
import Container from "../components/Container";
import styles from "../styles/Home.module.css";
import Select from "../components/Select";
import { useState } from "react";
import AAvatar from "../components/AAvatar";
import { getAvatar, sendAlert } from "../utils";
import Mixim from "../components/Mixim";


export default function Home() {
  const [user, setUser] = useState({
    userName: '',
    password: '',
    role: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'userName') {
      let temp = value.toUpperCase()
      setUser({ ...user, userName: temp })
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    let config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    let response = await fetch("http://localhost:3001/api/auth", config)
    let result = await sendAlert(response)
    Mixim(result.m, result.type)
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
          <p>In this section you can get into our test app depending of your university organization role</p>
          {getAvatar(user.userName) !== '' ? <AAvatar username={getAvatar(user.userName)} /> : ''}
          <div className="row mt-3">
            <div className="col-md-4 p-2">
              <TextField fullWidth name="userName" label="Username" variant="outlined" required={true} size="medium" onChange={handleChange} />
            </div>
            <div className="col-md-4 p-2">
              <TextField type="password" fullWidth name="password" label="Password" variant="outlined" required={true} size="medium" onChange={handleChange} />
            </div>
            <div className="col-md-4 p-2">
              <Select info={['Student', 'Teacher']} title="User role" name="role" handle={handleChange} />
            </div>
          </div>
          <Button sx={{ m: 2 }} size="large" variant="contained" type="submit">Log in</Button>
        </Container>
      </form>

      <footer className={styles.footer}>
        <span> 🐱 Copyright <a href="https://github.com/alejandro945">Alejandro Varela</a>  and <a href="https://github.com/GabrielSB19">Gabriel Suarez</a> 🧶 </span>
      </footer>
    </div>
  );
}

