import { useMutation, useQueryClient } from '@tanstack/react-query';
import { request } from '@api/request';
import { POST_KEY } from '@shared/constant/queryKey';
import { HTTPMethod } from '@api/request';
import type { 
  AddCommentRequest,
  PostCommentResponse,
  PostDetailResponse
} from '../types/postTypes';

// 댓글 작성
const addComment = async (data: AddCommentRequest): Promise<number> => {
  return request<number>({
    method: HTTPMethod.POST,
    url: '/posts/comments',
    body: {
      postId: data.postId,
      content: data.content,
    },
  });
};

// 댓글 삭제
const deleteComment = async (commentId: number): Promise<object> => {
  return request<object>({
    method: HTTPMethod.DELETE,
    url: `/posts/comments/${commentId}`,
  });
};

// 게시글 스크랩
const scrapPost = async (postId: number): Promise<object> => {
  return request<object>({
    method: HTTPMethod.POST,
    url: '/posts/scrap',
    query: {
      postId,
    },
  });
};

// 게시글 삭제
const deletePost = async (postId: number): Promise<object> => {
  return request<object>({
    method: HTTPMethod.DELETE,
    url: `/posts/${postId}`,
  });
};

const usePostMutations = (id: number) => {
  const queryClient = useQueryClient();

  // 댓글 작성
  const addCommentMutation = useMutation({
    mutationFn: addComment,
    onMutate: async (variables: AddCommentRequest) => {
      // 진행 중인 쿼리들을 취소
      await queryClient.cancelQueries({
        queryKey: POST_KEY.POST_COMMENTS(id),
      });
      await queryClient.cancelQueries({
        queryKey: POST_KEY.POST_DETAIL(id),
      });

      // 이전 데이터 백업
      const previousComments = queryClient.getQueryData(POST_KEY.POST_COMMENTS(id));
      const previousPostDetail = queryClient.getQueryData(POST_KEY.POST_DETAIL(id));

      // 낙관적 업데이트: 새 댓글을 임시로 추가
      const tempComment = {
        commentId: Date.now(), // 임시 ID
        writerId: parseInt(localStorage.getItem('userId') || '0'),
        writerName: '나', // 임시 이름
        content: variables.content,
        createdAt: new Date().toISOString(),
        cursor: 0,
      };

      queryClient.setQueryData(POST_KEY.POST_COMMENTS(id), (old: PostCommentResponse | undefined) => {
        if (!old) return old;
        return {
          ...old,
          content: [tempComment, ...old.content],
        };
      });

      // 게시글의 댓글 개수 증가
      queryClient.setQueryData(POST_KEY.POST_DETAIL(id), (old: PostDetailResponse | undefined) => {
        if (!old) return old;
        return {
          ...old,
          commentCount: old.commentCount + 1,
        };
      });

      return { previousComments, previousPostDetail };
    },
    onSuccess: () => {
      // 댓글 목록과 게시글 상세 정보 갱신
      queryClient.invalidateQueries({
        queryKey: POST_KEY.POST_COMMENTS(id),
      });
      queryClient.invalidateQueries({
        queryKey: POST_KEY.POST_DETAIL(id),
      });
    },
    onError: (_err, _variables, context) => {
      // 에러 시 이전 데이터로 복원
      if (context?.previousComments) {
        queryClient.setQueryData(POST_KEY.POST_COMMENTS(id), context.previousComments);
      }
      if (context?.previousPostDetail) {
        queryClient.setQueryData(POST_KEY.POST_DETAIL(id), context.previousPostDetail);
      }
      alert('댓글 작성에 실패했습니다.');
    },
  });

  // 댓글 삭제
  const deleteCommentMutation = useMutation({
    mutationFn: deleteComment,
    onMutate: async (commentId: number) => {
      // 진행 중인 쿼리들을 취소
      await queryClient.cancelQueries({
        queryKey: POST_KEY.POST_COMMENTS(id),
      });
      await queryClient.cancelQueries({
        queryKey: POST_KEY.POST_DETAIL(id),
      });

      // 이전 데이터 백업
      const previousComments = queryClient.getQueryData(POST_KEY.POST_COMMENTS(id));
      const previousPostDetail = queryClient.getQueryData(POST_KEY.POST_DETAIL(id));

      // 낙관적 업데이트: 댓글 삭제
      queryClient.setQueryData(POST_KEY.POST_COMMENTS(id), (old: PostCommentResponse | undefined) => {
        if (!old) return old;
        return {
          ...old,
          content: old.content.filter(comment => comment.commentId !== commentId),
        };
      });

      // 게시글의 댓글 개수 감소
      queryClient.setQueryData(POST_KEY.POST_DETAIL(id), (old: PostDetailResponse | undefined) => {
        if (!old) return old;
        return {
          ...old,
          commentCount: Math.max(0, old.commentCount - 1),
        };
      });

      return { previousComments, previousPostDetail };
    },
    onSuccess: () => {
      // 댓글 목록과 게시글 상세 정보 갱신
      queryClient.invalidateQueries({
        queryKey: POST_KEY.POST_COMMENTS(id),
      });
      queryClient.invalidateQueries({
        queryKey: POST_KEY.POST_DETAIL(id),
      });
    },
    onError: (_err, _variables, context) => {
      // 에러 시 이전 데이터로 복원
      if (context?.previousComments) {
        queryClient.setQueryData(POST_KEY.POST_COMMENTS(id), context.previousComments);
      }
      if (context?.previousPostDetail) {
        queryClient.setQueryData(POST_KEY.POST_DETAIL(id), context.previousPostDetail);
      }
      alert('댓글 삭제에 실패했습니다.');
    },
  });

  // 게시글 스크랩
  const scrapPostMutation = useMutation({
    mutationFn: () => scrapPost(id),
    onMutate: async () => {
      // 진행 중인 쿼리를 취소
      await queryClient.cancelQueries({
        queryKey: POST_KEY.POST_DETAIL(id),
      });

      // 이전 데이터 백업
      const previousPostDetail = queryClient.getQueryData(POST_KEY.POST_DETAIL(id));

      // 낙관적 업데이트: 스크랩 상태 변경 (실제 API 응답에 스크랩 상태가 있다면)
      // 현재는 스크랩 상태 필드가 없으므로 시각적 피드백만 제공
      
      return { previousPostDetail };
    },
    onSuccess: () => {
      // 게시글 상세 정보 갱신
      queryClient.invalidateQueries({
        queryKey: POST_KEY.POST_DETAIL(id),
      });
    },
    onError: (_err, _variables, context) => {
      // 에러 시 이전 데이터로 복원
      if (context?.previousPostDetail) {
        queryClient.setQueryData(POST_KEY.POST_DETAIL(id), context.previousPostDetail);
      }
      alert('게시글 스크랩에 실패했습니다.');
    },
  });

  // 게시글 삭제
  const deletePostMutation = useMutation({
    mutationFn: () => deletePost(id),
    onMutate: async () => {
      // 진행 중인 쿼리들을 취소
      await queryClient.cancelQueries({
        queryKey: POST_KEY.POST_LIST(),
      });
      await queryClient.cancelQueries({
        queryKey: POST_KEY.POST_DETAIL(id),
      });

      // 이전 데이터 백업
      const previousPostList = queryClient.getQueryData(POST_KEY.POST_LIST());
      const previousPostDetail = queryClient.getQueryData(POST_KEY.POST_DETAIL(id));

      // 낙관적 업데이트: 게시글 목록에서 해당 게시글 제거
      queryClient.setQueryData(POST_KEY.POST_LIST(), (old: unknown) => {
        if (!old || !Array.isArray(old)) return old;
        return old.filter((post: { id: number }) => post.id !== id);
      });

      return { previousPostList, previousPostDetail };
    },
    onSuccess: () => {
      // 게시글 목록 갱신
      queryClient.invalidateQueries({
        queryKey: POST_KEY.POST_LIST(),
      });
      // 삭제된 게시글 상세 데이터 제거
      queryClient.removeQueries({
        queryKey: POST_KEY.POST_DETAIL(id),
      });
    },
    onError: (_err, _variables, context) => {
      // 에러 시 이전 데이터로 복원
      if (context?.previousPostList) {
        queryClient.setQueryData(POST_KEY.POST_LIST(), context.previousPostList);
      }
      if (context?.previousPostDetail) {
        queryClient.setQueryData(POST_KEY.POST_DETAIL(id), context.previousPostDetail);
      }
      alert('게시글 삭제에 실패했습니다.');
    },
  });

  return {
    addCommentMutation,
    deleteCommentMutation,
    scrapPostMutation,
    deletePostMutation,
  };
};

export default usePostMutations;
