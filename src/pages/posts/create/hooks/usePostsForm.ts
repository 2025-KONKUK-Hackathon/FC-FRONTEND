import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePostsCreateMutations } from './usePostsCreateMutation';
import type { PostsCreateRequest } from '../types/PostsCreate';
import { useState } from 'react';
import { removeQueryString } from '@shared/utils/removeQueryString';

export const postsFormSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요.'),
  content: z.string().min(1, '설명을 입력해주세요.'),
  imageUrls: z.array(z.string().min(1, '이미지를 입력해주세요.')).optional(),
  grade: z.string().optional(),
  topic: z.string().optional(),
  part: z.string().optional(),
  affiliation: z.string().optional(),
});

export type PostsFormValues = z.infer<typeof postsFormSchema>;

export function usePostsForm() {
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<PostsFormValues>({
    resolver: zodResolver(postsFormSchema),
    defaultValues: {
      title: '',
      content: '',
      imageUrls: [],
      grade: '',
      topic: '',
      part: '',
      affiliation: '',
    },
    mode: 'onChange',
  });
  const [preview, setPreview] = useState<string[]>([]);
  const formData = watch();
  const opts = { shouldValidate: true, shouldDirty: true } as const;

  const handleStringChange = (field: keyof PostsFormValues) => {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(field, e.target.value, opts);
    };
  };
  const handleDropdownChange = (field: keyof PostsFormValues) => {
    return (value: string) => {
      setValue(field, value, opts);
    };
  };

  const { createPostsMutation, postPresignedUrl, uploadFiles } = usePostsCreateMutations();
  const requestBody = {
    ...formData,
  } as PostsCreateRequest;

  const handleImageUrlsChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    const mediaType = files.map(f => f.type);
    const urls = files.map(f => URL.createObjectURL(f));
    setPreview(urls);
    try {
      const mediaUrl = await postPresignedUrl.mutateAsync(mediaType);
      console.log('mediaUrl', mediaUrl);
      const cleanedUrls = removeQueryString(mediaUrl.mediaUrl);
      setValue('imageUrls', cleanedUrls, opts);
      uploadFiles(mediaUrl.mediaUrl, files);
      console.log('mediaUrl', mediaUrl);
      console.log('cleanedUrls', cleanedUrls);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  const onSubmit = () => {
    console.log('formData', formData);
    createPostsMutation.mutate(requestBody);
  };

  return {
    formData,
    handleStringChange,
    handleDropdownChange,
    handleImageUrlsChange,
    preview,
    errors,
    handleSubmit,
    onSubmit,
  };
}
