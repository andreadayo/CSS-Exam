import React from "react";
import Image from "next/image";
import styles from "./Subject.module.scss";

import { Button } from "./Button";

interface SubjectProps {
  code: string;
  title: string;
  imagePath: string;
}

const Subject: React.FC<SubjectProps> = ({ code, title, imagePath }) => {
  return (
    <div className={styles.subjectBox}>
      <div className={styles.imageContainer}>
        <Image
          src={imagePath}
          alt={title}
          width="400"
          height="200"
          className={styles.image}
        />
      </div>
      <div className={styles.subjectContent}>
        <h5 className={styles.code}>{code}</h5>
        <h6 className={styles.title}>{title}</h6>
        <div className={styles.buttonContainer}>
          <Button href="/">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Subject;
