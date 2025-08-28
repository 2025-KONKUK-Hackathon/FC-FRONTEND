import { GRADE, AFFILIATION, PART, TOPIC } from '../constant/PostKeyword';

export interface PostDetailResponse {
  writerName: string;
  writerId: number;
  title: string;
  content: string;
  createdAt: string;
  commentCount: number;
  imageUrls?: string[];
  grade: keyof typeof GRADE;
  affiliation: keyof typeof AFFILIATION;
  part: keyof typeof PART;
  topic: keyof typeof TOPIC;
}

interface CommnetItem {
    commentId: number;
    writerId: number;
    writerName: string;
    content: string;
    createdAt: string;
    cursor: number;
}

export interface PostCommentResponse {
  content: CommnetItem[],
  nextCursor: number;
  isLast: boolean;
}
