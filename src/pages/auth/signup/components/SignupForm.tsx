import * as styles from './SignupForm.css';
import Input from '@shared/components/input/Input';
import Button from '@shared/components/button/Button';
import { SIGNUP_FORM_CONFIGS, type SignupFormType } from '../types/signupTypes';

interface SignupFormProps {
  type: SignupFormType;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
  buttonDisabled?: boolean;
  verificationSent?: boolean;
  showSuccessMessage?: boolean;
  error?: string;
}

export default function SignupForm({ 
  type, 
  value,
  onChange,
  onButtonClick, 
  buttonDisabled = false,
  verificationSent = false,
  showSuccessMessage = false,
  error,
}: SignupFormProps) {
  const config = SIGNUP_FORM_CONFIGS[type];

  return (
    <div className={styles.formWrapper}>
      <span className={styles.formTitle}>{config.title}</span>
      <div className={styles.formInputContainer}>
        <div className={styles.inputContainer}>
          <Input
            placeholder={config.placeholder}
            type={config.inputType}
            value={value}
            onChange={onChange}
          />
        </div>
        {config.buttonText && (
          <Button
            text={config.buttonText}
            size='medium'
            bgColor='KU_Darkgreen'
            disabled={buttonDisabled || verificationSent}
            onClick={onButtonClick}
          />
        )}
      </div>
      {error && (
        <span className={styles.validationMessage({ success: false })}>
          {error}
        </span>
      )}
      {verificationSent && (
        <span className={styles.validationMessage({ success: true })}>
          해당 이메일로 인증번호가 전송되었습니다.
        </span>
      )}
      {showSuccessMessage && (
        <span className={styles.validationMessage({ success: true })}>
          인증 완료
        </span>
      )}
    </div>
  )
}
