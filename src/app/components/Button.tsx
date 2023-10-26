import styles from "./Button.module.scss";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: string;
  onClick?: () => void;
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ href, children, onClick, active }) => {
  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        <button className={styles.button}>
          <span className={styles.text}>{children}</span>
        </button>
      </Link>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={active ? `${styles.activeButton} ${styles.button}` : styles.button}
      >
        <span className={styles.text}>{children}</span>
      </button>
    );
  }
};
