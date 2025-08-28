export interface GatheringListContent {
  meetingId: number;
  hostName: string;
  meetingName: string;
  content?: string;
  recruitNumber: number;
  currentRecruitCount: number;
  category: string;
  imageUrl: string;
  recruitStatus: string;
  cursor: number;
}

export interface GatheringListData {
  content: GatheringListContent[];
  nextCursor: number;
  isLast: boolean;
}