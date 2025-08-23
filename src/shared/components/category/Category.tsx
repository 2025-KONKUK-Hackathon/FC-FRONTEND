import * as styles from "./Category.css";
import type { Color } from "@styles/theme.css";

interface CategoryProps {
  text: string;
  icon?: string;
  color?: Color;
}

export default function Category({
  text,
  icon = "",
  color = "KU_Darkgreen",
}: CategoryProps) {
  return (
    <div
      className={styles.categoryStyle({
        color,
      })}
    >
      <span className={styles.iconStyle}>{icon}</span>
      <span>{text}</span>
    </div>
  );
}
