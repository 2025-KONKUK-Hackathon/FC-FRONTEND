export interface CommentData {
  id: number;
  author: {
    userName: string;
    userId: number;
  };
  content: string;
  createdAt: Date;
  likes?: number;
  isLiked?: boolean;
  replies?: CommentData[];
}

export interface CommentActionProps {
  onDelete?: (commentId: number) => void;
  onLike?: (commentId: number) => void;
  onReply?: (commentId: number, content: string) => void;
} 

export const COMMENT_VARIANTS = {
  DEFAULT: 'default',
  REPLY: 'reply'
} as const;

export type CommentVariant = typeof COMMENT_VARIANTS[keyof typeof COMMENT_VARIANTS];
