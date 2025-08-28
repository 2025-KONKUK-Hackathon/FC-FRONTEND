import { useMutation, useQueryClient } from '@tanstack/react-query';
import { request, HTTPMethod } from '@/api/request';
import type { BaseResponse } from '@api/types';
import { GATHERING_KEY } from '@shared/constant/queryKey';
import { type GatherCreateRequest } from '../types/GatherCreate';

export const useGatherCreateMutations = () => {
  const queryClient = useQueryClient();

  const createGatheringMutation = useMutation({
    mutationFn: (requestBody: GatherCreateRequest): Promise<BaseResponse<Record<string, never>>> =>
      request<BaseResponse<Record<string, never>>>({
        method: HTTPMethod.POST,
        url: '/meetings',
        body: requestBody,
      }),
    onSuccess: () => {
      console.log('성공~');
      queryClient.invalidateQueries({
        queryKey: GATHERING_KEY.GATHERING_LIST(),
      });
    },
    onError: () => {
      alert('모임 생성에 실패했습니다.');
    },
  });

  return {
    createGatheringMutation,
  };
};
