import * as styles from "@shared/components/input/Input.css";
import { Ic_eye, Ic_eye_close } from "@svg/index";
import { useState } from "react";

interface InputProps {
  placeholder?: string;
  maxLength?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "date";
}

export default function Input({
  placeholder,
  maxLength,
  value,
  onChange,
  onKeyDown,
  type = "text",
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? "password" : "text");
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputWrapper}>
        <input
          type={inputType}
          className={styles.inputStyle}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        {type === "password" && (
          <div
            className={styles.eyes}
            onClick={togglePasswordVisibility}
            role="button"
            tabIndex={0}
          >
            {showPassword ? (
              <Ic_eye_close className={styles.inputIcon} />
            ) : (
              <Ic_eye className={styles.inputIcon} />
            )}
          </div>
        )}
      </div>
      {maxLength && value && value.length >= maxLength && (
        <div className={styles.maxLength}>
          최대 {maxLength}자 입력 가능합니다.
        </div>
      )}
    </div>
  );
}