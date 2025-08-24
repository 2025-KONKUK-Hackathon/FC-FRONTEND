export interface CommentData {
  id: number;
  author: {
    userName: string;
    userId: number;
  };
  content: string;
  createdAt: Date;
}
