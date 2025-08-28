import { useQuery } from '@tanstack/react-query';
import { request } from '@api/request';
import { POST_KEY } from '@shared/constant/queryKey';
import { HTTPMethod } from '@api/request';
import type { PostDetailResponse, PostCommentResponse } from '../types/postTypes';

export const usePostDetail = (postId: number | undefined) => {
  // 겟시판 상세 조회
  const {
    data: postDetail,
  } = useQuery({
    queryKey: POST_KEY.POST_DETAIL(postId || 0),
    queryFn: () => 
      request<PostDetailResponse>({
        method: HTTPMethod.GET,
        url: `/posts/${postId}`,
      }),
    enabled: !!postId,
  });

  // 게시글 댓글 조회
  const {
    data: commentsData,
  } = useQuery({
    queryKey: POST_KEY.POST_COMMENTS(postId || 0),
    queryFn: () =>
      request<PostCommentResponse>({
        method: HTTPMethod.GET,
        url: `/posts/${postId}/comments`,
      }),
    enabled: !!postId,
  });

  return { postDetail, commentsData };
};
