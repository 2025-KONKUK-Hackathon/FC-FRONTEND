import Category from "@/shared/components/category/Category";
import * as styles from "@/pages/gathering/detail/GatheringDetail.css";
import {
  SUBJECT_CATEGORY,
  type SubjectCategory,
} from "@/shared/constant/subject";
import { Ic_calendar, Ic_user } from "@/assets/svg";
import Button from "@/shared/components/button/Button";
import { useState } from "react";
import PopUp from "./components/popUp/PopUp";
import { useParams } from "react-router-dom";

interface GatheringDetailProps {
  meetingName: string;
  content: string;
  category: SubjectCategory;
  meetingStatus: string;
  recruitNumber: number;
  currentRecruitCount: number;
  recruitStartDate: string;
  recruitEndDate: string;
  actualStartDate: string;
  actualEndDate: string;
  hostName: string;
  hostId: number;
  imageUrls: string[];
}
//TODO: 모임 신청 가능 여부에 따라 조건부 렌더링, 모임장

function GatheringDetailPage({
  meetingName,
  content,
  category,
  meetingStatus,
  recruitNumber,
  currentRecruitCount,
  recruitStartDate,
  recruitEndDate,
  actualStartDate,
  actualEndDate,
  hostName,
  hostId,
  imageUrls,
}: GatheringDetailProps) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handlePopUpOpen = () => {
    setIsPopUpOpen(true);
  };

  const handlePopUpClose = () => {
    setIsPopUpOpen(false);
  };

  return (
    <>
      {isPopUpOpen && (
        <PopUp
          maxPeople={recruitNumber}
          currentPeople={currentRecruitCount}
          isHost={true}
          handlePopUpClose={handlePopUpClose}
        />
      )}
      <div className={styles.gatheringWrapper}>
        {
          //TOFO: 이미지 없을 걍우 처리
        }
        <img
          src={imageUrls[0]}
          alt="모임 이미지"
          className={styles.gatheringDetailImage}
        />
        <div className={styles.gatheringDetailWrapper}>
          <div className={styles.gatheringDetailHeader}>
            <div className={styles.gatheringDetailHeaderTop}>
              <Category
                text={meetingStatus}
                icon="🕒"
                color="KU_Darkgreen"
                size="small"
              />
              <p className={styles.gatheringDetailDate}>
                {recruitStartDate} ~ {recruitEndDate}
              </p>
            </div>

            <p className={styles.gatheringDetailTitle}>{meetingName}</p>
            <p className={styles.gatheringDetailStudyLeader}>
              <Ic_user className={styles.gatheringDetailStudyLeaderIcon} />
              {hostName}
            </p>
          </div>

          <div className={styles.gatheringDetailButtonWrapper}>
            <Button
              text={`모집 현황 ${currentRecruitCount}/${recruitNumber}`}
              variant="outline"
              size="medium"
              onClick={handlePopUpOpen}
            />
            {
              //TODO: host 여부에 따른 버튼 렌더링 로직 추가
            }
            <Button text={`모임 신청`} variant="fill" size="medium" />
          </div>

          <div className={styles.gatheringDetailContentWrapper}>
            <p className={styles.gatheringDetailContentTitle}>모임안내</p>
            <div className={styles.gatheringDetailContent}>
              <p className={styles.gatheringDetailDescriptionTitle}>
                모임 소개
              </p>
              <Category
                key={category}
                text={SUBJECT_CATEGORY[category].text}
                icon={SUBJECT_CATEGORY[category].icon}
                color={SUBJECT_CATEGORY[category].color}
                size="small"
              />
              <p className={styles.gatheringDetailDescription}>{content}</p>
            </div>

            <div className={styles.gatheringDetailContent}>
              <div className={styles.gatheringDetailDescriptionTitle}>
                <Ic_calendar
                  className={styles.gatheringDetailDescriptionTitleIcon}
                />
                활동기간
              </div>
              <p>
                {actualStartDate} ~ {actualEndDate}
              </p>
            </div>
          </div>

          <div className={styles.gatheringDetailContent}>
            <div className={styles.gatheringDetailDescriptionTitle}>
              <Ic_calendar
                className={styles.gatheringDetailDescriptionTitleIcon}
              />
              모임 이미지
            </div>
            <div className={styles.gatheringDetailImageWrapper}>
              {imageUrls.map((item) => (
                <img
                  src={item}
                  alt="모임 이미지"
                  className={styles.gatheringDetailImage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function GatheringDetail() {
  const { id } = useParams();
  //TODO: 모임 상세 조회 로직 추가
  const meetingDetail = {
    meetingName: "모임 제목",
    content: "모임 내용",
    category: "CLASS" as SubjectCategory,
    meetingStatus: "모집중",
    recruitNumber: 10,
    currentRecruitCount: 5,
    recruitStartDate: "2025-01-01",
    recruitEndDate: "2025-01-01",
    actualStartDate: "2025-01-01",
    actualEndDate: "2025-01-01",
    hostName: "홍길동",
    hostId: 1,
    imageUrls: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  };
  return <GatheringDetailPage {...meetingDetail} />;
}
