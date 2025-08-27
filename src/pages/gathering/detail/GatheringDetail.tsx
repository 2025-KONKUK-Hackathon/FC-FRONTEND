import Category from "@/shared/components/category/Category";
import * as styles from "@/pages/gathering/detail/GatheringDetail.css";
import {
  SUBJECT_CATEGORY,
  type SubjectCategory,
} from "@/shared/constant/subject";
import { Ic_calendar, Ic_user } from "@/assets/svg";
import Button from "@/shared/components/button/Button";
import { useState, useEffect } from "react";
import PopUp from "./components/popUp/PopUp";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@shared/components/Header/Header";
import { request } from "@/api/request";
import type {
  GatheringDetailProps,
  GatheringMemberResponse,
  GatheringDetailResponse,
} from "./types/Gathering";

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
  isHost = true,
  memberList = [],
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
          recruitNumber={recruitNumber}
          currentRecruitCount={currentRecruitCount}
          isHost={true}
          handlePopUpClose={handlePopUpClose}
          memberList={memberList}
        />
      )}
      <div className={styles.gatheringWrapper}>
        <Header showBackButton={true} showLogo={false} />
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
            {isHost ? (
              <Button text={`모임 마감`} variant="fill" size="medium" />
            ) : (
              <Button text={`모임 신청`} variant="fill" size="medium" />
            )}
          </div>

          <div className={styles.gatheringDetailContentWrapper}>
            <p className={styles.gatheringDetailContentTitle}>모임안내</p>
            <div className={styles.gatheringDetailContent}>
              <p className={styles.gatheringDetailDescriptionTitle}>
                모임 소개
              </p>
              <Category
                key={category}
                text={
                  SUBJECT_CATEGORY[category as SubjectCategory]?.text || "기타"
                }
                icon={
                  SUBJECT_CATEGORY[category as SubjectCategory]?.icon || "🌈"
                }
                color={
                  SUBJECT_CATEGORY[category as SubjectCategory]?.color ||
                  "White"
                }
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
  const navigate = useNavigate();
  const [meetingDetail, setMeetingDetail] =
    useState<GatheringDetailResponse | null>(null);
  const [memberList, setMemberList] = useState<GatheringMemberResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        // 모임 상세 정보와 멤버 목록을 병렬로 가져오기
        const [meetingData, membersData] = await Promise.all([
          request<GatheringDetailResponse>({
            method: "GET",
            url: `/meetings/${id}`,
          }),
          request<GatheringMemberResponse[]>({
            method: "GET",
            url: `/meetings/${id}/members`,
          }),
        ]);

        setMeetingDetail(meetingData);
        setMemberList(membersData);
      } catch (err) {
        navigate("/not-found");
      }
    };
    fetchData();
  }, [id, navigate]);

  if (!meetingDetail) {
    return <div>모임 정보를 찾을 수 없습니다.</div>;
  }

  return <GatheringDetailPage {...meetingDetail} memberList={memberList} />;
}
