import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from './useLogin';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, '이메일을 입력해주세요')
    .email('올바른 이메일 형식이 아닙니다')
    .regex(
      /^[a-zA-Z0-9._%+-]+@konkuk\.ac\.kr$/,
      '건국대학교 이메일(@konkuk.ac.kr)을 사용해주세요'
    ),
  
  password: z
    .string()
    .min(3, '비밀번호는 최소 8자 이상이어야 합니다')
    .max(20, '비밀번호는 최대 20자까지 가능합니다'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState<string>('');
  const loginMutation = useLogin();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const login = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      setLoginError('');
      const result = await loginMutation.mutateAsync(data);
      return { success: true, data: result };
    } catch (error) {
      console.error('로그인 실패:', error);
      const errorMessage = '비밀번호를 잘못 입력하셨거나 등록되지 않은 이메일 입니다.';
      setLoginError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    loginError,
    login,
  };
};