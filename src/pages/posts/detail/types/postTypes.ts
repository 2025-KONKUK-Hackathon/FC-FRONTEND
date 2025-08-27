import { GRADE, AFFILIATION, PART, TOPIC } from '../constant/PostKeyword';

export interface PostDetailData {
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

export interface PostCommentData {
  content: [
    {
      commentId: number;
      writerId: number;
      writerName: string;
      content: string;
      createdAt: string;
      cursor: number;
    }
  ],
  nextCursor: number;
  isLast: boolean;
}
