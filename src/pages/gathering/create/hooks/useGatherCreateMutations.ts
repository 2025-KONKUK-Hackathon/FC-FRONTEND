import { useMutation, useQueryClient } from '@tanstack/react-query';
import { request, HTTPMethod } from '@/api/request';
import type { BaseResponse } from '@api/types';
import { GATHERING_KEY } from '@shared/constant/queryKey';
import { type GatherCreateRequest } from '../types/GatherCreate';
import { useNavigate } from 'react-router-dom';
import type { MediaUrl } from '@pages/posts/create/types/PostsCreate';

export const useGatherCreateMutations = () => {
  const navigate = useNavigate();
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
      navigate('/');
    },
    onError: () => {
      alert('모임 생성에 실패했습니다.');
    },
  });
  const postPresignedUrl = useMutation({
    mutationFn: (mediaType: string[]): Promise<MediaUrl> =>
      request<MediaUrl>({
        method: HTTPMethod.POST,
        url: '/images/upload',
        body: { mediaType },
      }),
    onSuccess: data => {
      console.log('Presigned URL 생성 성공');
      return data;
    },
    onError: () => {
      alert('Presigned URL 생성에 실패했습니다.');
    },
  });

  return {
    createGatheringMutation,
    postPresignedUrl,
  };
};
