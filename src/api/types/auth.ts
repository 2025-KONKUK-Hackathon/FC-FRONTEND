// 인증 관련 타입들

// 회원가입
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

// 이메일 인증
export interface EmailRequest {
  /**
   * 이메일
   * @example "dlwjddus1112@naver.com"
   */
  email?: string;
}

// 로그인
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

export interface BaseResponseLoginResponse {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: LoginResponse;
}

// 공통 응답
export interface BaseResponseVoid {
  /**
   * @format int32
   * @example 200
   */
  code?: number;
  message?: string;
  data?: object;
}