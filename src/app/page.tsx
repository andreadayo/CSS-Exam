"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";

// Components
import { Button } from "./components/Button";
import Divider from "./components/Divider";
import Track from "./components/Track";
import Subject from "./components/Subject";
import CarouselContainer from "./components/CarouselContainer";

// Data
import tracks from "../../public/data/tracks";
import subjects from "../../public/data/subjects";
import responsive from "../../public/data/responsive";

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

        <Divider baseVelocity={0.5} />

        <div className={styles.trackContainer}>
          <h3 className={styles.sectionHeading}>Tracks</h3>
          <div className={styles.trackGrid}>
            {tracks.map((track, index) => (
              <Track
                key={index}
                title={track.title}
                description={track.description}
                imagePath={track.imagePath}
              />
            ))}
          </div>
        </div>

        <Divider baseVelocity={-0.5} />

        <div className={styles.subjectContainer}>
          <h3 className={styles.sectionHeading}>Subjects</h3>
          <h6 className={styles.sectionSubheading}>
            Courses being offered in Computer Science effective as of A.Y. 2021 - 2022
          </h6>

          <div className={styles.buttonFilter}>
            <Button href="/">Data Science</Button>
            <Button href="/">Core Science</Button>
            <Button href="/">Game Development</Button>
          </div>

          <div className={styles.subjectGrid}>
            {subjects.map((subject, index) => (
              <Subject
                key={index}
                code={subject.code}
                title={subject.title}
                imagePath={subject.imagePath}
              />
            ))}
          </div>
        </div>

        <Divider baseVelocity={0.5} />

        <div className={styles.latestContainer}>
          <h3 className={styles.sectionHeading}>Latest Posts</h3>

          <CarouselContainer />
        </div>
      </main>
    </>
  );
}
