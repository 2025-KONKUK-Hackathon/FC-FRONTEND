import { useMutation } from '@tanstack/react-query';
import { request } from '@/api/request';
import { HTTPMethod } from '@/api/request';
import { useNavigate } from 'react-router-dom';
import type { BaseResponse } from '@api/types';

export interface SignupRequest {
  email: string;
  name: string;
  password: string;
  studentNumber: string;
  phone: string;
}

export type SignupResponse = Record<string, never>;

export const useSignupMutations = () => {
  const navigation = useNavigate();

  // 회원가입
  const signupMutation = useMutation({
    mutationFn: (signupData: SignupRequest) =>
      request<BaseResponse<SignupResponse>>({
        method: HTTPMethod.POST,
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

  // 인증번호 확인
  const verificationConfirmMutation = useMutation({
    mutationFn: (data: { email: string; code: string }) =>
      request<BaseResponse<SignupResponse>>({
        method: HTTPMethod.POST,
        url: '/users/emails/verifications',
        query: {
          email: data.email,
          code: data.code,
        },
      }),
    onSuccess: () => {
      console.info('인증번호 확인 성공');
    },
    onError: (error) => {
      console.error('인증번호 확인 실패:', error);
    },
  });

  // 인증번호 전송
  const verificationRequestMutation = useMutation({
    mutationFn: (data: { email: string }) =>
      request<BaseResponse<SignupResponse>>({
        method: HTTPMethod.POST,
        url: '/users/emails/verification-requests',
        body: data,
      }),
    onSuccess: () => {
      console.info('인증번호 전송 성공');
    },
    onError: (error) => {
      console.error('인증번호 전송 실패:', error);
    },
  });

  return {
    signupMutation,
    verificationConfirmMutation,
    verificationRequestMutation,
  };
};
