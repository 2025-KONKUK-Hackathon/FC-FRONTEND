import type { CLASS_CATEGORY } from "@shared/constant/class";

export interface GatheringDetailResponse {
  meetingName: string;
  content: string;
  category: keyof typeof CLASS_CATEGORY;
  meetingStatus: string;
  recruitNumber: number;
  currentRecruitCount: number;
  recruitStartDate: string;
  recruitEndDate: string;
  actualStartDate: string;
  actualEndDate: string;
  hostName: string;
  imageUrls: string[];
  isHost: boolean;
}

export interface GatheringMemberResponse {
  meetingMemberId: number;
  name: string;
  phone: string;
  studentNumber: string;
  registerAt: string;
}

export interface GatheringDetailProps extends GatheringDetailResponse {
  memberList: GatheringMemberResponse[];
}
