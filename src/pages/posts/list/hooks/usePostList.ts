import { useQuery } from '@tanstack/react-query';
import { request } from '@api/request';
import { HTTPMethod } from '@api/request';
import { type PostListData } from '../types/postList';

export const usePostList = (cursorId: number, size = 10) => {
  const {
    data: postList,
    isPending: isPostListPending,
    error: postListError,
  } = useQuery({
    queryKey: ['PostList'], // todo: types에 쿼리키 설정
    queryFn: () =>
      request<PostListData>({
        method: HTTPMethod.GET,
        url: `/posts?cursorId=${cursorId}&size=${size}`,
      }),
  });

  return { postList, isPostListPending, postListError };
};
