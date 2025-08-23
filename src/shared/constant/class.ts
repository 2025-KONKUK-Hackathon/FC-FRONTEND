export const CLASS_CATEGORY = {
  STUDY: { text: "스터디", icon: "📚", color: "Pink" },
  PROJECT: { text: "프로젝트", icon: "💻", color: "Blue" },
  EVENT: { text: "과행사", icon: "🎊", color: "Green" },
  FRIENDSHIP: { text: "친목", icon: "🤝", color: "Orange" },
  ETC: { text: "기타", icon: "🌈", color: "White" },
  ANNOUCEMENT: { text: "공지", icon: "📢", color: "Red" },
} as const;

export type ClassCategory =
  (typeof CLASS_CATEGORY)[keyof typeof CLASS_CATEGORY];
