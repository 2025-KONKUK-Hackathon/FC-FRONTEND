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
