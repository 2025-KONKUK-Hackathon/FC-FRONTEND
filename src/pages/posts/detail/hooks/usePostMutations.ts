import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { InfiniteData } from '@tanstack/react-query';
import { request } from '@api/request';
import { POSTS_KEY } from '@shared/constant/queryKey';
import { HTTPMethod } from '@api/request';
import type {
  AddCommentRequest,
  PostCommentResponse,
  PostDetailResponse,
} from '../types/postTypes';

export const usePostMutations = (postId: string) => {
  const queryClient = useQueryClient();

  // 댓글 작성
  const addCommentMutation = useMutation({
    mutationFn: (data: AddCommentRequest) =>
      request<PostCommentResponse>({
        method: HTTPMethod.POST,
        url: '/posts/comments',
        body: {
          postId: data.postId,
          content: data.content,
        },
      }),
    onMutate: async variables => {
      await queryClient.cancelQueries({
        queryKey: POSTS_KEY.POSTS_COMMENTS(variables.postId),
      });

      queryClient.setQueryData(
        POSTS_KEY.POSTS_DETAIL(variables.postId),
        (old: PostDetailResponse | undefined) => {
          if (!old) return old;
          return {
            ...old,
            commentCount: old.commentCount + 1,
          };
        }
      );
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: POSTS_KEY.POSTS_COMMENTS(variables.postId),
      });
    },
  });

  // 게시글 스크랩
  const scrapPostMutation = useMutation({
    mutationFn: (postId: string) =>
      request<void>({
        method: HTTPMethod.POST,
        url: '/posts/scraps',
        query: {
          postId,
        },
      }),
    onMutate: async variables => {
      await queryClient.cancelQueries({
        queryKey: POSTS_KEY.POSTS_DETAIL(variables),
      });
      const previousPostDetail = queryClient.getQueryData<PostDetailResponse>(
        POSTS_KEY.POSTS_DETAIL(variables)
      );
      queryClient.setQueryData(
        POSTS_KEY.POSTS_DETAIL(variables),
        (old: PostDetailResponse | undefined) => {
          if (!old) return old;
          return {
            ...old,
            isScrapped: true,
          };
        }
      );
      return { previousPostDetail };
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: POSTS_KEY.POSTS_DETAIL(variables),
      });
    },
    onError: (_err, variables, context) => {
      if (context?.previousPostDetail) {
        queryClient.setQueryData(POSTS_KEY.POSTS_DETAIL(variables), context.previousPostDetail);
      }
    },
  });

  // 댓글 삭제
  const deleteCommentMutation = useMutation({
    mutationFn: (commentId: string) =>
      request<void>({
        method: HTTPMethod.DELETE,
        url: `/posts/comments/${commentId}`,
      }),
    onMutate: async variables => {
      await queryClient.cancelQueries({
        queryKey: POSTS_KEY.POSTS_COMMENTS(postId),
      });
      const previousComments = queryClient.getQueryData<InfiniteData<PostCommentResponse>>(
        POSTS_KEY.POSTS_COMMENTS(postId)
      );
      queryClient.setQueryData(
        POSTS_KEY.POSTS_COMMENTS(postId),
        (old: InfiniteData<PostCommentResponse> | undefined) => {
          if (!old) return old;
          return {
            ...old,
            pages: old.pages.map(page => ({
              ...page,
              content: page.content.filter(comment => String(comment.commentId) !== variables),
            })),
          };
        }
      );

      queryClient.setQueryData(
        POSTS_KEY.POSTS_DETAIL(postId),
        (old: PostDetailResponse | undefined) => {
          if (!old) return old;
          return {
            ...old,
            commentCount: Math.max(old.commentCount - 1, 0),
          };
        }
      );

      return { previousComments };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: POSTS_KEY.POSTS_COMMENTS(postId),
      });
    },
    onError: (_err, _variables, context) => {
      if (context?.previousComments) {
        queryClient.setQueryData(POSTS_KEY.POSTS_COMMENTS(postId), context.previousComments);
      }
    },
  });

  // 게시글 삭제
  const deletePostMutation = useMutation({
    mutationFn: (postId: string) =>
      request<void>({
        method: HTTPMethod.DELETE,
        url: `/posts/${postId}`,
      }),
    onMutate: async variables => {
      await queryClient.cancelQueries({
        queryKey: POSTS_KEY.POSTS_DETAIL(variables),
      });
      const previousPostDetail = queryClient.getQueryData<PostDetailResponse>(
        POSTS_KEY.POSTS_DETAIL(variables)
      );
      return { previousPostDetail };
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: POSTS_KEY.POSTS_DETAIL(variables),
      });
    },
    onError: (_err, variables, context) => {
      if (context?.previousPostDetail) {
        queryClient.setQueryData(POSTS_KEY.POSTS_DETAIL(variables), context.previousPostDetail);
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
