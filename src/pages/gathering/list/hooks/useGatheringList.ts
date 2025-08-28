import { useInfiniteQuery } from '@tanstack/react-query';
import { request } from '@api/request';
import { HTTPMethod } from '@api/request';
import { type GatheringListData } from '../types/gatheringList';
import { GATHERING_KEY } from '@shared/constant/queryKey';

export const useGatheringList = (size = 5) => {
  const {
    data,
    isPending: isGatheringListPending,
    error: gatheringListError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: GATHERING_KEY.GATHERING_LIST(), // todo: types에 쿼리키 설정
    queryFn: ({ pageParam = null }: { pageParam: number | null }) =>
      request<GatheringListData>({
        method: HTTPMethod.GET,
        url: `/meetings?${pageParam ? `cursorId=${pageParam}&` : ''}size=${size}`,
      }),
    getNextPageParam: (lastPage) => {
      return lastPage.isLast ? undefined : lastPage.nextCursor;
    },
    initialPageParam: null as number | null,
  });

  // 모든 페이지의 content를 하나의 배열로 합침
  const gatheringListResult = data ? {
    content: data.pages.flatMap((page: GatheringListData) => page.content),
    isLast: data.pages[data.pages.length - 1]?.isLast ?? true,
  } : undefined;

  return {
    gatheringListResult, 
    isGatheringListPending, 
    gatheringListError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};