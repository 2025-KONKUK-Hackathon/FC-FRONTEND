import { useMutation, useQueryClient } from '@tanstack/react-query';
import { request, HTTPMethod } from '@/api/request';
import type { BaseResponse } from '@api/types';
import { POSTS_KEY } from '@shared/constant/queryKey';
import type { PostsCreateRequest, MediaUrl } from '../types/PostsCreate';
import { useNavigate } from 'react-router-dom';
import { handleApiError, showSuccessToast } from '@shared/utils/errorHandler';

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
      showSuccessToast('게시물이 성공적으로 생성되었습니다!');
      queryClient.invalidateQueries({
        queryKey: POSTS_KEY.POSTS_LIST(),
      });
      navigate('/');
    },
    onError: (error) => {
      handleApiError(error, '게시물 생성에 실패했습니다.');
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
    onError: (error) => {
      handleApiError(error, 'Presigned URL 생성에 실패했습니다.');
    },
  });

  const uploadFiles = async (presignedUrls: string[], files: File[]) => {
    console.log(presignedUrls, files);
    const uploadPromises = presignedUrls.map(async (presignedUrl, index) => {
      const file = files[index];
      if (!presignedUrl || !file) return;

      try {
        const response = await fetch(presignedUrl, {
          method: 'PUT',
          body: file,
          headers: {
            'Content-Type': file.type,
          },
        });

        if (response.ok) {
          console.log(`${file.type} 파일 ${index + 1} 업로드 완료`);
        } else {
          console.error(`${file.type} 파일 ${index + 1} 업로드 실패:`, response.status);
        }
      } catch (error) {
        console.error(`${file.type} 파일 ${index + 1} 업로드 에러:`, error);
      }
    });

    await Promise.all(uploadPromises);
  };

  return {
    createPostsMutation,
    postPresignedUrl,
    uploadFiles,
  };
};
