import Header from '@shared/components/Header/Header';
import * as styles from '@/pages/gathering/create/CreateGathering.css';
import { useGatheringForm } from './hooks/useGatheringForm';
import FormSection from '@shared/components/formSection/FormSection';
import Input from '@shared/components/input/Input';
import TextArea from '@shared/components/textArea/TextArea';
import { CLASS_CATEGORY_OPTIONS } from '@shared/constant/class';
import DropDown from '@shared/components/dropDown/DropDown';
import ImageBtn from '@shared/components/imageBtn/ImageBtn';
import Button from '@shared/components/button/Button';

export default function CreateGathering() {
  const {
    formData,
    handleStringChange,
    handleDropdownChange,
    errors,
    onSubmit,
    handleSubmit,
    preview,
    handleImageUrlsChange,
  } = useGatheringForm();
  return (
    <div className={styles.container}>
      <Header showBackButton={true} showLogo={false} />
      <div className={styles.scrollableContent}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>모임 만들기</h1>
          <h2 className={styles.description}>모임을 만들어보세요</h2>
        </div>
        <FormSection
          title="모임 이름"
          description="모임의 이름을 입력해 주세요."
          errorMessage={errors.meetingName?.message}
        >
          <Input
            value={formData.meetingName ?? ''}
            onChange={handleStringChange('meetingName')}
            placeholder="모임 이름"
          />
        </FormSection>
        <FormSection
          title="모임 설명"
          description="모임에 대한 설명을 입력해 주세요."
          errorMessage={errors.content?.message}
        >
          <TextArea
            value={formData.content ?? ''}
            onChange={handleStringChange('content')}
            placeholder="모임 설명"
          />
        </FormSection>
        <FormSection title="어떤 모임인지 설명해 주세요" errorMessage={errors.category?.message}>
          <DropDown
            options={CLASS_CATEGORY_OPTIONS}
            selectedValue={formData.category}
            setSelectedValue={handleDropdownChange('category')}
            placeholder="카테고리 선택"
          />
        </FormSection>
        <FormSection
          title="최대 인원을 정해주세요"
          description="최대 인원은 2명 이상이어야 합니다."
          errorMessage={errors.recruitNumber?.message}
        >
          <div className={styles.row}>
            <Input
              type="number"
              value={String(formData.recruitNumber ?? 0)}
              onChange={handleStringChange('recruitNumber')}
              placeholder="최대 인원"
            />
          </div>
        </FormSection>
        <FormSection
          title="신청 기간"
          description="모임의 신청 기간을 설정해주세요"
          errorMessage={errors.recruitStartDate?.message || errors.recruitEndDate?.message}
        >
          <div className={styles.row}>
            <Input
              type="date"
              value={formData.recruitStartDate ?? ''}
              onChange={handleStringChange('recruitStartDate')}
            />
            -
            <Input
              type="date"
              value={formData.recruitEndDate ?? ''}
              onChange={handleStringChange('recruitEndDate')}
            />
          </div>
        </FormSection>
        <FormSection
          title="활동 기간"
          description="모임의 활동 기간을 설정해주세요"
          errorMessage={errors.actualStartDate?.message || errors.actualEndDate?.message}
        >
          <div className={styles.row}>
            <Input
              type="date"
              value={formData.actualStartDate ?? ''}
              onChange={handleStringChange('actualStartDate')}
            />
            -
            <Input
              type="date"
              value={formData.actualEndDate ?? ''}
              onChange={handleStringChange('actualEndDate')}
            />
          </div>
        </FormSection>
        <FormSection title="사진을 올려주세요">
          <ImageBtn onChange={handleImageUrlsChange} images={preview} />
        </FormSection>
        <div className={styles.buttonContainer}>
          <Button text="모임 만들기" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  );
}
