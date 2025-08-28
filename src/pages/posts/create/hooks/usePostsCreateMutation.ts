import { useMutation, useQueryClient } from '@tanstack/react-query';
import { request, HTTPMethod } from '@/api/request';
import type { BaseResponse } from '@api/types';
import { POSTS_KEY } from '@shared/constant/queryKey';
import { type PostsCreateRequest } from '../types/PostsCreate';

export const usePostsCreateMutations = () => {
  const queryClient = useQueryClient();

  const createPostsMutation = useMutation({
    mutationFn: (requestBody: PostsCreateRequest): Promise<BaseResponse<Record<string, never>>> =>
      request<BaseResponse<Record<string, never>>>({
        method: HTTPMethod.POST,
        url: '/posts',
        body: requestBody,
      }),
    onSuccess: () => {
      console.log('성공~');
      queryClient.invalidateQueries({
        queryKey: POSTS_KEY.POSTS_LIST(),
      });
    },
    onError: () => {
      alert('게시물 생성에 실패했습니다.');
    },
  });

  return {
    createPostsMutation,
  };
};
