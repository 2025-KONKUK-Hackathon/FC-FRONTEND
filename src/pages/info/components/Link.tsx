import * as styles from './Link.css';

export default function Link({ text, href }: { text: string; href: string }) {
  return (
    <a href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}
