import { useNavigate } from 'react-router-dom';
import * as styles from './Login.css';
import Input from '@shared/components/input/Input';
import Button from '@shared/components/button/Button';
import { useLoginForm, type LoginFormData } from './hooks/useLoginForm';
import { Ic_logo } from '@svg/index';

export default function Login() {
  const navigate = useNavigate();
  const { form, isLoading, loginError, login } = useLoginForm();

  const {
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = form;

  const emailValue = watch('email');
  const passwordValue = watch('password');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('email', e.target.value, { shouldValidate: true });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('password', e.target.value, { shouldValidate: true });
  };

  const onSubmit = async (data: LoginFormData) => {
    const result = await login(data);
    if (result.success) {
      navigate('/');
    } else {
      console.error(result.error);
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        <span className={styles.title}>하나되는 우리</span>
        <Ic_logo className={styles.logo} />
        <span className={styles.subtitle}>
          건국대학교 컴퓨터공학부 학생들을 위한
          <br />
          통합 커뮤니티
        </span>

        <form className={styles.formContainer}>
          <div className={styles.inputWrapper}>
            <div className={styles.inputContainer}>
              <Input
                placeholder="이메일을 입력하세요"
                value={emailValue}
                onChange={handleEmailChange}
                type="email"
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
            </div>

            <div className={styles.inputContainer}>
              <Input
                placeholder="비밀번호를 입력하세요"
                value={passwordValue}
                onChange={handlePasswordChange}
                type="password"
              />
              {errors.password && (
                <span className={styles.errorMessage}>{errors.password.message}</span>
              )}
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <Button
              text={isLoading ? '로그인 중...' : '로그인'}
              size="large"
              bgColor="KU_Darkgreen"
              disabled={!isValid || isLoading}
              onClick={handleSubmit(onSubmit)}
            />
            {loginError && <span className={styles.errorMessage}>{loginError}</span>}

            <div className={styles.divider}>
              <span className={styles.dividerText}>또는</span>
            </div>

            <Button
              text="회원가입"
              variant="outline"
              size="large"
              bgColor="KU_Darkgreen"
              onClick={handleSignUp}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
