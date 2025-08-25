import * as styles from "@shared/components/textArea/TextArea.css";

interface TextAreaProps {
  placeholder?: string;
  maxLength?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({
  placeholder,
  maxLength,
  value,
  onChange,
  onKeyDown,
}: TextAreaProps) {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.textAreaWrapper}>
        <textarea
          className={styles.textAreaStyle}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        {maxLength && (
          <div className={styles.characterCount}>
            {value?.length || 0} / {maxLength}
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
