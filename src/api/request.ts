import { isAxiosError } from 'axios';
import { RESPONSE_MESSAGE } from './constants';
import axiosInstance from './axiosInstance';
import type { BaseResponse } from './types';

export const HTTPMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
} as const;

export type HTTPMethodType = (typeof HTTPMethod)[keyof typeof HTTPMethod];

export interface RequestConfig {
  method: HTTPMethodType;
  url: string;
  query?: Record<string, string | number | boolean>;
  body?: Record<string, unknown>;
}

export const request = async <T>(config: RequestConfig): Promise<T> => {
  const { method, url, query, body } = config;

  try {
    const response = await axiosInstance.request<BaseResponse<T>>({
      method,
      url,
      params: query,
      data: body,
    });

    return response.data.data;
  } catch (error: unknown) {
    if (!isAxiosError(error)) {
      console.error(`[실패] ${url} : 네트워크 오류`);
      throw error;
    }

    if (error.response) {
      // 서버가 응답한 경우
      const { status, data } = error.response;
      const message = data?.message;

      const displayMessage =
        RESPONSE_MESSAGE[status] ||
        message ||
        '알 수 없는 오류가 발생했습니다.';

      if (import.meta.env.DEV) {
        console.error(`[실패] ${url} : ${displayMessage}`);
      }
    } else {
      // 서버가 응답하지 않은 경우
      if (import.meta.env.DEV) {
        console.error(`[실패] ${url} : 서버에 연결할 수 없습니다.`);
      }
    }
    throw error;
  }
};