import Header from "@shared/components/Header/Header";
import * as styles from "@/pages/gathering/create/CreateGathering.css";
import { useGatheringForm } from "./hooks/useGatheringForm";
import FormSection from "@shared/components/formSection/FormSection";
import Input from "@shared/components/input/Input";
import TextArea from "@shared/components/textArea/TextArea";
import { CLASS_CATEGORY_OPTIONS } from "@shared/constant/class";
import DropDown from "@shared/components/dropDown/DropDown";
import ImageBtn from "@shared/components/imageBtn/ImageBtn";
import { Ic_gathering } from "@svg/index";
import Button from "@shared/components/button/Button";

export default function CreateGathering() {
  const { formData, handleStringChange, handleDropdownChange, errors } = useGatheringForm();
  return (
    <>
      <Header showBackButton={true} />
      <div className={styles.container}>
        <div>
          <div className={styles.titleContainer}>
            <Ic_gathering className={styles.icon} />
            <h1 className={styles.title}>모임 만들기</h1>
          </div>
          <h2 className={styles.description}>모임을 만들어보세요!</h2>
        </div>
        <FormSection title="모임 이름!!" description="모임의 이름을 입력해주세요." errorMessage={errors.title?.message} type="gathering">
          <Input
            value={formData.title}
            onChange={handleStringChange("title")}
            placeholder="모임 이름"
          />
        </FormSection>
        <FormSection title="모임 설명" description="모임에 대한 설명을 입력해주세요." errorMessage={errors.description?.message} type="gathering">
          <TextArea
            value={formData.description}
            onChange={handleStringChange("description")}
            placeholder="모임 설명"
          />
        </FormSection>
        <FormSection title="어떤 모임인지 말해주세요" description="카테고리 설정" errorMessage={errors.tag?.message} type="gathering">
          <DropDown options={CLASS_CATEGORY_OPTIONS} selectedValue={formData.tag} setSelectedValue={handleDropdownChange("tag")} placeholder="타입 선택"/>
        </FormSection>
        <FormSection title="최대 인원을 정해주세요" description="최대 인원은 2명 이상이어야 합니다." errorMessage={errors.maxPeople?.message} type="gathering">
          <div className={styles.row}>
          <Input type="number" value={String(formData.maxPeople)} onChange={handleStringChange("maxPeople")} placeholder="최대 인원" />
          명
          </div>
        </FormSection>
        <FormSection title="모임 리더 이름" description="모임의 리더 이름을 입력해주세요." errorMessage={errors.studyLeader?.message} type="gathering">
          <Input
            value={formData.studyLeader}
            onChange={handleStringChange("studyLeader")}
            placeholder="리더 이름"
          />
        </FormSection>
        <FormSection title="신청 기간" description="모임의 신청 기간을 설정해주세요" errorMessage={errors.applicationStart?.message || errors.applicationEnd?.message} type="gathering">
          <div className={styles.row}>
            <Input type="date" value={formData.applicationStart} onChange={handleStringChange("applicationStart")} />
          -
          <Input type="date" value={formData.applicationEnd} onChange={handleStringChange("applicationEnd")} />
          </div>
        </FormSection>
        <FormSection title ="활동 기간" description="모임의 활동 기간을 설정해주세요" errorMessage={errors.activityStart?.message || errors.activityEnd?.message} type="gathering">
          <div className={styles.row}>
            <Input type="date" value={formData.activityStart} onChange={handleStringChange("activityStart")} />
            -
            <Input type="date" value={formData.activityEnd} onChange={handleStringChange("activityEnd")} />
          </div>
        </FormSection>
        <FormSection title="사진을 올려주세요" description="사진 업로드는 선택입니다" type="gathering">
          <ImageBtn />
        </FormSection>
        <Button text="모임 만들기" />
      </div>
    </>
  );
}
