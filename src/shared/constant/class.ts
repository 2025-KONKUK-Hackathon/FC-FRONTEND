import ETC from "@/assets/img/ETC.png";
import STUDY from "@/assets/img/STUDY.png";
import PROJECT from "@/assets/img/PROJECT.png";
import EVENT from "@/assets/img/EVENT.png";
import FRIENDSHIP from "@/assets/img/FRIENDSHIP.png";



export const CLASS_CATEGORY = {
  STUDY: { text: "스터디", icon: "📚", color: "Pink", image: STUDY },
  PROJECT: { text: "프로젝트", icon: "💻", color: "Blue", image: PROJECT },
  EVENT: { text: "과행사", icon: "🎊", color: "Green", image: EVENT },
  FRIENDSHIP: { text: "친목", icon: "🤝", color: "Orange", image: FRIENDSHIP },
  ETC: { text: "기타", icon: "🌈", color: "White", image: ETC },
  ANNOUNCEMENT: { text: "공지사항", icon: "📢", color: "Red", image: ETC },
} as const;

export type ClassCategory =
  (typeof CLASS_CATEGORY)[keyof typeof CLASS_CATEGORY];

export type ClassCategoryKey = keyof typeof CLASS_CATEGORY;