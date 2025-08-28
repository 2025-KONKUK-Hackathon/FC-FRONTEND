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
  isAnnouncement: boolean;
  isScrapped: boolean;
}

interface CommentItem {
  commentId: number;
  writerId: number;
  writerName: string;
  content: string;
  createdAt: string;
  cursor: number;
}

export interface PostCommentResponse {
  content: CommentItem[];
  nextCursor: number;
  isLast: boolean;
}

export interface AddCommentRequest {
  postId: string;
  content: string;
}
