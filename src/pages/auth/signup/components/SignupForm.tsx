import * as styles from './SignupForm.css';
import Input from '@shared/components/input/Input';
import Button from '@shared/components/button/Button';
import { SIGNUP_FORM_CONFIGS, type SignupFormType } from '../types/signupTypes';

interface SignupFormProps {
  type?: SignupFormType;
}

export default function SignupForm({ type }: SignupFormProps) {
  const config = SIGNUP_FORM_CONFIGS[type!];

  return (
    <div className={styles.formWrapper}>
      <span className={styles.formTitle}>{config.title}</span>
      <div className={styles.formInputContainer}>
        <div className={styles.inputContainer}>
          <Input
            placeholder={config.placeholder}
            type={config.inputType}
          />
        </div>
        {config.buttonText && (
          <Button
            text={config.buttonText}
            size='medium'
            bgColor='KU_Darkgreen'
            disabled={config.disabled}
          />
        )}
      </div>
    </div>
  )
}
