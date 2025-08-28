import { useMutation } from '@tanstack/react-query';
import { request } from '@/api/request';
import type { LoginFormData } from './useLoginForm';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  userId: number;
}

export const useLogin = () => {
  return useMutation({
    mutationFn: (loginData: LoginFormData): Promise<LoginResponse> =>
      request<LoginResponse>({
        method: 'POST',
        url: '/auth/login',
        body: loginData,
      }),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('userId', data.userId.toString());
    },
    onError: (error) => {
      console.error('로그인 실패:', error);
    },
  });
};
