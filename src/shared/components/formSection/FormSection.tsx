import React from "react";
import * as styles from "@/shared/components/formSection/FormSection.css";
interface FormSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function FormSection({ title, description, children }: FormSectionProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      {children}
    </div>
  );
}
