import type { PostDetailData, PostCommentData } from '../types/postTypes';

export const postDetailMock: PostDetailData = {
  writerName: '황규운',
  writerId: 1,
  title: '컴퓨터공학부 동아리 모집',
  content: `안녕하세요! 건국대학교 컴퓨터공학부 프로그래밍 동아리에서 새로운 멤버를 모집합니다.
            안녕하세요! 건국대학교 컴퓨터공학부 프로그래밍 동아리에서 새로운 멤버를 모집합니다.
            안녕하세요! 건국대학교 컴퓨터공학부 프로그래밍 동아리에서 새로운 멤버를 모집합니다.`,
  createdAt: '2025-08-26T16:46:47.503Z',
  commentCount: 5,
  imageUrls: ['img_a', 'img_b', 'img_c', 'img_d'],
  grade: 'FIRST',
  affiliation: 'COMPUTER',
  part: 'SERVER',
  topic: 'CLASS',
};

export const postCommentMock: PostCommentData[] = [
  {
    content: [
      {
        commentId: 1,
        writerId: 123,
        writerName: '이정연',
        content:
          '정말 좋은 동아리네요! 지원하고 싶습니다.정말 좋은 동아리네요! 지원하고 싶습니다.정말 좋은 동아리네요! 지원하고 싶습니다.정말 좋은 동아리네요! 지원하고 싶습니다.정말 좋은 동아리네요! 지원하고 싶습니다.정말 좋은 동아리네요! 지원하고 싶습니다.',
        createdAt: '2025-08-26T16:46:47.493Z',
        cursor: 1,
      },
    ],
    nextCursor: 2,
    isLast: false,
  },
  {
    content: [
      {
        commentId: 2,
        writerId: 1,
        writerName: '황규운',
        content: 'ㅋㅋ',
        createdAt: '2025-08-26T16:46:47.493Z',
        cursor: 2,
      },
    ],
    nextCursor: 3,
    isLast: false,
  },
  {
    content: [
      {
        commentId: 3,
        writerId: 789,
        writerName: '임지성',
        content: 'ㅎㅎ',
        createdAt: '2025-08-26T16:46:47.493Z',
        cursor: 3,
      },
    ],
    nextCursor: 4,
    isLast: false,
  },
  {
    content: [
      {
        commentId: 4,
        writerId: 789,
        writerName: '임지성',
        content: 'ㅎㅎㅎ',
        createdAt: '2025-08-26T16:46:47.493Z',
        cursor: 4,
      },
    ],
    nextCursor: 5,
    isLast: false,
  },
  {
    content: [
      {
        commentId: 5,
        writerId: 789,
        writerName: '임지성',
        content: 'ㅎㅎㅎㅎ',
        createdAt: '2025-08-26T16:46:47.493Z',
        cursor: 5,
      },
    ],
    nextCursor: 6,
    isLast: true,
  },
];
