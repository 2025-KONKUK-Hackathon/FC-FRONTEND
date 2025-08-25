import type { Color } from "@styles/theme.css";

export interface PostData {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  categories: Array<{
    text: string;
    icon?: string;
    color?: Color;
  }>;
  createdAt: string;
  commentCount: number;
  authorName: string;
}

export const generalPostsDummy: PostData[] = [
  {
    id: "1",
    title: "건국대학교 중앙도서관 이용 시간 변경 안내",
    content:
      "다음 주부터 중앙도서관 이용 시간이 변경됩니다. 평일 오전 8시부터 오후 10시까지 운영되며, 주말은 오전 9시부터 오후 6시까지입니다.",
    imageUrl: "https://picsum.photos/seed/library/300/300",
    categories: [
      { text: "공지사항", icon: "📢", color: "Pink" },
      { text: "도서관", icon: "📚", color: "Blue" },
      { text: "동아리", icon: "👥", color: "Green" },
      { text: "모집", icon: "🔍", color: "Orange" },
      { text: "질문", icon: "❓", color: "Yellow" },
      { text: "학식", icon: "🍽️", color: "Purple" },
      { text: "스터디", icon: "📖", color: "Coral" },
      { text: "중간고사", icon: "📝", color: "Mint" },
    ],
    createdAt: "2시간 전",
    commentCount: 12,
    authorName: "도서관운영팀",
  },
  {
    id: "2",
    title: "컴퓨터공학부 동아리 모집",
    content:
      "프로그래밍 동아리에서 새로운 멤버를 모집합니다. 함께 토이 프로젝트를 만들고 기술 스택을 쌓아가실 분들을 기다립니다.",
    categories: [
      { text: "동아리", icon: "👥", color: "Purple" },
      { text: "모집", icon: "🔍", color: "Orange" },
    ],
    createdAt: "4시간 전",
    commentCount: 8,
    authorName: "코딩클럽",
  },
  {
    id: "3",
    title: "학식 메뉴 추천해주세요!",
    content:
      "요즘 학식이 맛있어졌다고 하는데, 어떤 메뉴가 제일 맛있나요? 추천해주시면 내일 당장 먹으러 갈게요 ㅎㅎ",
    imageUrl: "https://picsum.photos/seed/food/300/300",
    categories: [
      { text: "질문", icon: "❓", color: "Yellow" },
      { text: "학식", icon: "🍽️", color: "Purple" },
    ],
    createdAt: "6시간 전",
    commentCount: 23,
    authorName: "맛집탐험가",
  },
  {
    id: "4",
    title: "중간고사 스터디 그룹 만들어요",
    content:
      "자료구조와 알고리즘 과목 중간고사 준비 스터디 그룹을 만들려고 합니다. 함께 공부하실 분들 댓글로 연락주세요!",
    categories: [
      { text: "스터디", icon: "📖", color: "Coral" },
      { text: "중간고사", icon: "📝", color: "Mint" },
    ],
    createdAt: "8시간 전",
    commentCount: 15,
    authorName: "공부머신",
  },
  {
    id: "5",
    title: "건국대 근처 맛집 지도 만들었어요",
    content:
      "학교 근처 숨은 맛집들을 정리해서 지도로 만들어봤습니다. 혹시 빠진 곳이 있다면 댓글로 알려주세요!",
    imageUrl: "https://picsum.photos/seed/map/300/300",
    categories: [
      { text: "정보", icon: "ℹ️", color: "Blue" },
      { text: "맛집", icon: "🍕", color: "Orange" },
    ],
    createdAt: "10시간 전",
    commentCount: 31,
    authorName: "맛집지도",
  },
  {
    id: "6",
    title: "기말고사 기간 24시간 카페 추천",
    content:
      "기말고사 준비로 밤새 공부할 곳을 찾고 있어요. 학교 근처에 24시간 운영하는 카페나 스터디카페 있나요?",
    categories: [
      { text: "질문", icon: "❓", color: "Yellow" },
      { text: "카페", icon: "☕", color: "Charcoal" },
    ],
    createdAt: "12시간 전",
    commentCount: 18,
    authorName: "야행성학생",
  },
  {
    id: "7",
    title: "학교 축제 준비 봉사자 모집",
    content:
      "다음 달 학교 축제 준비를 위한 봉사자를 모집합니다. 함께 즐거운 축제를 만들어갈 분들의 많은 참여 바랍니다.",
    imageUrl: "https://picsum.photos/seed/festival/300/300",
    categories: [
      { text: "축제", icon: "🎊", color: "Pink" },
      { text: "봉사", icon: "🤝", color: "Green" },
      { text: "모집", icon: "🔍", color: "Orange" },
    ],
    createdAt: "14시간 전",
    commentCount: 7,
    authorName: "축제준비위",
  },
  {
    id: "8",
    title: "노트북 추천 부탁드려요",
    content:
      "프로그래밍 수업용으로 사용할 노트북을 찾고 있습니다. 예산은 100만원 정도이고, 개발 환경 구축에 좋은 모델 추천해주세요.",
    categories: [
      { text: "질문", icon: "❓", color: "Yellow" },
      { text: "노트북", icon: "💻", color: "Blue" },
    ],
    createdAt: "16시간 전",
    commentCount: 25,
    authorName: "개발새내기",
  },
  {
    id: "9",
    title: "교환학생 준비 팁 공유",
    content:
      "다음 학기 미국 교환학생을 준비하고 있어요. 준비 과정에서 알게 된 유용한 팁들을 공유하니까 참고하세요!",
    imageUrl: "https://picsum.photos/seed/exchange/300/300",
    categories: [
      { text: "정보", icon: "ℹ️", color: "Blue" },
      { text: "교환학생", icon: "✈️", color: "Purple" },
    ],
    createdAt: "18시간 전",
    commentCount: 11,
    authorName: "글로벌러",
  },
  {
    id: "10",
    title: "졸업작품 팀원 구해요",
    content:
      "웹 개발 졸업작품을 함께 만들 팀원 2명을 구하고 있습니다. React, Node.js 경험이 있으신 분이면 좋겠어요.",
    categories: [
      { text: "팀원모집", icon: "👨‍💻", color: "Green" },
      { text: "졸업작품", icon: "🎓", color: "Purple" },
    ],
    createdAt: "20시간 전",
    commentCount: 9,
    authorName: "개발리더",
  },
];
