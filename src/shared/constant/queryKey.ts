export const GATHERING_KEY = {
  ALL: ['gathering'],
  GATHERING_LIST: () => [...GATHERING_KEY.ALL, 'list'],
  GATHERING_DETAIL: (id: string) => [...GATHERING_KEY.ALL, id],
  GATHERING_MEMBERS: (id: string) => [...GATHERING_KEY.GATHERING_DETAIL(id), 'members'],
  GATHERING_MEMBER: (id: string, memberId: string) => [
    ...GATHERING_KEY.GATHERING_MEMBERS(id),
    memberId,
  ],
} as const;

export const USER_KEY = {
  ALL: ['user'],
  USER_INFO: () => [...USER_KEY.ALL, 'info'],
  USER_MEETING: () => [...USER_KEY.ALL, 'meeting'],
  USER_SCRAP: () => [...USER_KEY.ALL, 'scrap'],
} as const;

export const POSTS_KEY = {
  ALL: ['posts'],
  POSTS_LIST: () => [...POSTS_KEY.ALL, 'list'],
  POSTS_DETAIL: (postId: string) => [...POSTS_KEY.ALL, postId],
  POSTS_COMMENTS: (postId: string) => [...POSTS_KEY.POSTS_DETAIL(postId), 'comments'],
} as const;

export const POST_KEY = {
  ALL: ['post'],
  POST_LIST: () => [...POST_KEY.ALL, 'list'],
  POST_DETAIL: (id: number) => [...POST_KEY.ALL, 'detail', id],
  POST_COMMENTS: (id: number) => [
    ...POST_KEY.POST_DETAIL(id),
    'comments'
  ],
} as const;
