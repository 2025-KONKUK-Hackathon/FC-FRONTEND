import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const postsFormSchema = z.object({
  title: z.string().min(1, "제목을 입력해주세요."),
  description: z.string().min(1, "설명을 입력해주세요."),
  img: z.array(z.string().min(1, "이미지를 입력해주세요.")),
  grade: z.string().min(1, "학년을 선택해주세요."),
  subject: z.string().min(1, "과목을 선택해주세요."),
  part: z.string().min(1, "파트를 선택해주세요."),
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
      title: "",
      description: "",
      img: [],
      grade: undefined,
      subject: undefined,
      part: undefined,
    },
    mode: "onChange",
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

  return {
    formData,
    handleStringChange,
    handleDropdownChange,
    errors,
    handleSubmit,
  };
}
