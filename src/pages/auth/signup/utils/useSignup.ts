import { useMutation } from '@tanstack/react-query';
import { request } from '@/api/request';

export interface SignupRequest {
  email: string;
  name: string;
  password: string;
  studentNumber: string;
  phone: string;
}

export type SignupResponse = Record<string, never>;

export const useSignup = () => {
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
    onSuccess: (data) => {
      console.log('회원가입 성공:', data);
    },
    onError: (error) => {
      console.error('회원가입 실패:', error);
    },
  });
};
