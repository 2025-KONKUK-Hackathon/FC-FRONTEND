// 모임
import type { DropDownOption } from "@shared/components/dropDown/constant/dropDown";

export const CLASS_CATEGORY = {
  STUDY: { text: "스터디", icon: "📚", color: "Pink" },
  PROJECT: { text: "프로젝트", icon: "💻", color: "Blue" },
  EVENT: { text: "과행사", icon: "🎊", color: "Green" },
  FRIENDSHIP: { text: "친목", icon: "🤝", color: "Orange" },
  ETC: { text: "기타", icon: "🌈", color: "White" },
  ANNOUNCEMENT: { text: "공지사항", icon: "📢", color: "Red" },
} as const;

export const CLASS_CATEGORY_OPTIONS: DropDownOption[] = Object.entries(
  CLASS_CATEGORY
).map(([key, value]) => ({
  value: key,
  label: `${value.icon} ${value.text}`,
}));

export type ClassCategory =
  (typeof CLASS_CATEGORY)[keyof typeof CLASS_CATEGORY];

export type ClassCategoryKey = keyof typeof CLASS_CATEGORY;