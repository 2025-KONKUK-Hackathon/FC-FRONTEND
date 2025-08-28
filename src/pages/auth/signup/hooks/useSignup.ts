import { useMutation } from '@tanstack/react-query';
import { request } from '@/api/request';
import { useNavigate } from 'react-router-dom';

export interface SignupRequest {
  email: string;
  name: string;
  password: string;
  studentNumber: string;
  phone: string;
}

export type SignupResponse = Record<string, never>;

export const useSignup = () => {
  const navigation = useNavigate();

  return useMutation({
    mutationFn: (signupData: SignupRequest): Promise<SignupResponse> =>
      request<SignupResponse>({
        method: 'POST',
        url: '/users/signup',
        body: {
          email: signupData.email,
          name: signupData.name,
          password: signupData.password,
          studentNumber: signupData.studentNumber,
          phone: signupData.phone,
        },
      }),
    onSuccess: () => {
      console.info('회원가입 성공');
      navigation('/login');
    },
    onError: (error) => {
      console.error('회원가입 실패:', error);
    },
  });
};
