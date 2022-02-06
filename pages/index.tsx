import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Resume from "../components/Resume";
import Topbar from "../components/topbar/Topbar";
import styles from "../styles/Home.module.sass";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dipak Giri</title>
        <meta name="description" content="Dipak Giri's resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Topbar>DIPAK GIRI</Topbar>
        <Resume />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
