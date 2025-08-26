import React from "react";
import * as styles from "@/shared/components/formSection/FormSection.css";
import { Ic_pin } from "@svg/index";
interface FormSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  errorMessage?: string;
}

export default function FormSection({ title, description, children, errorMessage }: FormSectionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Ic_pin className={styles.icon} />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <p className={styles.description}>{description}</p>
      {children}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
}
