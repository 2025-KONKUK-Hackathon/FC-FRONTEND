import { useNavigate } from 'react-router-dom';
import * as styles from './Signup.css';
import Button from '@shared/components/button/Button';
import SignupForm from './components/SignupForm';
import { useSignupForm, type SignupFormData } from './hooks/useSignupForm';

export default function Signup() {
  const navigation = useNavigate();

  const {
    form,
    isEmailVerified,
    requestEmailVerification,
    verifyCode,
    submitSignup,
  } = useSignupForm();

  const { handleSubmit, formState: { errors, isValid }, watch, setValue } = form;

  const emailValue = watch('email');
  const verificationCodeValue = watch('verificationCode');
  const passwordValue = watch('password');
  const nameValue = watch('name');
  const studentNumberValue = watch('studentNumber');
  const phoneValue = watch('phone');

  const isAllFieldsValid = isValid && 
    isEmailVerified && 
    emailValue && 
    verificationCodeValue && 
    passwordValue && 
    nameValue &&
    studentNumberValue &&
    phoneValue &&
    !errors.email &&
    !errors.verificationCode &&
    !errors.password &&
    !errors.name &&
    !errors.studentNumber &&
    !errors.phone;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('email', e.target.value, { shouldValidate: true });
  };

  const handleVerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('verificationCode', e.target.value, { shouldValidate: true });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('password', e.target.value, { shouldValidate: true });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('name', e.target.value, { shouldValidate: true });
  };

  const handleStudentNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('studentNumber', e.target.value, { shouldValidate: true });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('phone', e.target.value, { shouldValidate: true });
  };

  const handleEmailVerification = async () => {
    if (!emailValue) return;
    await requestEmailVerification(emailValue);
  };

  const handleCodeVerification = async () => {
    if (!verificationCodeValue) return;
    await verifyCode(verificationCodeValue);
  };

  const onSubmit = async (data: SignupFormData) => {
    const result = await submitSignup(data);
    if (result.success) {
      console.log('회원가입 성공');
      navigation('/login');
    } else {
      console.error(result.error);
    }
  };

  return (
    <form className={styles.signupWrapper}>
      <SignupForm
        type='email'
        value={emailValue}
        onChange={handleEmailChange}
        onButtonClick={handleEmailVerification}
        error={errors.email?.message}
      />
      <SignupForm
        type='emailVerification'
        value={verificationCodeValue}
        onChange={handleVerificationCodeChange}
        onButtonClick={handleCodeVerification}
        buttonDisabled={!verificationCodeValue || verificationCodeValue.length !== 6}
        showSuccessMessage={isEmailVerified}
        error={errors.verificationCode?.message}
      />
      <SignupForm
        type='password'
        value={passwordValue}
        onChange={handlePasswordChange}
        error={errors.password?.message}
      />
      <SignupForm
        type='name'
        value={nameValue}
        onChange={handleNameChange}
        error={errors.name?.message}
      />
      <SignupForm
        type='studentNumber'
        value={studentNumberValue}
        onChange={handleStudentNumberChange}
        error={errors.studentNumber?.message}
      />
      <SignupForm
        type='phone'
        value={phoneValue}
        onChange={handlePhoneChange}
        error={errors.phone?.message}
      />
      <div className={styles.buttonContainer}>
        <Button 
          text='회원가입'
          variant={isAllFieldsValid ? 'fill' : 'outline'}
          size='large'
          bgColor='KU_Darkgreen'
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </form>
  )
}
