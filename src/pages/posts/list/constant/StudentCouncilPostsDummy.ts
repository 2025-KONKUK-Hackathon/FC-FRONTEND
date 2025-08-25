import type { PostData } from './GeneralPostsDummy';

export const studentCouncilPostsDummy: PostData[] = [
  {
    id: 'sc1',
    title: '2025-2학기 학생회비 사용 내역 공개',
    content:
      '2학기 학생회비 사용 내역을 투명하게 공개합니다. 학생 복지를 위한 다양한 사업에 사용되었으니 확인해보세요.',
    imageUrl: 'https://picsum.photos/seed/council1/300/300',
    categories: [
      { text: '학생회', icon: '🏛️', color: 'Blue' },
      { text: '예산', icon: '💰', color: 'Green' },
      { text: '학생회', icon: '🏛️', color: 'Blue' },
      { text: '예산', icon: '💰', color: 'Green' },
      { text: '학생회', icon: '🏛️', color: 'Blue' },
      { text: '예산', icon: '💰', color: 'Green' },
    ],
    createdAt: '1시간 전',
    commentCount: 45,
    authorName: 'LINK',
  },
  {
    id: 'sc2',
    title: '겨울방학 기간 학생 지원 프로그램 안내',
    content:
      '겨울방학 동안 진행되는 취업준비, 어학연수, 봉사활동 지원 프로그램을 안내드립니다. 많은 참여 부탁드려요.',
    categories: [
      { text: '학생회', icon: '🏛️', color: 'Blue' },
      { text: '지원사업', icon: '🤝', color: 'Purple' },
    ],
    createdAt: '3시간 전',
    commentCount: 28,
    authorName: 'LINK',
  },
  {
    id: 'sc3',
    title: '학교 급식 개선을 위한 학생 의견 수렴',
    content:
      '더 나은 학교 급식을 위해 학생들의 의견을 수렴하고 있습니다. 설문조사에 참여해주시면 급식 개선에 반영하겠습니다.',
    imageUrl: 'https://picsum.photos/seed/council3/300/300',
    categories: [
      { text: '학생회', icon: '🏛️', color: 'Blue' },
      { text: '급식개선', icon: '🍽️', color: 'Orange' },
    ],
    createdAt: '5시간 전',
    commentCount: 67,
    authorName: 'LINK',
  },
  {
    id: 'sc4',
    title: '학내 시설 개선 건의사항 접수',
    content:
      '학내 시설 개선이 필요한 부분이 있다면 언제든 건의해주세요. 학생회에서 적극적으로 학교 측에 전달하겠습니다.',
    categories: [
      { text: '학생회', icon: '🏛️', color: 'Blue' },
      { text: '시설개선', icon: '🔧', color: 'Red' },
    ],
    createdAt: '7시간 전',
    commentCount: 34,
    authorName: 'LINK',
  },
  {
    id: 'sc5',
    title: '신입생 오리엔테이션 도우미 모집',
    content:
      '2025년 신입생 오리엔테이션 진행을 도와주실 재학생 도우미를 모집합니다. 함께 신입생들을 환영해주세요!',
    imageUrl: 'https://picsum.photos/seed/council5/300/300',
    categories: [
      { text: '학생회', icon: '🏛️', color: 'Blue' },
      { text: '모집', icon: '🔍', color: 'Green' },
      { text: '오리엔테이션', icon: '🎓', color: 'Purple' },
    ],
    createdAt: '10시간 전',
    commentCount: 19,
    authorName: 'LINK',
  },
];
