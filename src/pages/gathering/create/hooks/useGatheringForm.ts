import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const gatheringFormSchema = z.object({
  type: z.string(),
  currentCount: z.string().regex(/^\d+$/, "숫자만 입력해주세요."),
  maxCount: z.string().regex(/^\d+$/, "숫자만 입력해주세요."),
  title: z.string().min(1, "제목을 입력해주세요."),
  description: z.string().min(1, "설명을 입력해주세요."),
  mediaUrl: z.array(z.string()).optional(),
  leaderName: z.string().min(1, "리더 이름을 입력해주세요."),
});

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
      type: "",
      currentCount: undefined,
      maxCount: undefined,
      title: "",
      description: "",
      mediaUrl: undefined,
      leaderName: "",
    },
    mode: "onChange",
  });

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

  return {
    formData,
    handleStringChange,
    handleDropdownChange,
    handleSubmit,
    errors,
  };
}
