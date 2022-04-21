import { Button, Chip, Divider, TextField } from "@mui/material";
import Head from "next/head";
import Container from "../components/Container";
import styles from "../styles/Home.module.css";
import Select from "../components/Select";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ✌️ Welcome to <a href="https://nextjs.org">
            Next.js Test App!</a>
        </h1>
      </main>

      <Container>
        <Divider sx={{ m: 2 }}>
          <Chip label="SIGN IN" />
        </Divider>
        <p>In this section you can get into our test app depending of your university organization role</p>
        <div className="row mt-3">
          <div className="col-md-4 p-2">
            <TextField fullWidth name="userName" label="Username" variant="outlined" required={true} size="medium" />
          </div>
          <div className="col-md-4 p-2">
            <TextField fullWidth name="password" label="Password" variant="outlined" required={true} size="medium" />
          </div>
          <div className="col-md-4 p-2">
            <Select info={['Student', 'Teacher']} title="User role" />
          </div>
        </div>
        <Button sx={{ m: 2 }} size="large" variant="contained">Log in</Button>
      </Container>
      <footer className={styles.footer}>
        <span> 🐱 Copyright <a href="https://github.com/alejandro945">Alejandro Varela</a>  and <a href="https://github.com/GabrielSB19">Gabriel Suarez</a> 🧶 </span>
      </footer>
    </div>
  );
}

