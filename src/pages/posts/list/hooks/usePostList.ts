import { useInfiniteQuery } from '@tanstack/react-query';
import { request } from '@api/request';
import { HTTPMethod } from '@api/request';
import { type PostListData } from '../types/postList';
import { POSTS_KEY } from '@shared/constant/queryKey';

export const usePostList = (size = 20) => {
  const {
    data,
    isPending: isPostListPending,
    error: postListError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: POSTS_KEY.POSTS_LIST(), // todo: types에 쿼리키 설정
    queryFn: ({ pageParam = null }: { pageParam: number | null }) =>
      request<PostListData>({
        method: HTTPMethod.GET,
        url: `/posts?${pageParam ? `cursorId=${pageParam}&` : ''}size=${size}`,
      }),
    getNextPageParam: (lastPage) => {
      // lastPage: 서버에서 내려온 응답(PostListData 타입)
      return lastPage.isLast ? undefined : lastPage.nextCursor;
    },
    initialPageParam: null as number | null,
  });

  // 모든 페이지의 content를 하나의 배열로 합침
  const postListResult = data ? {
    content: data.pages.flatMap((page: PostListData) => page.content),
    isLast: data.pages[data.pages.length - 1]?.isLast ?? true,
  } : undefined;

  return {
    postListResult, 
    isPostListPending, 
    postListError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
