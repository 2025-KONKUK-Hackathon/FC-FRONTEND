import * as styles from './Signup.css';
import Button from '@shared/components/button/Button';
import SignupForm from './components/SignupForm';
import { useSignupForm, type SignupFormData } from './hooks/useSignupForm';
import { useSignupMutations } from './hooks/useSignupMutations';

export default function Signup() {
  const {
    form,
    isEmailSent,
    setIsEmailSent,
    emailError,
    setEmailError,
    isEmailVerified,
    setIsEmailVerified,
    verifiedEmail,
    setVerifiedEmail,
    codeError,
    setCodeError,
    resetEmailVerificationState,
  } = useSignupForm();

  const {
    signupMutation,
    verificationConfirmMutation,
    verificationRequestMutation,
  } = useSignupMutations();

  const { handleSubmit, formState: { errors, isValid }, watch, setValue } = form;

  const emailValue = watch('email');
  const verificationCodeValue = watch('verificationCode');
  const passwordValue = watch('password');
  const nameValue = watch('name');
  const studentNumberValue = watch('studentNumber');
  const phoneValue = watch('phone');

  const isAllFieldsValid = isValid && 
    isEmailSent &&
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

  const getHttpStatus = (error: unknown): number | undefined => {
    if (error && typeof error === 'object' && 'response' in error &&
        error.response && typeof error.response === 'object' && 'status' in error.response) {
      return error.response.status as number;
    }
    return undefined;
  };

  const handleEmailVerification = async () => {
    if (!emailValue) return;
    
    try {
      resetEmailVerificationState();
      await verificationRequestMutation.mutateAsync({ email: emailValue });
      setIsEmailSent(true);
    } catch (error: unknown) {
      console.error('이메일 인증 요청 실패');
      setIsEmailSent(false);
      
      // 409 상태 코드인 경우 이미 존재하는 이메일
      const status = getHttpStatus(error);
      if (status === 409) {
        setEmailError('이미 존재하는 이메일 입니다.');
      } else {
        setEmailError('이메일 인증 요청에 실패했습니다.');
      }
    }
  };

  const handleCodeVerification = async () => {
    if (!verificationCodeValue) return;
    
    try {
      setCodeError('');
      const currentEmail = form.getValues('email');
      if (!currentEmail) {
        setCodeError('이메일을 먼저 입력해주세요.');
        return;
      }
      
      await verificationConfirmMutation.mutateAsync({ 
        email: currentEmail, 
        code: verificationCodeValue 
      });
      setIsEmailVerified(true);
      setVerifiedEmail(currentEmail);
    } catch (error: unknown) {
      console.error('인증번호 확인 실패');
      
      // 400 상태 코드인 경우 인증번호 불일치
      const status = getHttpStatus(error);
      if (status === 400) {
        setCodeError('인증번호가 일치하지 않습니다.');
      } else {
        setCodeError('잘못된 인증번호입니다.');
      }
    }
  };

  const onSubmit = async (data: SignupFormData) => {
    try {
      if (!isEmailVerified) {
        alert('이메일 인증을 완료해주세요.');
        return;
      }
      if (data.email !== verifiedEmail) {
        alert('인증된 이메일과 입력한 이메일이 일치하지 않습니다.');
        return;
      }
      
      await signupMutation.mutateAsync({
        email: data.email,
        name: data.name,
        password: data.password,
        studentNumber: data.studentNumber,
        phone: data.phone,
      });
      
      console.log('회원가입 성공');
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <form className={styles.signupWrapper}>
      <SignupForm
        type='email'
        value={emailValue}
        onChange={handleEmailChange}
        onButtonClick={handleEmailVerification}
        verificationSent={isEmailSent}
        error={emailError || errors.email?.message}
      />
      <SignupForm
        type='emailVerification'
        value={verificationCodeValue}
        onChange={handleVerificationCodeChange}
        onButtonClick={handleCodeVerification}
        buttonDisabled={!verificationCodeValue || verificationCodeValue.length !== 6}
        showSuccessMessage={isEmailVerified}
        error={codeError || errors.verificationCode?.message}
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
