import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const gatheringFormSchema = z
  .object({
    tag: z.string(),
    maxPeople: z.string().regex(/^\d+$/, "숫자만 입력해주세요."),
    title: z.string().min(1, "제목을 입력해주세요."),
    description: z.string().min(1, "설명을 입력해주세요."),
    img: z.array(z.string()).optional(),
    studyLeader: z.string().min(1, "리더 이름을 입력해주세요."),
    applicationStart: z.string().min(1, "신청 시작일을 입력해주세요."),
    applicationEnd: z.string().min(1, "신청 종료일을 입력해주세요."),
    activityStart: z.string().min(1, "활동 시작일을 입력해주세요."),
    activityEnd: z.string().min(1, "활동 종료일을 입력해주세요."),
  })
  .refine(
    (data) =>
      !data.applicationStart ||
      !data.applicationEnd ||
      data.applicationStart <= data.applicationEnd,
    {
      message: "신청 종료일은 시작일보다 같거나 커야 합니다.",
      path: ["applicationEnd"],
    }
  )
  .refine(
    (data) =>
      !data.activityStart ||
      !data.activityEnd ||
      data.activityStart <= data.activityEnd,
    {
      message: "활동 종료일은 시작일보다 같거나 커야 합니다.",
      path: ["activityEnd"],
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
      tag: "",
      maxPeople: "",
      title: "",
      description: "",
      img: undefined,
      studyLeader: "",
      applicationStart: "",
      applicationEnd: "",
      activityStart: "",
      activityEnd: "",
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
