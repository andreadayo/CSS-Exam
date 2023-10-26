"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import { Link } from "react-scroll";

// Components
import { Button } from "./components/Button";
import Divider from "./components/Divider";
import Track from "./components/Track";
import Subject from "./components/Subject";
import CarouselContainer from "./components/CarouselContainer";

// Data
import tracks from "../../public/data/tracks";
import subjects from "../../public/data/subjects";

export default function Home() {
  const scrollOptions = {
    duration: 500,
  };

  const [selectedTrack, setSelectedTrack] = useState("Data Science");

  const filteredSubjects = selectedTrack
    ? subjects.filter((subject) => subject.track === selectedTrack)
    : subjects;

  const handleTrackChange = (track: string) => {
    setSelectedTrack(track);
  };

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
              <Link to="track" smooth={true} {...scrollOptions}>
                <Button>#tracks</Button>
              </Link>
              <Link to="subject" smooth={true} {...scrollOptions}>
                <Button>#subject</Button>
              </Link>
              <Link to="latest" smooth={true} {...scrollOptions}>
                <Button>#latestpage</Button>
              </Link>
            </div>
          </div>
        </div>

        <Divider baseVelocity={4} />

        <div className={styles.trackContainer} id="track">
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

        <Divider baseVelocity={-4} />

        <div className={styles.subjectContainer} id="subject">
          <h3 className={styles.sectionHeading}>Subjects</h3>
          <h6 className={styles.sectionSubheading}>
            Courses being offered in Computer Science effective as of A.Y. 2021 - 2022
          </h6>

          <div className={styles.buttonFilter}>
            <Button
              onClick={() => handleTrackChange("Data Science")}
              active={selectedTrack === "Data Science"}
            >
              Data Science
            </Button>
            <Button
              onClick={() => handleTrackChange("Core Science")}
              active={selectedTrack === "Core Science"}
            >
              Core Science
            </Button>
            <Button
              onClick={() => handleTrackChange("Game Development")}
              active={selectedTrack === "Game Development"}
            >
              Game Development
            </Button>
          </div>

          <div className={styles.subjectGrid}>
            {filteredSubjects.slice(0, 6).map((subject, index) => (
              <Subject
                key={index}
                code={subject.code}
                title={subject.title}
                imagePath={subject.imagePath}
              />
            ))}
          </div>
        </div>

        <Divider baseVelocity={4} />

        <div className={styles.latestContainer} id="latest">
          <h3 className={styles.sectionHeading}>Latest Posts</h3>

          <CarouselContainer />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.left}>
          <Image
            src="/assets/css-logo-white.png"
            alt="CSS Logo"
            width="100"
            height="70"
            className={styles.logo}
          />
          <p className={styles.headline}>#SayYesToCSS</p>
          <p className={styles.author}>Passionately designed & developed by CSS 💻</p>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <p>UST Computer Science Society</p>
            <a href="/">About Us</a>
            <a href="/">Community</a>
            <a href="/">News & Events</a>
          </div>
          <div className={styles.social}>
            <a href="/">
              <Image
                src="/assets/social/envelope-solid.svg"
                alt="Email"
                width="16"
                height="16"
              />
              <span>Email</span>
            </a>
            <a href="/">
              <Image
                src="/assets/social/square-facebook.svg"
                alt="Email"
                width="16"
                height="16"
              />
              <span>Facebook</span>
            </a>
            <a href="/">
              <Image
                src="/assets/social/square-x-twitter.svg"
                alt="Email"
                width="16"
                height="16"
              />
              <span>Twitter</span>
            </a>
            <a href="/">
              <Image
                src="/assets/social/square-instagram.svg"
                alt="Email"
                width="16"
                height="16"
              />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
