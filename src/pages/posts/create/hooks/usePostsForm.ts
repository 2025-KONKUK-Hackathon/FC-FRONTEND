import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePostsCreateMutations } from './usePostsCreateMutation';
import type { PostsCreateRequest } from '../types/PostsCreate';

export const postsFormSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요.'),
  content: z.string().min(1, '설명을 입력해주세요.'),
  imageUrls: z.array(z.string().min(1, '이미지를 입력해주세요.')),
  grade: z.string().min(1, '학년을 선택해주세요.'),
  topic: z.string().min(1, '과목을 선택해주세요.'),
  part: z.string().min(1, '파트를 선택해주세요.'),
  affiliation: z.string().min(1, '소속을 선택해주세요.'),
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
      imageUrls: ['img1', 'img2'],
      grade: '',
      topic: '',
      part: '',
      affiliation: '',
    },
    mode: 'onChange',
  });

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
  const { createPostsMutation } = usePostsCreateMutations();
  const requestBody = {
    ...formData,
  } as PostsCreateRequest;

  const onSubmit = () => {
    console.log('formData', formData);
    createPostsMutation.mutate(requestBody);
  };

  return {
    formData,
    handleStringChange,
    handleDropdownChange,
    errors,
    handleSubmit,
    onSubmit,
  };
}
