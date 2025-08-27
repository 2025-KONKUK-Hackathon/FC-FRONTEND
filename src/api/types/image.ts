// 이미지 관련 타입들

// Presigned URL 요청
export interface PresignedUrlRequest {
  mediaType?: string[];
}

// Presigned URL 응답
export interface PresignedUrlResponse {
  mediaUrl?: string[];
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