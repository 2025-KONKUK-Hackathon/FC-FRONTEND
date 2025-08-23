export const PART_CATEGORY = {
  WEB: { text: "웹", icon: "🌐", color: "Coral" },
  SERVER: { text: "서버", icon: "🤖", color: "Ocean" },
  ETC: { text: "기타", icon: "🌈", color: "White" },
} as const;

export type PartCategory = (typeof PART_CATEGORY)[keyof typeof PART_CATEGORY];
