/**
 * 주어진 날짜로부터 현재까지의 상대적 시간을 계산하여 한국어로 반환합니다.
 * @param date - 계산할 기준 날짜
 * @returns 상대적 시간 문자열 (예: "방금 전", "5분 전", "3시간 전", "2일 전")
 */
export const getRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 1) return '방금 전';
  if (diffInMinutes < 60) return `${diffInMinutes}분 전`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}시간 전`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}일 전`;
  
  return date.toLocaleDateString('ko-KR');
};

/**
 * 날짜를 한국어 형식으로 포맷팅합니다.
 * @param date - 포맷팅할 날짜
 * @param options - 날짜 포맷 옵션
 * @returns 포맷팅된 날짜 문자열
 */
export const formatDate = (date: Date, options?: Intl.DateTimeFormatOptions): string => {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  return date.toLocaleDateString('ko-KR', options || defaultOptions);
};

/**
 * 날짜와 시간을 포함한 전체 포맷팅을 제공합니다.
 * @param date - 포맷팅할 날짜
 * @returns 날짜와 시간이 포함된 문자열
 */
export const formatDateTime = (date: Date): string => {
  return date.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};
