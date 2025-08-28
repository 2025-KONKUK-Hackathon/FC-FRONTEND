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
