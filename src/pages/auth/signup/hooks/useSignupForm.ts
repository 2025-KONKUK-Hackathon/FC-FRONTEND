import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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

  const resetEmailVerificationState = () => {
    setIsEmailSent(false);
    setEmailError('');
    setIsEmailVerified(false);
    setVerifiedEmail('');
  };

  return {
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
  };
};