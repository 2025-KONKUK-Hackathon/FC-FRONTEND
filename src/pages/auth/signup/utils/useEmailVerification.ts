import { useMutation } from '@tanstack/react-query';
import { request } from '@/api/request';

export interface EmailVerificationConfirmRequest {
  email: string;
  code: string;
}

export type EmailVerificationConfirmResponse = null;

export const useEmailVerification = () => {
  return useMutation({
    mutationFn: (verificationData: EmailVerificationConfirmRequest): Promise<EmailVerificationConfirmResponse> =>
      request<EmailVerificationConfirmResponse>({
        method: 'POST',
        url: '/users/emails/verifications',
        body: { email: verificationData.email, code: verificationData.code },
      }),
    onSuccess: (data) => {
      console.log('이메일 인증 확인 성공:', data);
    },
    onError: (error) => {
      console.error('이메일 인증 확인 실패:', error);
    },
  });
};
