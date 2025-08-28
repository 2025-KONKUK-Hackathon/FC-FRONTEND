import { useQuery } from '@tanstack/react-query';
import { request } from '@api/request';
import { POST_KEY } from '@shared/constant/queryKey';
import type { PostDetailResponse, PostCommentResponse } from '../types/postTypes';

const fetchPostDetail = async (
  postId: number
): Promise<PostDetailResponse> => {
  return request<PostDetailResponse>({
    method: 'GET',
    url: `/posts/${postId}`,
  });
};

const fetchPostComments = async (
  postId: number, 
  cursor: number, 
  size: number = 10
): Promise<PostCommentResponse> => {
  return request<PostCommentResponse>({
    method: 'GET',
    url: `/posts/${postId}/comments`,
    query: {
      cursor,
      size,
    },
  });
};

// 게시글 상세 조회
export const usePostDetail = (
  postId: number
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: POST_KEY.POST_DETAIL(postId),
    queryFn: () => fetchPostDetail(postId),
    enabled: !!postId,
  });

  return { data, isLoading, error };
};

// 게시글의 댓글 조회
export const useCommentsDetail = (
  postId: number, 
  cursor: number,
  size: number
) => {
  return useQuery({
    queryKey: [...POST_KEY.POST_COMMENTS(postId), cursor, size],
    queryFn: () => fetchPostComments(postId, cursor, size),
    enabled: !!postId,
  });
};
