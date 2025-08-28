import { useMutation, useQueryClient } from '@tanstack/react-query';
import { request } from '@api/request';
import { POST_KEY } from '@shared/constant/queryKey';
import { HTTPMethod } from '@api/request';
import type { 
  AddCommentRequest,
  PostCommentResponse,
  PostDetailResponse
} from '../types/postTypes';
import type { BaseResponse } from '@api/types';

export const usePostMutations = (postId: number | undefined) => {
  const queryClient = useQueryClient();

  // 댓글 작성
  const addCommentMutation = useMutation({
    mutationFn: (data: AddCommentRequest) =>
      request<BaseResponse<PostCommentResponse>>({
        method: HTTPMethod.POST,
        url: '/posts/comments',
        body: {
          postId: data.postId,
          content: data.content,
        },
      }),
      onMutate: async () => {
        await queryClient.cancelQueries({
          queryKey: POST_KEY.POST_COMMENTS(postId || 0),
        });

        queryClient.setQueryData(
          POST_KEY.POST_DETAIL(postId || 0),
          (old: PostDetailResponse | undefined) => {
            if (!old) return old;
            return {
              ...old,
              commentCount: old.commentCount + 1,
            };
          }
        );
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: POST_KEY.POST_COMMENTS(postId || 0),
        });
      },
    }
  );

  // 게시글 스크랩
  const scrapPostMutation = useMutation({
    mutationFn: (postId: number) =>
      request<BaseResponse<object>>({
        method: HTTPMethod.POST,
        url: '/posts/scrap',
        body: {
          postId,
        },
      }),
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: POST_KEY.POST_DETAIL(variables),
      });
      const previousPostDetail = queryClient.getQueryData(POST_KEY.POST_DETAIL(variables));
      queryClient.setQueryData(POST_KEY.POST_DETAIL(variables), (old: PostDetailResponse | undefined) => {
        if (!old) return old;
        return {
          ...old,
          isScraped: true,
        };
      });
      return { previousPostDetail };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: POST_KEY.POST_DETAIL(postId || 0),
      });
    },
    onError: (_err, _variables, context) => {
      if (context?.previousPostDetail) {
        queryClient.setQueryData(POST_KEY.POST_DETAIL(postId || 0), context.previousPostDetail);
      }
    },
  });

  // 댓글 삭제
  const deleteCommentMutation = useMutation({
    mutationFn: (commentId: number) =>
      request<BaseResponse<object>>({
        method: HTTPMethod.DELETE,
        url: `/posts/comments/${commentId}`,
      }),
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: POST_KEY.POST_COMMENTS(postId || 0),
      });
      const previousComments = queryClient.getQueryData(POST_KEY.POST_COMMENTS(postId || 0));
      queryClient.setQueryData(POST_KEY.POST_COMMENTS(postId || 0), (old: PostCommentResponse | undefined) => {
        if (!old) return old;
        return {
          ...old,
          content: old.content.filter(comment => comment.commentId !== variables),
        };
      });
      return { previousComments };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: POST_KEY.POST_COMMENTS(postId || 0),
      });
    },
    onError: (_err, _variables, context) => {
      if (context?.previousComments) {
        queryClient.setQueryData(POST_KEY.POST_COMMENTS(postId || 0), context.previousComments);
      }
    },
  });

  // 게시글 삭제
  const deletePostMutation = useMutation({
    mutationFn: (postId: number) =>
      request<BaseResponse<object>>({
        method: HTTPMethod.DELETE,
        url: `/posts/${postId}`,
      }),
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: POST_KEY.POST_DETAIL(variables),
      });
      const previousPostDetail = queryClient.getQueryData(POST_KEY.POST_DETAIL(variables));
      queryClient.setQueryData(POST_KEY.POST_DETAIL(variables), (old: PostDetailResponse | undefined) => {
        if (!old) return old;
        return {
          ...old,
          isDeleted: true,
        };
      });
      return { previousPostDetail };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: POST_KEY.POST_DETAIL(postId || 0),
      });
    },
    onError: (_err, _variables, context) => {
      if (context?.previousPostDetail) {
        queryClient.setQueryData(POST_KEY.POST_DETAIL(postId || 0), context.previousPostDetail);
      }
    },
  });

  return {
    addCommentMutation,
    deleteCommentMutation,
    scrapPostMutation,
    deletePostMutation,
  };
};
