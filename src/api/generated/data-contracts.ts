/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserSignUpRequest {
  /**
   * 이메일
   * @example "dlwjddus1112@naver.com"
   */
  email?: string;
  /**
   * 이름
   * @example "이정연"
   */
  name?: string;
  /**
   * 비밀번호
   * @example "1234"
   */
  password?: string;
  /**
   * 학번
   * @example "202011346"
   */
  studentNumber?: string;
  /**
   * 전화번호
   * @example "01021246390"
   */
  phone?: string;
}

export interface BaseResponseVoid {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: object;
}

export interface EmailRequest {
  /**
   * 이메일
   * @example "dlwjddus1112@naver.com"
   */
  email?: string;
}

export interface PostCreateRequest {
  /**
   * 제목
   * @example "아니"
   */
  title?: string;
  /**
   * 내용
   * @example "서버 한명 더 구할걸 그냥 아"
   */
  content?: string;
  /** 이미지 */
  imageUrls?: string[];
  /**
   * 파트
   * @example "SERVER"
   */
  part?: string;
  /**
   * 학년
   * @example "FOURTH"
   */
  grade?: string;
  /**
   * 주제
   * @example "CLASS"
   */
  Topic?: string;
  /**
   * 소속
   * @example "COMPUTER"
   */
  affiliation?: string;
}

export interface BaseResponseLong {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  /** @format int64 */
  data?: number;
}

export interface CommentCreateRequest {
  /**
   * 게시글 ID
   * @format int64
   */
  postId?: number;
  /**
   * 댓글 내용
   * @example "ㄹㅇㅋㅋ"
   */
  content?: string;
}

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

export interface PresignedUrlRequest {
  mediaType?: string[];
}

export interface BaseResponsePresignedUrlResponse {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: PresignedUrlResponse;
}

export interface PresignedUrlResponse {
  mediaUrl?: string[];
}

export interface LoginRequest {
  /**
   * 이메일
   * @example "dlwjddus1112@naver.com"
   */
  email: string;
  /**
   * 비밀번호
   * @example "1234"
   */
  password: string;
}

export interface BaseResponseLoginResponse {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: LoginResponse;
}

export interface LoginResponse {
  /** Access Token */
  accessToken?: string;
  /**
   * 유저 ID
   * @format int64
   * @example 1
   */
  userId?: number;
}

export interface BaseResponseSliceResponsePostSummaryResponseLong {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: SliceResponsePostSummaryResponseLong;
}

/** 데이터 목록 */
export interface PostSummaryResponse {
  /**
   * 게시글 ID
   * @format int64
   */
  postId?: number;
  /**
   * 작성자 ID
   * @format int64
   */
  writerId?: number;
  /** 작성자 이름 */
  writerName?: string;
  /**
   * 제목
   * @example "아니"
   */
  title?: string;
  /**
   * 내용
   * @example "진짜 서버 한 명만 더.."
   */
  content?: string;
  /**
   * 댓글 수
   * @format int32
   */
  commentCount?: number;
  /** 썸네일 이미지 url */
  imageUrl?: string;
  /**
   * 작성 시간
   * @format date-time
   */
  createdAt?: string;
  /** @format int64 */
  cursor?: number;
}

export interface SliceResponsePostSummaryResponseLong {
  /** 데이터 목록 */
  content?: PostSummaryResponse[];
  /**
   * 다음 커서
   * @format int64
   */
  nextCursor?: number;
  /** 마지막 페이지 여부 */
  isLast?: boolean;
}

export interface BaseResponsePostDetailResponse {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: PostDetailResponse;
}

export interface PostDetailResponse {
  /**
   * 작성자 이름
   * @example "이정연"
   */
  writerName?: string;
  /**
   * 작성자 ID
   * @format int64
   */
  writerId?: number;
  /**
   * 제목
   * @example "ㅇㅇ"
   */
  title?: string;
  /**
   * 내용
   * @example "ㅇㅇㅇ"
   */
  content?: string;
  /**
   * 작성 시간
   * @format date-time
   */
  createdAt?: string;
  /**
   * 댓글 수
   * @format int32
   * @example 1
   */
  commentCount?: number;
  /** 이미지 URL */
  imageUrls?: string[];
}

export interface BaseResponseSliceResponseCommentResponseLong {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: SliceResponseCommentResponseLong;
}

/** 데이터 목록 */
export interface CommentResponse {
  /**
   * 댓글 ID
   * @format int64
   */
  commentId?: number;
  /**
   * 작성자 ID
   * @format int64
   */
  writerId?: number;
  /** 작성자 이름 */
  writerName?: string;
  /**
   * 내용
   * @example "ㅇㅇㅇ"
   */
  content?: string;
  /**
   * 작성 시간
   * @format date-time
   */
  createdAt?: string;
  /** @format int64 */
  cursor?: number;
}

export interface SliceResponseCommentResponseLong {
  /** 데이터 목록 */
  content?: CommentResponse[];
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

/** 데이터 목록 */
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

export interface BaseResponseMeetingDetailResponse {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: MeetingDetailResponse;
}

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

export interface BaseResponseListMeetingRecruitStatusResponse {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: MeetingRecruitStatusResponse[];
}

export interface MeetingRecruitStatusResponse {
  /**
   * 모임 멤버 ID
   * @format int64
   */
  meetingMemberId?: number;
  /** 모임 멤버 이름 */
  name?: string;
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
