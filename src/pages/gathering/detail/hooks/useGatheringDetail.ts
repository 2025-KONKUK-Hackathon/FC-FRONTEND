import { useQuery } from "@tanstack/react-query";
import { request } from "@/api/request";
import { GATHERING_KEY } from "@shared/constant/queryKey";
import type {
  GatheringDetailResponse,
  GatheringMemberResponse,
} from "../types/Gathering";

export const useGatheringDetail = (id: string | undefined) => {
  // 모임 상세 정보 조회
  const {
    data: meetingDetail,
    isPending: isMeetingPending,
    error: meetingError,
  } = useQuery({
    queryKey: GATHERING_KEY.GATHERING_DETAIL(id || ""),
    queryFn: () =>
      request<GatheringDetailResponse>({
        method: "GET",
        url: `/meetings/${id}`,
      }),
    enabled: !!id,
  });

  // 멤버 목록 조회
  const {
    data: memberList = [],
    isPending: isMemberPending,
    error: memberError,
  } = useQuery({
    queryKey: GATHERING_KEY.GATHERING_MEMBERS(id || ""),
    queryFn: () =>
      request<GatheringMemberResponse[]>({
        method: "GET",
        url: `/meetings/${id}/members`,
      }),
    enabled: !!id,
  });

  return {
    meetingDetail,
    memberList,
    isMeetingPending,
    isMemberPending,
    meetingError,
    memberError,
  };
};
