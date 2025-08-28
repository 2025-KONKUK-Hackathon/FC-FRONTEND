import React from "react";
import * as styles from "@/shared/components/formSection/FormSection.css";

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  errorMessage?: string;
}

export default function FormSection({ title, description, children, errorMessage }: FormSectionProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
      {children}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
}
