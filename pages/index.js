import { Button, Chip, Divider, TextField } from "@mui/material";
import Head from "next/head";
import Container from "../components/Container";
import styles from "../styles/Home.module.css";
import Select from "../components/Select";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">
            Next.js!</a> integrated with{" "}
          <a href="https://mui.com/">Material-UI!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>
            pages/index.js</code>
        </p>
      </main>
      <Container>
        <Divider sx={{ m: 2 }}>
          <Chip label="SIGN IN" />
        </Divider>
        <p>In this section you can get into de test app depending of your university organization role</p>
        <div className="row mt-3">
          <div className="col-md-6 p-2">
            <TextField fullWidth name="userName"  label="Username" variant="outlined" required={true} size="medium"  />
          </div>
          <div className="col-md-6 p-2">
            <TextField fullWidth name="password"  label="Password" variant="outlined" required={true} size="medium"  />
          </div>
        </div>
        <Select info={['Student', 'Teacher']} title="User role" />
        <Button sx={{ m: 2 }} variant="contained">Log in</Button>
      </Container>
    </div>
  );
}

