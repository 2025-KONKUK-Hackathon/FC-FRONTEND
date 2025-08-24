import type { Color } from '@styles/theme.css';

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
    id: '1',
    title: '건국대학교 중앙도서관 이용 시간 변경 안내',
    content:
      '다음 주부터 중앙도서관 이용 시간이 변경됩니다. 평일 오전 8시부터 오후 10시까지 운영되며, 주말은 오전 9시부터 오후 6시까지입니다.',
    imageUrl: 'https://picsum.photos/seed/library/300/300',
    categories: [
      { text: '공지사항', icon: '📢', color: 'Blue' },
      { text: '도서관', icon: '📚', color: 'Green' },
      { text: '공지사항', icon: '📢', color: 'Blue' },
      { text: '도서관', icon: '📚', color: 'Green' },
      { text: '공지사항', icon: '📢', color: 'Blue' },
      { text: '도서관', icon: '📚', color: 'Green' },
      { text: '공지사항', icon: '📢', color: 'Blue' },
      { text: '도서관', icon: '📚', color: 'Green' },
    ],
    createdAt: '2시간 전',
    commentCount: 12,
    authorName: '도서관운영팀',
  },
  {
    id: '2',
    title: '컴퓨터공학부 동아리 모집',
    content:
      '프로그래밍 동아리에서 새로운 멤버를 모집합니다. 함께 토이 프로젝트를 만들고 기술 스택을 쌓아가실 분들을 기다립니다.',
    categories: [
      { text: '동아리', icon: '👥', color: 'Purple' },
      { text: '모집', icon: '🔍', color: 'Orange' },
    ],
    createdAt: '4시간 전',
    commentCount: 8,
    authorName: '코딩클럽',
  },
  {
    id: '3',
    title: '학식 메뉴 추천해주세요!',
    content:
      '요즘 학식이 맛있어졌다고 하는데, 어떤 메뉴가 제일 맛있나요? 추천해주시면 내일 당장 먹으러 갈게요 ㅎㅎ',
    imageUrl: 'https://picsum.photos/seed/food/300/300',
    categories: [
      { text: '질문', icon: '❓', color: 'Yellow' },
      { text: '학식', icon: '🍽️', color: 'Coral' },
    ],
    createdAt: '6시간 전',
    commentCount: 23,
    authorName: '맛집탐험가',
  },
  {
    id: '4',
    title: '중간고사 스터디 그룹 만들어요',
    content:
      '자료구조와 알고리즘 과목 중간고사 준비 스터디 그룹을 만들려고 합니다. 함께 공부하실 분들 댓글로 연락주세요!',
    categories: [
      { text: '스터디', icon: '📖', color: 'Mint' },
      { text: '중간고사', icon: '📝', color: 'Red' },
    ],
    createdAt: '8시간 전',
    commentCount: 15,
    authorName: '공부머신',
  },
  {
    id: '5',
    title: '건국대 근처 맛집 지도 만들었어요',
    content:
      '학교 근처 숨은 맛집들을 정리해서 지도로 만들어봤습니다. 혹시 빠진 곳이 있다면 댓글로 알려주세요!',
    imageUrl: 'https://picsum.photos/seed/map/300/300',
    categories: [
      { text: '정보', icon: 'ℹ️', color: 'Ocean' },
      { text: '맛집', icon: '🍕', color: 'Orange' },
    ],
    createdAt: '10시간 전',
    commentCount: 31,
    authorName: '맛집지도',
  },
  {
    id: '6',
    title: '기말고사 기간 24시간 카페 추천',
    content:
      '기말고사 준비로 밤새 공부할 곳을 찾고 있어요. 학교 근처에 24시간 운영하는 카페나 스터디카페 있나요?',
    categories: [
      { text: '질문', icon: '❓', color: 'Yellow' },
      { text: '카페', icon: '☕', color: 'Charcoal' },
    ],
    createdAt: '12시간 전',
    commentCount: 18,
    authorName: '야행성학생',
  },
  {
    id: '7',
    title: '학교 축제 준비 봉사자 모집',
    content:
      '다음 달 학교 축제 준비를 위한 봉사자를 모집합니다. 함께 즐거운 축제를 만들어갈 분들의 많은 참여 바랍니다.',
    imageUrl: 'https://picsum.photos/seed/festival/300/300',
    categories: [
      { text: '축제', icon: '🎊', color: 'Pink' },
      { text: '봉사', icon: '🤝', color: 'Green' },
      { text: '모집', icon: '🔍', color: 'Orange' },
    ],
    createdAt: '14시간 전',
    commentCount: 7,
    authorName: '축제준비위',
  },
  {
    id: '8',
    title: '노트북 추천 부탁드려요',
    content:
      '프로그래밍 수업용으로 사용할 노트북을 찾고 있습니다. 예산은 100만원 정도이고, 개발 환경 구축에 좋은 모델 추천해주세요.',
    categories: [
      { text: '질문', icon: '❓', color: 'Yellow' },
      { text: '노트북', icon: '💻', color: 'Blue' },
    ],
    createdAt: '16시간 전',
    commentCount: 25,
    authorName: '개발새내기',
  },
  {
    id: '9',
    title: '교환학생 준비 팁 공유',
    content:
      '다음 학기 미국 교환학생을 준비하고 있어요. 준비 과정에서 알게 된 유용한 팁들을 공유하니까 참고하세요!',
    imageUrl: 'https://picsum.photos/seed/exchange/300/300',
    categories: [
      { text: '정보', icon: 'ℹ️', color: 'Ocean' },
      { text: '교환학생', icon: '✈️', color: 'Purple' },
    ],
    createdAt: '18시간 전',
    commentCount: 11,
    authorName: '글로벌러',
  },
  {
    id: '10',
    title: '졸업작품 팀원 구해요',
    content:
      '웹 개발 졸업작품을 함께 만들 팀원 2명을 구하고 있습니다. React, Node.js 경험이 있으신 분이면 좋겠어요.',
    categories: [
      { text: '팀원모집', icon: '👨‍💻', color: 'Lime' },
      { text: '졸업작품', icon: '🎓', color: 'Purple' },
    ],
    createdAt: '20시간 전',
    commentCount: 9,
    authorName: '개발리더',
  },
  {
    id: '11',
    title: '건국대 헬스장 이용 후기',
    content:
      '학교 헬스장을 한 달째 이용하고 있는데 생각보다 시설이 좋더라고요. 특히 새로 들어온 기구들이 정말 좋습니다.',
    imageUrl: 'https://picsum.photos/seed/gym/300/300',
    categories: [
      { text: '후기', icon: '⭐', color: 'Yellow' },
      { text: '헬스장', icon: '💪', color: 'Red' },
    ],
    createdAt: '22시간 전',
    commentCount: 14,
    authorName: '운동매니아',
  },
  {
    id: '12',
    title: '토익 스터디 멤버 모집합니다',
    content:
      '목표 점수 900점으로 토익 스터디를 만들려고 해요. 주 3회 모임으로 진행할 예정이니 관심 있으신 분들 연락주세요.',
    categories: [
      { text: '스터디', icon: '📖', color: 'Mint' },
      { text: '토익', icon: '🇺🇸', color: 'Blue' },
    ],
    createdAt: '1일 전',
    commentCount: 19,
    authorName: '영어정복자',
  },
  {
    id: '13',
    title: '학교 와이파이 너무 느려요',
    content:
      '요즘 학교 와이파이가 너무 느린 것 같아요. 특히 오후 시간대에는 거의 연결이 안 되는 수준인데, 다른 분들도 그런가요?',
    categories: [
      { text: '불만', icon: '😤', color: 'Red' },
      { text: '와이파이', icon: '📶', color: 'Ocean' },
    ],
    createdAt: '1일 전',
    commentCount: 42,
    authorName: '인터넷중독자',
  },
  {
    id: '14',
    title: '새 학기 교재 나눔해요',
    content:
      '지난 학기에 사용했던 교재들을 나눔합니다. 경제학원론, 통계학개론, 영어회화 교재 있어요. 필요하신 분 연락주세요!',
    categories: [
      { text: '나눔', icon: '🎁', color: 'Green' },
      { text: '교재', icon: '📚', color: 'Charcoal' },
    ],
    createdAt: '1일 전',
    commentCount: 16,
    authorName: '책나눔이',
  },
  {
    id: '15',
    title: '학교 앞 새로 생긴 치킨집 후기',
    content:
      '학교 정문 앞에 새로 생긴 치킨집 가봤는데 진짜 맛있어요! 양도 많고 가격도 합리적입니다. 추천해요!',
    imageUrl: 'https://picsum.photos/seed/chicken/300/300',
    categories: [
      { text: '후기', icon: '⭐', color: 'Yellow' },
      { text: '치킨', icon: '🍗', color: 'Orange' },
    ],
    createdAt: '1일 전',
    commentCount: 28,
    authorName: '치킨러버',
  },
  {
    id: '16',
    title: '코딩 테스트 준비 스터디',
    content:
      '취업 준비를 위한 코딩 테스트 스터디원을 모집합니다. 백준, 프로그래머스 문제를 매일 풀고 주 2회 모임으로 진행할 예정입니다.',
    categories: [
      { text: '스터디', icon: '📖', color: 'Mint' },
      { text: '코딩테스트', icon: '💻', color: 'Blue' },
      { text: '취업', icon: '💼', color: 'Purple' },
    ],
    createdAt: '2일 전',
    commentCount: 21,
    authorName: '알고리즘마스터',
  },
  {
    id: '17',
    title: '학교 셔틀버스 시간표 변경',
    content:
      '다음 주부터 학교 셔틀버스 시간표가 변경된다고 하네요. 새로운 시간표는 학교 홈페이지에서 확인하실 수 있습니다.',
    categories: [
      { text: '공지사항', icon: '📢', color: 'Blue' },
      { text: '셔틀버스', icon: '🚌', color: 'Green' },
    ],
    createdAt: '2일 전',
    commentCount: 6,
    authorName: '교통정보',
  },
  {
    id: '18',
    title: '기숙사 룸메이트 구해요',
    content:
      '다음 학기 기숙사 룸메이트를 구하고 있어요. 깔끔하고 조용한 성격이시면 좋겠습니다. 궁금한 점 있으시면 댓글 남겨주세요!',
    categories: [
      { text: '룸메이트', icon: '🏠', color: 'Pink' },
      { text: '기숙사', icon: '🛏️', color: 'Coral' },
    ],
    createdAt: '2일 전',
    commentCount: 13,
    authorName: '기숙사생활자',
  },
  {
    id: '19',
    title: '건대 근처 스터디카페 추천',
    content:
      '조용하고 좌석이 편한 스터디카페를 찾고 있어요. 가격대는 시간당 3000원 이하면 좋겠습니다. 추천 부탁드려요!',
    imageUrl: 'https://picsum.photos/seed/studycafe/300/300',
    categories: [
      { text: '질문', icon: '❓', color: 'Yellow' },
      { text: '스터디카페', icon: '📚', color: 'Charcoal' },
    ],
    createdAt: '3일 전',
    commentCount: 17,
    authorName: '공부벌레',
  },
  {
    id: '20',
    title: '학과 MT 사진 공유합니다',
    content:
      '지난주에 다녀온 학과 MT 사진들을 공유해요! 정말 즐거운 시간이었습니다. 내년에도 또 가고 싶네요 ㅎㅎ',
    imageUrl: 'https://picsum.photos/seed/mt/300/300',
    categories: [
      { text: '사진', icon: '📷', color: 'Purple' },
      { text: 'MT', icon: '🏔️', color: 'Green' },
      { text: '추억', icon: '💭', color: 'Pink' },
    ],
    createdAt: '3일 전',
    commentCount: 35,
    authorName: '추억수집가',
  },
];
