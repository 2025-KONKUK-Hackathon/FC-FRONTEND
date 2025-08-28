export const GATHERING_KEY = {
  ALL: ["gathering"],
  GATHERING_LIST: () => [...GATHERING_KEY.ALL, "list"],
  GATHERING_DETAIL: (id: string) => [...GATHERING_KEY.ALL, id],
  GATHERING_MEMBERS: (id: string) => [
    ...GATHERING_KEY.GATHERING_DETAIL(id),
    "members",
  ],
  GATHERING_MEMBER: (id: string, memberId: string) => [
    ...GATHERING_KEY.GATHERING_MEMBERS(id),
    memberId,
  ],
} as const;

export const POST_KEY = {
  ALL: ["post"],
  POST_LIST: () => [...POST_KEY.ALL, "list"],
  POST_DETAIL: (id: number) => [...POST_KEY.ALL, id],
  POST_COMMENTS: (id: number) => [
    ...POST_KEY.POST_DETAIL(id),
    "comments"
  ],
} as const;
