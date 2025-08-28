import { useMutation, useQueryClient } from '@tanstack/react-query';
import { request, HTTPMethod } from '@/api/request';
import type { BaseResponse } from '@api/types';
import { GATHERING_KEY } from '@shared/constant/queryKey';
import { type GatherCreateRequest } from '../types/GatherCreate';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@router/constant/Routes';
import { handleApiError, showSuccessToast } from '@shared/utils/errorHandler';
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
      showSuccessToast('모임이 성공적으로 생성되었습니다!');
      queryClient.invalidateQueries({
        queryKey: GATHERING_KEY.GATHERING_LIST(),
      });
      navigate(ROUTES.GATHERING.LIST);
    },
    onError: (error) => {
      handleApiError(error, '모임 생성에 실패했습니다.');
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
    createGatheringMutation,
    postPresignedUrl,
    uploadFiles,
  };
};
