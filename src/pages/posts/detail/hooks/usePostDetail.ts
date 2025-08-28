import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { request } from '@api/request';
import { POST_KEY } from '@shared/constant/queryKey';
import { HTTPMethod } from '@api/request';
import type { PostDetailResponse, PostCommentResponse } from '../types/postTypes';

export const usePostDetail = (postId: number | undefined) => {
  // 게시판 상세 조회
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

  // 게시글 댓글 조회 (무한 스크롤)
  const {
    data: commentsData,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: POST_KEY.POST_COMMENTS(postId || 0),
    queryFn: ({ pageParam = null }: { pageParam: number | null }) =>
      request<PostCommentResponse>({
        method: HTTPMethod.GET,
        url: `/posts/${postId}/comments?${pageParam ? `cursorId=${pageParam}&` : ''}size=10`,
      }),
    getNextPageParam: (lastPage) => {
      return lastPage.isLast ? undefined : lastPage.nextCursor;
    },
    enabled: !!postId,
    initialPageParam: null as number | null,
  });

  // 모든 페이지의 댓글을 하나의 배열로 합침
  const commentsResult = commentsData ? {
    content: commentsData.pages.flatMap((page: PostCommentResponse) => page.content),
    isLast: commentsData.pages[commentsData.pages.length - 1]?.isLast ?? true,
  } : undefined;

  return { 
    postDetail, 
    commentsData,
    commentsResult,
    hasNextPage, 
    isFetchingNextPage, 
    fetchNextPage 
  };
};
