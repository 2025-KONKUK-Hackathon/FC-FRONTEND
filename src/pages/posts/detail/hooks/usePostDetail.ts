import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { request } from '@api/request';
import { POSTS_KEY } from '@shared/constant/queryKey';
import { HTTPMethod } from '@api/request';
import type { PostDetailResponse, PostCommentResponse } from '../types/postTypes';

export const usePostDetail = (postId: string) => {
  // 게시판 상세 조회
  const { data: postDetail } = useQuery({
    queryKey: POSTS_KEY.POSTS_DETAIL(postId),
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
    queryKey: POSTS_KEY.POSTS_COMMENTS(postId),
    queryFn: ({ pageParam = null }: { pageParam: number | null }) =>
      request<PostCommentResponse>({
        method: HTTPMethod.GET,
        url: `/posts/${postId}/comments?${pageParam ? `cursorId=${pageParam}&` : ''}size=10`,
      }),
    getNextPageParam: lastPage => {
      // 1. 마지막으로 불러온 페이지가 비어있거나, 서버에서 마지막 페이지라고 알려주면 중단
      if (lastPage.isLast || !lastPage.content || lastPage.content.length === 0) {
        return undefined;
      }

      // 2. 마지막으로 수신된 댓글의 ID(또는 cursor)를 가져옵니다.
      //    (postTypes.ts의 CommentItem에 cursor 필드가 없다면 commentId를 사용합니다)
      const lastCommentId = lastPage.content[lastPage.content.length - 1].commentId;

      // 3. 서버가 보내준 다음 커서(nextCursor)와 마지막 댓글 ID를 비교합니다.
      //    만약 두 값이 같다면, 서버가 같은 페이지를 반복해서 보내고 있다는 의미이므로
      //    무한 루프 방지를 위해 여기서 중단(undefined 반환)합니다.
      if (lastPage.nextCursor === lastCommentId) {
        console.warn('무한 루프 가능성이 있어 다음 페이지 로드를 중단합니다.');
        return undefined;
      }

      // 4. 모든 조건에 해당하지 않으면, 정상적으로 다음 커서를 반환합니다.
      return lastPage.nextCursor;
    },
    enabled: !!postId,
    initialPageParam: null as number | null,
  });

  // 모든 페이지의 댓글을 하나의 배열로 합침
  const commentsResult = commentsData
    ? {
        content: commentsData.pages.flatMap((page: PostCommentResponse) => page.content).reverse(),
        isLast: commentsData.pages[commentsData.pages.length - 1]?.isLast ?? true,
      }
    : undefined;

  return {
    postDetail,
    commentsData,
    commentsResult,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
};
