import Image from "next/image";
import styles from "./page.module.scss";

// Components
import { Button } from "./components/Button";

export default function Home() {
  return (
    <>
      <nav className={styles.nav}>
        <Image
          src="/assets/css-logo.png"
          alt="CSS Logo"
          width="100"
          height="55"
          className={styles.logo}
        />
        <div className={styles.links}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Community</a>
          <a href="/">News & Events</a>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.heroContainer}>
          <div className={styles.hero}>
            <h2 className={styles.title}>Exploring Horizons in Computer Science</h2>
            <h6 className={styles.subtitle}>Say Yes to CSS!</h6>
            <div className={styles.buttons}>
              <Button href="/">#tracks</Button>
              <Button href="/">#subject</Button>
              <Button href="/">#latestpage</Button>
            </div>
          </div>
        </div>
        {/* DIVIDER */}
      </main>
    </>
  );
}
