import type { NextPage } from "next";
import Head from "next/head";


import styles from "../styles/Home.module.sass";
import { html_css_js, nodejs, react } from "../src/images";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dipak Giri</title>
        <meta name="description" content="Dipak Giri's resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <About />
        <Skills />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

function Header() {
  return (
    <>
      <header className={styles.header}>Hello World!</header>
    </>
  )
}

export const About = () => {
  return (<>
    <div className={styles.about}>
      <Header />
      <span>My name is Dipak Giri. i'm a CS student of 2nd year.
      </span>
    </div>
  </>);
};

export const Skills = () => {
  return (<>
    <div className={styles.skills}>
      <img src={html_css_js.src} alt="not found" />
      <img src={nodejs.src} alt="not found" />
      <img src={react.src} alt="not found" />
    </div>
  </>);
};


export function Footer() {
  return (
    <>
      <a target={"_blank"} href="" className={styles.fb}>Dipak Giri</a>
      <a target={"_blank"} href="" className={styles.insta}>Dipak Giri</a>
    </>
  )
}