import * as styles from "./Category.css";
import type { Color } from "@styles/theme.css";

interface CategoryProps {
  text: string;
  icon?: string;
  color?: Color;
  size?: "small" | "medium" | "large";
}

export default function Category({
  text,
  icon = "",
  color = "KU_Darkgreen",
  size = "small",
}: CategoryProps) {
  return (
    <div
      className={styles.categoryStyle({
        color,
        size,
      })}
    >
      {
        icon && <span className={styles.iconStyle({ size })}>{icon}</span>
      }
      <span>{text}</span>
    </div>
  );
}
