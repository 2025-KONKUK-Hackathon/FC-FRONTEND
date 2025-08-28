import { useMutation } from '@tanstack/react-query';
import { request } from '@/api/request';

export type EmailVerificationRequest = {
  email: string;
}

export type EmailVerificationResponse = Record<string, never>;

export const useRequestVerification = () => {
  return useMutation({
    mutationFn: (emailData: EmailVerificationRequest): Promise<EmailVerificationResponse> =>
      request<EmailVerificationResponse>({
        method: 'POST',
        url: '/users/emails/verification-requests',
        body: { email: emailData.email },
      }),
    onSuccess: () => {
      console.info('이메일 인증 요청 성공');
    },
    onError: (error) => {
      console.error('이메일 인증 요청 실패:', error);
    },
  });
};
