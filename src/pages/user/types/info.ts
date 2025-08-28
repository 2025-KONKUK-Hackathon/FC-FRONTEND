import type { AffiliationCategoryKey } from '@shared/constant/affiliation';
import type { Grade } from '@shared/constant/grade';
import type { Part } from '@shared/constant/part';
import type { Subject } from '@shared/constant/subject';
import type { StatusType } from '@shared/constant/status';

export interface UserInfoResponse {
  name: string;
  phoneNumber: string;
  studentNumber: string;
}

export interface UserMeetingResponse {
  content: [
    {
      meetingId: number;
      hostName: string;
      meetingName: string;
      content: string;
      recruitNumber: number;
      currentRecruitCount: number;
      category: Subject;
      status: StatusType;
      imageUrl: string;
      cursor: number;
    },
  ];
  nextCursor: number;
  isLast: boolean;
}

export interface UserScrapResponse {
  content: [
    {
      postId: number;
      writerId: number;
      writerName: string;
      title: string;
      content: string;
      commentCount: number;
      imageUrl: string;
      createdAt: string;
      grade: Grade;
      affiliation: AffiliationCategoryKey;
      part: Part;
      topic: Subject;
      cursor: number;
    },
  ];
  nextCursor: number;
  isLast: boolean;
}
