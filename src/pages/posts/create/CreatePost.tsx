import Header from "@shared/components/Header/Header";
import * as styles from "@/pages/posts/create/CreatePost.css";
import { Ic_alrim } from "@svg/index";
import FormSection from "@shared/components/formSection/FormSection";
import Input from "@shared/components/input/Input";
import { usePostsForm } from "./hooks/usePostsForm";
import { GRADE_CATEGORY_OPTIONS } from "@shared/constant/grade";
import { SUBJECT_CATEGORY_OPTIONS } from "@shared/constant/subject";
import { PART_CATEGORY_OPTIONS } from "@shared/constant/part";
import DropDown from "@shared/components/dropDown/DropDown";
import ImageBtn from "@shared/components/imageBtn/ImageBtn";
import Button from "@shared/components/button/Button";
import TextArea from "@shared/components/textArea/TextArea";

export default function CreatePost() {
  const { formData, handleStringChange, handleDropdownChange, errors } = usePostsForm();
  return (
    <>
      <Header showBackButton={true} />
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <Ic_alrim className={styles.icon} />
          <h1 className={styles.title}>게시물 작성</h1>
        </div>
        <p className={styles.description}>당신의 생각을 사람들과 나누세요!</p>

        <FormSection title="게시물 제목" description="게시물의 제목을 입력해주세요." errorMessage={errors.title?.message}>
          <Input value={formData.title ?? ""} onChange={handleStringChange("title")} placeholder="제목을 입력하세요." />
        </FormSection>
        <FormSection title="게시물 설명" description="게시물의 설명을 입력해주세요." errorMessage={errors.description?.message}>
          <TextArea value={formData.description ?? ""} onChange={handleStringChange("description")} placeholder="설명을 입력하세요." />
        </FormSection>
        <FormSection title="학년을 선택해주세요" description="학년을 정확히 선택해주세요" errorMessage={errors.grade?.message}>
          <DropDown options={GRADE_CATEGORY_OPTIONS} selectedValue={formData.grade??""} setSelectedValue={handleDropdownChange("grade")} />
        </FormSection>
        <FormSection title="주제를 선택해주세요" description="주제를 정확히 선택해주세요" errorMessage={errors.subject?.message}>
          <DropDown options={SUBJECT_CATEGORY_OPTIONS} selectedValue={formData.subject??""} setSelectedValue={handleDropdownChange("subject")} />
        </FormSection>
        <FormSection title="파트를 선택해주세요" description="파트를 정확히 선택해주세요" errorMessage={errors.part?.message}>
          <DropDown options={PART_CATEGORY_OPTIONS} selectedValue={formData.part??""} setSelectedValue={handleDropdownChange("part")} />
        </FormSection>
        <FormSection title="이미지" description="게시물의 이미지를 업로드해주세요.">
          <ImageBtn />
        </FormSection>
        <Button text="게시물 작성" />
      </div>
    </>
  )
}
