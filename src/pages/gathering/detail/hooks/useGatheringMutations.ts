import { useMutation, useQueryClient } from '@tanstack/react-query';
import { request } from '@/api/request';
import { GATHERING_KEY } from '@shared/constant/queryKey';
import { STATUS } from '@shared/constant/status';
import { handleApiError, showSuccessToast } from '@shared/utils/errorHandler';
import type { BaseResponse } from '@api/types';

export const useGatheringMutations = (id: string | undefined) => {
  const queryClient = useQueryClient();

  // 모임 신청 뮤테이션
  const meetingApplicationMutation = useMutation({
    mutationFn: () =>
      request<BaseResponse<Record<string, never>>>({
        method: 'POST',
        url: `/meetings/${id}`,
      }),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: GATHERING_KEY.GATHERING_DETAIL(id || ''),
      });

      const previousMeeting = queryClient.getQueryData(GATHERING_KEY.GATHERING_DETAIL(id || ''));

      // 낙관적 업데이트: 현재 인원 수 증가
      queryClient.setQueryData(GATHERING_KEY.GATHERING_DETAIL(id || ''), (old: any) => ({
        ...old,
        currentRecruitCount: old.currentRecruitCount + 1,
      }));

      return { previousMeeting };
    },
    onSuccess: () => {
      showSuccessToast('모임 신청이 완료되었습니다!');
      queryClient.invalidateQueries({
        queryKey: GATHERING_KEY.GATHERING_MEMBERS(id || ''),
      });
    },
    onError: (err, _variables, context) => {
      if (context?.previousMeeting) {
        queryClient.setQueryData(GATHERING_KEY.GATHERING_DETAIL(id || ''), context.previousMeeting);
      }
      handleApiError(err, '모임 신청에 실패했습니다.');
    },
  });

  // 모임 마감 뮤테이션
  const meetingCloseMutation = useMutation({
    mutationFn: () =>
      request<BaseResponse<Record<string, never>>>({
        method: 'PATCH',
        url: `/meetings/${id}`,
      }),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: GATHERING_KEY.GATHERING_DETAIL(id || ''),
      });

      const previousMeeting = queryClient.getQueryData(GATHERING_KEY.GATHERING_DETAIL(id || ''));

      // 낙관적 업데이트: 상태를 FINISHED로 변경
      queryClient.setQueryData(GATHERING_KEY.GATHERING_DETAIL(id || ''), (old: any) => ({
        ...old,
        meetingStatus: STATUS.FINISHED,
      }));

      return { previousMeeting };
    },
    onSuccess: () => {
      showSuccessToast('모임이 마감되었습니다.');
      queryClient.invalidateQueries({
        queryKey: GATHERING_KEY.GATHERING_DETAIL(id || ''),
      });
      queryClient.invalidateQueries({
        queryKey: GATHERING_KEY.GATHERING_LIST(),
      });
    },
    onError: (err, _variables, context) => {
      if (context?.previousMeeting) {
        queryClient.setQueryData(GATHERING_KEY.GATHERING_DETAIL(id || ''), context.previousMeeting);
      }
      handleApiError(err, '모임 마감에 실패했습니다.');
    },
  });

  return {
    meetingApplicationMutation,
    meetingCloseMutation,
  };
};
