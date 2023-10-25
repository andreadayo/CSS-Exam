import React from "react";
import Image from "next/image";
import styles from "./Track.module.scss";

import { Button } from "./Button";

interface TrackProps {
  title: string;
  description: string;
  imagePath: string;
}

const Track: React.FC<TrackProps> = ({ title, description, imagePath }) => {
  return (
    <div className={styles.trackBox}>
      <div className={styles.imageContainer}>
        <Image
          src={imagePath}
          alt={title}
          width="400"
          height="200"
          className={styles.image}
        />
      </div>

      <h5 className={styles.title}>{title}</h5>
      <p className={styles.description}>{description}</p>
      <Button href="/">Learn More</Button>
    </div>
  );
};

export default Track;
