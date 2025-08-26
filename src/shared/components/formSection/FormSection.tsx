import React from "react";
import * as styles from "@/shared/components/formSection/FormSection.css";
import { Ic_magnetic, Ic_pin } from "@svg/index";
interface FormSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  errorMessage?: string;
  type: "posts" | "gathering";
}

export default function FormSection({ title, description, children, errorMessage, type }: FormSectionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        {type === "gathering" ? <Ic_pin className={styles.icon} /> : <Ic_magnetic className={styles.icon} />}
        <h2 className={styles.title}>{title}</h2>
      </div>
      <p className={styles.description}>{description}</p>
      {children}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
}
