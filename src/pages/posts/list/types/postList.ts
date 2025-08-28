export interface PostListContent {
  postId: number;
  writerId: number;
  writerName: string;
  title: string;
  content: string;
  commentCount: number;
  imageUrl: string;
  createdAt: string;
  grade: string; // todo: 드롭다운 필터 PR 머지 후 유니온 타입 지정
  affiliation: string; // todo: 드롭다운 필터 PR 머지 후 유니온 타입 지정
  part: string; // todo: 드롭다운 필터 PR 머지 후 유니온 타입 지정
  topic: string; // todo: 드롭다운 필터 PR 머지 후 유니온 타입 지정
  cursor: number;
  isAnnouncement: boolean;
}

export interface PostListData {
  content: PostListContent[];
  nextCursor: number;
  isLast: boolean;
}
