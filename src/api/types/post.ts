// 게시글 관련 타입들

// 게시글 생성
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

// 게시글 목록
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

export interface BaseResponseSliceResponsePostSummaryResponseLong {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: SliceResponsePostSummaryResponseLong;
}

// 게시글 상세
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

export interface BaseResponsePostDetailResponse {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: PostDetailResponse;
}

// 댓글
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

export interface BaseResponseSliceResponseCommentResponseLong {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: SliceResponseCommentResponseLong;
}

// 공통 응답
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