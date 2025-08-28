import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGatherCreateMutations } from './useGatherCreateMutations';
import type { GatherCreateRequest } from '../types/GatherCreate';
import { useState } from 'react';
import { removeQueryString } from '@shared/utils/removeQueryString';

const today = new Date();
today.setHours(0, 0, 0, 0);

export const gatheringFormSchema = z
  .object({
    category: z.string().min(1, '카테고리를 선택해 주세요'),
    recruitNumber: z.string().refine(
      val => {
        const num = Number(val);
        return !isNaN(num) && Number.isInteger(num) && num >= 2;
      },
      { message: '2 이상의 숫자만 입력해 주세요.' }
    ),
    meetingName: z.string().min(1, '제목을 입력해 주세요.'),
    content: z.string().min(1, '설명을 입력해 주세요.'),
    imageUrls: z.array(z.string()).nonempty('이미지를 업로드 해주세요.'),
    recruitStartDate: z.string().min(1, '신청 시작일을 입력해 주세요.'),
    recruitEndDate: z.string().min(1, '신청 종료일을 입력해 주세요.'),
    actualStartDate: z.string().min(1, '활동 시작일을 입력해 주세요.'),
    actualEndDate: z.string().min(1, '활동 종료일을 입력해 주세요.'),
  })
  .refine(data => !data.recruitStartDate || new Date(data.recruitStartDate) >= today, {
    message: '신청 시작일은 오늘 이후여야 합니다.',
    path: ['recruitStartDate'],
  })
  .refine(
    data => {
      if (!data.recruitStartDate || !data.recruitEndDate) return true;
      const start = new Date(data.recruitStartDate);
      const end = new Date(data.recruitEndDate);
      return start <= end;
    },
    {
      message: '신청 종료일은 시작일 이후여야 합니다.',
      path: ['recruitEndDate'],
    }
  )
  .refine(
    data => {
      if (!data.actualStartDate || !data.recruitEndDate) return true;
      const actualStart = new Date(data.actualStartDate);
      const recruitEnd = new Date(data.recruitEndDate);
      return actualStart >= recruitEnd;
    },
    {
      message: '활동 시작일은 신청 종료일 이후여야 합니다.',
      path: ['actualStartDate'],
    }
  )
  .refine(
    data => {
      if (!data.actualStartDate || !data.actualEndDate) return true;
      const start = new Date(data.actualStartDate);
      const end = new Date(data.actualEndDate);
      return start <= end;
    },
    {
      message: '활동 종료일은 시작일 이후여야 합니다.',
      path: ['actualEndDate'],
    }
  );

export type GatheringFormValues = z.infer<typeof gatheringFormSchema>;

export function useGatheringForm() {
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<GatheringFormValues>({
    resolver: zodResolver(gatheringFormSchema),
    defaultValues: {
      category: '',
      recruitNumber: '',
      meetingName: '',
      content: '',
      imageUrls: [],
      recruitStartDate: '',
      recruitEndDate: '',
      actualStartDate: '',
      actualEndDate: '',
    },
    mode: 'onChange',
  });
  const [preview, setPreview] = useState<string[]>([]);
  const formData = watch();
  const opts = { shouldValidate: true, shouldDirty: true } as const;
  const handleStringChange = (field: keyof GatheringFormValues) => {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(field, e.target.value, opts);
    };
  };
  const handleDropdownChange = (field: keyof GatheringFormValues) => {
    return (value: string) => {
      setValue(field, value, opts);
    };
  };
  const { createGatheringMutation, postPresignedUrl, uploadFiles } = useGatherCreateMutations();
  const requestBody = {
    ...formData,
    recruitNumber: Number(formData.recruitNumber),
  } as GatherCreateRequest;

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
    console.log('requestBody : ', requestBody);
    createGatheringMutation.mutate(requestBody);
  };

  return {
    formData,
    handleStringChange,
    handleDropdownChange,
    handleSubmit,
    errors,
    onSubmit,
    preview,
    handleImageUrlsChange,
  };
}
