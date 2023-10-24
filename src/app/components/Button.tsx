import styles from "./Button.module.scss";

interface ButtonProps {
  href: string;
  children: string;
}

export const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <>
      <a href={href}>
        <button className={styles.button}>
          <span className={styles.text}>{children}</span>
        </button>
      </a>
    </>
  );
};
