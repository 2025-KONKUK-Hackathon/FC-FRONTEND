export const STATUS = {
  NOT_STARTED: '모집전',
  IN_PROGRESS: '모집중',
  FINISHED: '모집마감',
} as const;

export type StatusType = keyof typeof STATUS;
