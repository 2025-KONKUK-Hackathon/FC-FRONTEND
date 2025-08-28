interface ErrorResponse {
  message?: string;
  error?: string;
  status?: number;
}

export const handleApiError = (error: unknown, fallbackMessage?: string) => {
  console.error('API Error:', error);
  
  let errorMessage = fallbackMessage || '알 수 없는 오류가 발생했습니다.';
  
  // Axios 에러 처리
  if (error && typeof error === 'object' && 'response' in error) {
    const axiosError = error as { response?: { data?: ErrorResponse; status?: number } };
    
    if (axiosError.response?.data) {
      const { message, error: errorMsg } = axiosError.response.data;
      errorMessage = message || errorMsg || errorMessage;
    } else if (axiosError.response?.status) {
      switch (axiosError.response.status) {
        case 400:
          errorMessage = '잘못된 요청입니다.';
          break;
        case 401:
          errorMessage = '인증에 실패했습니다. 다시 로그인해주세요.';
          break;
        case 403:
          errorMessage = '접근 권한이 없습니다.';
          break;
        case 404:
          errorMessage = '요청한 리소스를 찾을 수 없습니다.';
          break;
        case 500:
          errorMessage = '서버 오류가 발생했습니다.';
          break;
        default:
          errorMessage = `오류가 발생했습니다. (${axiosError.response.status})`;
      }
    }
  }
  
  // 일반 Error 객체 처리
  else if (error instanceof Error) {
    errorMessage = error.message || errorMessage;
  }
  
  // 문자열 에러 처리
  else if (typeof error === 'string') {
    errorMessage = error;
  }
  
  // Toast 메시지 표시
  showWarningToast(errorMessage);
  
  return errorMessage;
};

export const showSuccessToast = (message: string) => {
  import('react-toastify').then(({ toast }) => {
    import('@/shared/components/toast/Toast').then(({ default: Toast }) => {
      import('react').then(({ createElement }) => {
        toast(createElement(Toast, { text: message, type: 'success' }));
      });
    });
  });
};

export const showInfoToast = (message: string) => {
  showSuccessToast(message);
};

export const showWarningToast = (message: string) => {
  import('react-toastify').then(({ toast }) => {
    import('@/shared/components/toast/Toast').then(({ default: Toast }) => {
      import('react').then(({ createElement }) => {
        toast(createElement(Toast, { text: message, type: 'warning' }));
      });
    });
  });
};