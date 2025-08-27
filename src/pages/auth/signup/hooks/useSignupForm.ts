import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRequestVerification } from '../utils/useRequestVerification';
import { useEmailVerification } from '../utils/useEmailVerification';
import { useSignup } from '../utils/useSignup';

export const signupSchema = z.object({
  email: z
    .string()
    .min(1, '이메일을 입력해주세요')
    .email('올바른 이메일 형식이 아닙니다')
    .regex(
      /^[a-zA-Z0-9._%+-]+@konkuk\.ac\.kr$/,
      '건국대학교 이메일(@konkuk.ac.kr)을 사용해주세요'
    ),
  
  verificationCode: z
    .string()
    .min(1, '인증번호를 입력해주세요')
    .length(6, '인증번호는 6자리여야 합니다')
    .regex(/^\d{6}$/, '인증번호는 숫자 6자리여야 합니다'),
  
  password: z
    .string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다')
    .max(20, '비밀번호는 최대 20자까지 가능합니다'),
  
  name: z
    .string()
    .min(1, '이름을 입력해주세요')
    .min(2, '이름은 최소 2자 이상이어야 합니다')
    .max(10, '이름은 최대 10자까지 가능합니다')
    .regex(
      /^[가-힣a-zA-Z\s]+$/,
      '이름은 한글 또는 영문만 입력 가능합니다'
    ),

  studentNumber: z
    .string()
    .min(1, '학번을 입력해주세요')
    .regex(/^\d{9}$/, '학번은 9자리 숫자여야 합니다'),

  phone: z
    .string()
    .min(1, '전화번호를 입력해주세요')
    .regex(/^\d{11}$/, '전화번호는 11자리 숫자여야 합니다'),
});

export type SignupFormData = z.infer<typeof signupSchema>;

export const useSignupForm = () => {
  const requestVerificationMutation = useRequestVerification();
  const emailVerificationMutation = useEmailVerification();
  const signupMutation = useSignup();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [emailError, setEmailError] = useState<string>('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState<string>('');
  const [codeError, setCodeError] = useState<string>('');

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      verificationCode: '',
      password: '',
      name: '',
      studentNumber: '',
      phone: '',
    },
  });

  // 이메일 인증 요청
  const requestEmailVerification = async (email: string) => {
    try {
      console.log('이메일 인증 요청:', email);
      setEmailError('');
      await requestVerificationMutation.mutateAsync({ email });
      setIsEmailSent(true);
      return { success: true };
    } catch (error: unknown) {
      console.error('이메일 인증 요청 실패:', error);
      setIsEmailSent(false);
      
      // 409 상태 코드인 경우 이미 존재하는 이메일
      if (error && typeof error === 'object' && 'response' in error && 
          error.response && typeof error.response === 'object' && 'status' in error.response && 
          error.response.status === 409) {
        const errorMessage = '이미 존재하는 이메일 입니다.';
        setEmailError(errorMessage);
        return { success: false, error: errorMessage };
      }
      
      const errorMessage = '이메일 인증 요청에 실패했습니다.';
      setEmailError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  // 인증번호 확인
  const verifyCode = async (code: string) => {
    try {
      console.log('인증번호 확인:', code);
      setCodeError('');
      const currentEmail = form.getValues('email');
      if (!currentEmail) {
        return { success: false, error: '이메일을 먼저 입력해주세요.' };
      }
      
      await emailVerificationMutation.mutateAsync({ 
        email: currentEmail, 
        code: code 
      });
      setIsEmailVerified(true);
      setVerifiedEmail(currentEmail);
      return { success: true };
    } catch (error: unknown) {
      console.error('인증번호 확인 실패:', error);
      
      // 400 상태 코드인 경우 인증번호 불일치
      if (error && typeof error === 'object' && 'response' in error && 
          error.response && typeof error.response === 'object' && 'status' in error.response && 
          error.response.status === 400) {
        const errorMessage = '인증번호가 일치하지 않습니다.';
        setCodeError(errorMessage);
        return { success: false, error: errorMessage };
      }

      const errorMessage = '잘못된 인증번호입니다.';
      setCodeError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  // 회원가입 완료
  const submitSignup = async (data: SignupFormData) => {
    try {
      if (!isEmailVerified) {
        return { success: false, error: '이메일 인증을 완료해주세요.' };
      }
      if (data.email !== verifiedEmail) {
        return { success: false, error: '인증된 이메일과 입력한 이메일이 일치하지 않습니다.' };
      }
      
      await signupMutation.mutateAsync({
        email: data.email,
        name: data.name,
        password: data.password,
        studentNumber: data.studentNumber,
        phone: data.phone,
      });
      
      return { success: true };
    } catch (error) {
      console.error('회원가입 실패:', error);
      return { success: false, error: '회원가입에 실패했습니다.' };
    }
  };

  return {
    form,
    isEmailSent,
    emailError,
    isEmailVerified,
    codeError,
    requestEmailVerification,
    verifyCode,
    submitSignup,
  };
};