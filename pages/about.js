import styles from "../styles/About.module.css"
import {AiFillTwitterCircle, AiFillGithub} from 'react-icons/ai';

export default function About() {
  return (
    <div className={styles.main}>
        <h4>A SSR news collector app developed with Next.js</h4>
      <p>
        programmed by Amin Meraji
      </p>
      <div className={styles.link_container}>
      <a href='https://twitter.com/mamad_coder' ><AiFillTwitterCircle/></a>
      <a href='https://github.com/a-meraji'><AiFillGithub/></a>
      </div>
    </div>
  );
}
