import { html_css_js } from "../src/images";
import styles from "./../styles/Home.module.sass";

export default function Resume() {
  return <>
    <About />
    <Skills />
  </>;
}

export const About = () => {
  return (<>
    <div className={styles.about}>
      Hello World! my name is Dipak Giri. im a CS 2nd year student.
    </div>
  </>);
};

export const Skills = () => {
  return (<>
    <div className={styles.skills}>
      <img src={html_css_js.src} alt="not found" />
    </div>
  </>);
};
