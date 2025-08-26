export interface PostDetailData {
  writerName: string;
  writerId: number;
  title: string;
  content: string;
  createdAt: string;
  commentCount: number;
  imageUrls?: string[];
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
