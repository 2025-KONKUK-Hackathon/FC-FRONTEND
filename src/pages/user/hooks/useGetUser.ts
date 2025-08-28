import { useQuery } from '@tanstack/react-query';
import { request } from '@/api/request';
import { USER_KEY } from '@shared/constant/queryKey';
import type { UserInfoResponse, UserMeetingResponse, UserScrapResponse } from '../types/info';

export const useGetUserInfo = () => {
  // 모임 상세 정보 조회
  const {
    data: userInfo,
    isPending: isUserInfoPending,
    error: userInfoError,
  } = useQuery({
    queryKey: USER_KEY.USER_INFO(),
    queryFn: () =>
      request<UserInfoResponse>({
        method: 'GET',
        url: `/users/info`,
      }),
    enabled: true,
  });

  return {
    userInfo,
    isUserInfoPending,
    userInfoError,
  };
};

export const useGetUserMeeting = () => {
  // 모임 상세 정보 조회
  const {
    data: userMeeting,
    isPending: isUserMeetingPending,
    error: userMeetingError,
  } = useQuery({
    queryKey: USER_KEY.USER_MEETING(),
    queryFn: () =>
      request<UserMeetingResponse>({
        method: 'GET',
        url: `/users/meetings`,
      }),
    enabled: true,
  });

  return {
    userMeeting,
    isUserMeetingPending,
    userMeetingError,
  };
};
export const useGetUserScrap = () => {
  // 모임 상세 정보 조회
  const {
    data: userScrap,
    isPending: isUserScrapPending,
    error: userScrapError,
  } = useQuery({
    queryKey: USER_KEY.USER_SCRAP(),
    queryFn: () =>
      request<UserScrapResponse>({
        method: 'GET',
        url: `/posts/scraps`,
      }),
    enabled: true,
  });

  return {
    userScrap,
    isUserScrapPending,
    userScrapError,
  };
};
