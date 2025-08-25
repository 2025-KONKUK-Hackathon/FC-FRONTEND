import Header from "@shared/components/Header/Header";
import * as styles from "@/pages/gathering/create/CreateGathering.css";
import { useGatheringForm } from "./hooks/useGatheringForm";
import FormSection from "@shared/components/formSection/FormSection";
import Input from "@shared/components/input/Input";
import TextArea from "@shared/components/textArea/TextArea";
import { CLASS_CATEGORY_OPTIONS } from "@shared/constant/class";
import DropDown from "@shared/components/dropDown/DropDown";
import ImageBtn from "@shared/components/imageBtn/ImageBtn";

export default function CreateGathering() {
  const { formData, handleStringChange, handleDropdownChange } = useGatheringForm();
  return (
    <>
      <Header showBackButton={true} />
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>모임 만들기</h1>
        <h2 className={styles.description}>모임을 만들어보세요!</h2>
        </div>
        <FormSection title="모임 이름!!" description="모임의 이름을 입력해주세요.">
          <Input
            value={formData.title}
            onChange={handleStringChange("title")}
            placeholder="모임 이름"
          />
        </FormSection>
        <FormSection title="모임 설명" description="모임에 대한 설명을 입력해주세요.">
          <TextArea
            value={formData.description}
            onChange={handleStringChange("description")}
            placeholder="모임 설명"
          />
        </FormSection>
        <FormSection title="어떤 모임인지 말해주세요" description="카테고리 설정">
          <DropDown options={CLASS_CATEGORY_OPTIONS} selectedValue={formData.type} setSelectedValue={handleDropdownChange("type")} placeholder="타입 선택"/>
        </FormSection>
        <FormSection title="최소 인원과 최대 인원을 정해주세요" description="최소 인원은 최대 인원은 2명 이상이어야 합니다.">
          <div className={styles.row}>
          <Input type="number" value={String(formData.currentCount)} onChange={handleStringChange("currentCount")} placeholder="최소 인원" />
          -
          <Input type="number" value={String(formData.maxCount)} onChange={handleStringChange("maxCount")} placeholder="최대 인원" />
          명
          </div>
        </FormSection>
        <FormSection title="모임 리더 이름" description="모임의 리더 이름을 입력해주세요.">
          <Input
            value={formData.leaderName}
            onChange={handleStringChange("leaderName")}
            placeholder="리더 이름"
          />
        </FormSection>
        <FormSection title="사진을 올려주세요" description="사진 업로드는 선택입니다">
          <ImageBtn />
        </FormSection>

      </div>
    </>
  );
}
