import Header from '@shared/components/Header/Header';
import * as styles from '@/pages/posts/create/CreatePost.css';
import FormSection from '@shared/components/formSection/FormSection';
import Input from '@shared/components/input/Input';
import { usePostsForm } from './hooks/usePostsForm';
import { GRADE_CATEGORY_OPTIONS } from '@shared/constant/grade';
import { SUBJECT_CATEGORY_OPTIONS } from '@shared/constant/subject';
import { PART_CATEGORY_OPTIONS } from '@shared/constant/part';
import DropDown from '@shared/components/dropDown/DropDown';
import ImageBtn from '@shared/components/imageBtn/ImageBtn';
import Button from '@shared/components/button/Button';
import TextArea from '@shared/components/textArea/TextArea';
import { AFFILIATION_CATEGORY_OPTIONS } from '@shared/constant/affiliation';

export default function CreatePost() {
  const { formData, handleStringChange, handleDropdownChange, handleImageUrlsChange, errors, onSubmit, handleSubmit, preview } = usePostsForm();
  return (
    <div className={styles.createPostContainer}>
      <Header showBackButton={true} showLogo={false} />
      <div className={styles.scrollableContent}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>게시글 작성</p>
          <p className={styles.description}>무엇을 공유하고 싶으신가요?</p>
        </div>
        <FormSection title="게시물 제목" errorMessage={errors.title?.message}>
          <Input
            value={formData.title ?? ''}
            onChange={handleStringChange('title')}
            placeholder="제목을 입력하세요."
          />
        </FormSection>
        <FormSection title="게시물 내용" errorMessage={errors.content?.message}>
          <TextArea
            value={formData.content ?? ''}
            onChange={handleStringChange('content')}
            placeholder="게시물의 내용을 입력하세요."
          />
        </FormSection>
        <FormSection title="학년 (선택사항)" errorMessage={errors.grade?.message}>
          <DropDown
            options={GRADE_CATEGORY_OPTIONS}
            selectedValue={formData.grade ?? ''}
            setSelectedValue={handleDropdownChange('grade')}
          />
        </FormSection>
        <FormSection title="주제 (선택사항)" errorMessage={errors.topic?.message}>
          <DropDown
            options={SUBJECT_CATEGORY_OPTIONS}
            selectedValue={formData.topic ?? ''}
            setSelectedValue={handleDropdownChange('topic')}
          />
        </FormSection>
        <FormSection title="파트 (선택사항)" errorMessage={errors.part?.message}>
          <DropDown
            options={PART_CATEGORY_OPTIONS}
            selectedValue={formData.part ?? ''}
            setSelectedValue={handleDropdownChange('part')}
          />
        </FormSection>
        <FormSection title="소속 (선택사항)" errorMessage={errors.affiliation?.message}>
          <DropDown
            options={AFFILIATION_CATEGORY_OPTIONS}
            selectedValue={formData.affiliation ?? ''}
            setSelectedValue={handleDropdownChange('affiliation')}
          />
        </FormSection>
        <FormSection title="이미지" description="게시물의 이미지는 선택사항입니다." errorMessage={errors.imageUrls?.message}>
          <ImageBtn onChange={handleImageUrlsChange} images={preview} />
        </FormSection>
      </div>
      <div className={styles.buttonContainer}>
        <Button text="게시물 작성" onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
}
