import React from "react";
import Image from "next/image";
import styles from "./Post.module.scss";

interface PostProps {
  title: string;
  postDate: string;
  imagePath: string;
}

const Post: React.FC<PostProps> = ({ title, postDate, imagePath }) => {
  return (
    <div className={styles.postBox}>
      <Image
        src={imagePath}
        alt={title}
        width="400"
        height="200"
        className={styles.image}
      />

      <div className={styles.postContent}>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.description}>{postDate}</p>
      </div>
    </div>
  );
};

export default Post;
