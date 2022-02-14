import type { NextPage } from "next";
import Head from "next/head";


import styles from "../styles/Home.module.sass";
import { html_css_js, nodejs, react } from "../src/images";
import twitter_bird from "./../public/assets/social_media/twitter.png"

export const Home: NextPage = () => {


  /* social media links */

  const fbProfileLink = "fb.com/dipakgiri.in";
  const instaProfileLink = "";
  const twitterProfileLink = "";



  return (
    <div className={styles.container}>
      <Head>
        <title>Dipak Giri</title>
        <meta name="description" content="Dipak Giri's resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.about}>
          {/* about section */}
          <header className={styles.header}>Hello World!</header>
          <span>My name is Dipak Giri. I'm a CS student of 2nd year.</span>
        </div>

        <div className={styles.skills}>
          <img src={html_css_js.src} alt="not found" />
          <img src={nodejs.src} alt="not found" />
          <img src={react.src} alt="not found" />
        </div>

      </main>

      <footer className={styles.footer}>
        {/* social media links */}
        <a target={"_blank"} href={fbProfileLink} className={styles.fb}>
          <img src={twitter_bird.src} alt="twitter" />
        </a>
        <a target={"_blank"} href={instaProfileLink} className={styles.insta}>
          <img src={twitter_bird.src} alt="twitter" />
        </a>
      </footer>

    </div>
  );
};

export default Home;