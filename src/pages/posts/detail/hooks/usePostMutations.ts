import { useMutation, useQueryClient } from '@tanstack/react-query';
import { request } from '@api/request';
import { POST_KEY } from '@shared/constant/queryKey';

// 댓글 작성 요청 타입
interface CreateCommentRequest {
  postId: number;
  content: string;
}

// 댓글 작성
const createComment = async (data: CreateCommentRequest): Promise<number> => {
  return request<number>({
    method: 'POST',
    url: '/posts/comments',
    body: {
      postId: data.postId,
      content: data.content,
    },
  });
};

// 게시글 스크랩
const scrapPost = async (postId: number): Promise<object> => {
  return request<object>({
    method: 'POST',
    url: '/posts/scrap',
    query: {
      postId,
    },
  });
};

// 게시글 삭제
const deletePost = async (postId: number): Promise<object> => {
  return request<object>({
    method: 'DELETE',
    url: `/posts/${postId}`,
  });
};

// 댓글 삭제
const deleteComment = async (commentId: number): Promise<object> => {
  return request<object>({
    method: 'DELETE',
    url: `/posts/comments/${commentId}`,
  });
};

export const usePostMutations = (postId: number) => {
  const queryClient = useQueryClient();

  // 댓글 작성
  const createCommentMutation = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      // 댓글 목록과 게시글 상세 정보 갱신
      queryClient.invalidateQueries({
        queryKey: POST_KEY.POST_COMMENTS(postId),
      });
      queryClient.invalidateQueries({
        queryKey: POST_KEY.POST_DETAIL(postId),
      });
    },
  });

  // 게시글 스크랩
  const scrapPostMutation = useMutation({
    mutationFn: () => scrapPost(postId),
    onSuccess: () => {
      // 게시글 상세 정보 갱신
      queryClient.invalidateQueries({
        queryKey: POST_KEY.POST_DETAIL(postId),
      });
    },
  });

  // 게시글 삭제
  const deletePostMutation = useMutation({
    mutationFn: () => deletePost(postId),
    onSuccess: () => {
      // 게시글 목록 갱신
      queryClient.invalidateQueries({
        queryKey: POST_KEY.POST_LIST(),
      });
    },
  });

  // 댓글 삭제
  const deleteCommentMutation = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      // 댓글 목록과 게시글 상세 정보 갱신
      queryClient.invalidateQueries({
        queryKey: POST_KEY.POST_COMMENTS(postId),
      });
      queryClient.invalidateQueries({
        queryKey: POST_KEY.POST_DETAIL(postId),
      });
    },
  });

  return {
    // 댓글 작성
    createComment: createCommentMutation.mutate,
    createCommentAsync: createCommentMutation.mutateAsync,
    isCreatingComment: createCommentMutation.isPending,
    createCommentError: createCommentMutation.error,

    // 게시글 스크랩
    scrapPost: scrapPostMutation.mutate,
    scrapPostAsync: scrapPostMutation.mutateAsync,
    isScrapingPost: scrapPostMutation.isPending,
    scrapPostError: scrapPostMutation.error,

    // 게시글 삭제
    deletePost: deletePostMutation.mutate,
    deletePostAsync: deletePostMutation.mutateAsync,
    isDeletingPost: deletePostMutation.isPending,
    deletePostError: deletePostMutation.error,

    // 댓글 삭제
    deleteComment: deleteCommentMutation.mutate,
    deleteCommentAsync: deleteCommentMutation.mutateAsync,
    isDeletingComment: deleteCommentMutation.isPending,
    deleteCommentError: deleteCommentMutation.error,
  };
};
