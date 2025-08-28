import { useMutation, useQueryClient } from '@tanstack/react-query';
import { request, HTTPMethod } from '@/api/request';
import type { BaseResponse } from '@api/types';
import { POSTS_KEY } from '@shared/constant/queryKey';
import type { PostsCreateRequest, MediaUrl } from '../types/PostsCreate';
import { useNavigate } from 'react-router-dom';

export const usePostsCreateMutations = () => {
  const navigate = useNavigate();
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
      navigate('/');
    },
    onError: () => {
      alert('게시물 생성에 실패했습니다.');
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
  const putPresignedUrl = useMutation({
    mutationFn: (mediaUrl: MediaUrl): Promise<BaseResponse<Record<string, never>>> =>
      request<BaseResponse<Record<string, never>>>({
        method: HTTPMethod.PUT,
        url: '/images/upload',
        body: mediaUrl,
      }),
    onSuccess: () => {
      console.log('Presigned URL 생성 성공');
    },
    onError: () => {
      alert('Presigned URL 생성에 실패했습니다.');
    },
  });

  return {
    createPostsMutation,
    postPresignedUrl,
    putPresignedUrl,
  };
};
