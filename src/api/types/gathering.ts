// 모임(gathering) 관련 타입들

// 모임 생성
export interface MeetingCreateRequest {
  /**
   * 모임 이름
   * @example "개강파티 같이 가실 분 ㅠ"
   */
  meetingName?: string;
  /**
   * 모임 설명
   * @example "개강파티 가고 싶은데 전과생인데 아는 사람이 없어서 같이 가실 분 구해요 "
   */
  content?: string;
  /**
   * 모임 카테고리
   * @example "FRIENDSHIP"
   */
  category?: string;
  /**
   * 모집 인원
   * @format int32
   * @example 4
   */
  recruitNumber?: number;
  /**
   * 신청 시작 날짜
   * @format date
   * @example "2025-09-01"
   */
  recruitStartDate?: string;
  /**
   * 신청 마감 날짜
   * @format date
   * @example "2025-09-02"
   */
  recruitEndDate?: string;
  /**
   * 활동 시작 날짜
   * @format date
   * @example "2025-09-03"
   */
  actualStartDate?: string;
  /**
   * 활동 마감 날짜
   * @format date
   * @example "2025-09-04"
   */
  actualEndDate?: string;
  /** 사진 */
  imageUrls?: string[];
}

// 모임 목록
export interface MeetingSummaryResponse {
  /**
   * 모임 ID
   * @format int64
   */
  meetingId?: number;
  /**
   * 모임장 이름
   * @example "이정연"
   */
  hostName?: string;
  /**
   * 모임 이름
   * @example "개파갈사람"
   */
  meetingName?: string;
  /**
   * 모집 인원
   * @format int32
   * @example 5
   */
  recruitNumber?: number;
  /**
   * 신청 인원
   * @format int32
   * @example 1
   */
  currentRecruitCount?: number;
  /**
   * 모임 카테고리
   * @example "FREINDSHIP"
   */
  category?: string;
  /** 썸네일 이미지 url */
  imageUrl?: string;
  /** @format int64 */
  cursor?: number;
}

export interface SliceResponseMeetingSummaryResponseLong {
  /** 데이터 목록 */
  content?: MeetingSummaryResponse[];
  /**
   * 다음 커서
   * @format int64
   */
  nextCursor?: number;
  /** 마지막 페이지 여부 */
  isLast?: boolean;
}

export interface BaseResponseSliceResponseMeetingSummaryResponseLong {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: SliceResponseMeetingSummaryResponseLong;
}

// 모임 상세
export interface MeetingDetailResponse {
  /**
   * 모임 이름
   * @example "개파 가실 분"
   */
  meetingName?: string;
  /**
   * 모임장 이름
   * @example "이정연"
   */
  hostName?: string;
  /**
   * 모임장 ID
   * @format int64
   */
  hostId?: number;
  /**
   * 모집 상태
   * @example "IN_PROGRESS"
   */
  meetingStatus?: string;
  /**
   * 모집 인원
   * @format int32
   * @example 5
   */
  recruitNumber?: number;
  /**
   * 신청 인원
   * @format int32
   * @example 2
   */
  currentRecruitCount?: number;
  /**
   * 모집 시작 기간
   * @format date
   */
  recruitStartDate?: string;
  /**
   * 모집 종료 기간
   * @format date
   */
  recruitEndDate?: string;
  /**
   * 활동 시작 기간
   * @format date
   */
  actualStartDate?: string;
  /**
   * 활동 종료 기간
   * @format date
   */
  actualEndDate?: string;
  /**
   * 모임 설명
   * @example "제발 같이 갈 분"
   */
  content?: string;
  /** 이미지 URL */
  imageUrls?: string[];
  /**
   * 모임 카테고리
   * @example "FRIENDSHIP"
   */
  category?: string;
}

export interface BaseResponseMeetingDetailResponse {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: MeetingDetailResponse;
}

// 모임 멤버 관리
export interface MeetingRecruitStatusResponse {
  /**
   * 모임 멤버 ID
   * @format int64
   */
  meetingMemberId?: number;
  /** 모임 멤버 이름 */
  name?: string;
}

export interface BaseResponseListMeetingRecruitStatusResponse {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: MeetingRecruitStatusResponse[];
}

export interface MeetingMemberResponse {
  /**
   * 모임 멤버 ID
   * @format int64
   */
  meetingMemberId?: number;
  /** 모임 멤버 이름 */
  name?: string;
  /** 모임 멤버 전화번호 */
  phone?: string;
  /** 모임 멤버 학번 */
  studentNunmber?: string;
  /**
   * 신청 시각
   * @format date-time
   */
  registerAt?: string;
}

export interface BaseResponseListMeetingMemberResponse {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: MeetingMemberResponse[];
}