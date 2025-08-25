export const GATHERING_STATUS = {
  NOT_STARTED: '모집전',
  IN_PROGRESS: '모집중',
  FINISHED: '모집완료',
} as const;

export type GatheringStatus = keyof typeof GATHERING_STATUS;
