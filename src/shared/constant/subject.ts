import type { DropDownOption } from '@shared/components/dropDown/constant/dropDown';

export const SUBJECT_CATEGORY = {
  COURSE_REGISTRATION: { text: '수강신청', icon: '🔥', color: 'Ocean' },
  CLASS: { text: '수업', icon: '💡', color: 'Charcoal' },
  TEAM_PROJECT: { text: '팀프로젝트', icon: '🤝', color: 'Pink' },
  ARTICLE: { text: '아티클', icon: '📝', color: 'Green' },
  CAREER: { text: '취업', icon: '🎖️', color: 'Orange' },
  PROJECT: { text: '프로젝트', icon: '💻', color: 'Blue' },
  STUDY: { text: '스터디', icon: '📚', color: 'Purple' },
  INTERNSHIP: { text: '현장실습', icon: '💼', color: 'Yellow' },
  ETC: { text: '기타', icon: '🌈', color: 'White' },
} as const;

export type Subject = keyof typeof SUBJECT_CATEGORY;

export const SUBJECT_CATEGORY_OPTIONS: DropDownOption[] = Object.entries(SUBJECT_CATEGORY).map(
  ([key, value]) => ({
    value: key,
    label: `${value.icon} ${value.text}`,
  })
);
