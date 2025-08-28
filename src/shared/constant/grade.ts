import type { DropDownOption } from "@shared/components/dropDown/constant/dropDown";

export const GRADE_CATEGORY = {
  FIRST: { text: "1학년", icon: "📊", color: "Charcoal" },
  SECOND: { text: "2학년", icon: "📊", color: "Charcoal" },
  THIRD: { text: "3학년", icon: "📊", color: "Charcoal" },
  FOURTH: { text: "4학년", icon: "📊", color: "Charcoal" },
} as const;

export type GradeCategory =
  (typeof GRADE_CATEGORY)[keyof typeof GRADE_CATEGORY];

export type Grade = keyof typeof GRADE_CATEGORY;

export const GRADE_CATEGORY_OPTIONS: DropDownOption[] = Object.entries(
  GRADE_CATEGORY
).map(([key, value]) => ({
  value: key,
  label: `${value.icon} ${value.text}`,
}));
