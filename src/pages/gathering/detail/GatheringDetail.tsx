import Category from '@/shared/components/category/Category';
import * as styles from '@/pages/gathering/detail/GatheringDetail.css';
import { CLASS_CATEGORY } from '@/shared/constant/class';
import { Ic_calendar, Ic_user } from '@/assets/svg';
import Button from '@/shared/components/button/Button';
import { useState } from 'react';
import PopUp from './components/popUp/PopUp';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@shared/components/Header/Header';
import type { GatheringDetailProps } from './types/Gathering';
import LoadingSvg from '@shared/components/loading/Loading';
import { STATUS, type StatusType } from '@shared/constant/status';
import { useGatheringDetail, useGatheringMutations } from '@/pages/gathering/detail/hooks';

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
  imageUrls,
  isHost,
  memberList = [],
}: GatheringDetailProps) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handlePopUpOpen = () => {
    setIsPopUpOpen(true);
  };

  const handlePopUpClose = () => {
    setIsPopUpOpen(false);
  };

  const { id } = useParams();
  const { meetingApplicationMutation, meetingCloseMutation } = useGatheringMutations(id);

  const handleMeetingApplicationButton = () => {
    if (isHost) {
      // 모임 마감
      meetingCloseMutation.mutate();
    } else {
      // 모임 신청
      meetingApplicationMutation.mutate();
    }
  };

  const isValidMeetingApplication = () => {
    console.log(meetingStatus);
    if (meetingStatus && Object.keys(STATUS).includes(meetingStatus)) {
      return meetingStatus === 'IN_PROGRESS';
    }
    return false;
  };

  return (
    <>
      {isPopUpOpen && (
        <PopUp
          recruitNumber={recruitNumber}
          currentRecruitCount={currentRecruitCount}
          isHost={isHost}
          handlePopUpClose={handlePopUpClose}
          memberList={memberList}
        />
      )}
      <div className={styles.gatheringWrapper}>
        <Header showBackButton={true} showLogo={false} />
        <img src={imageUrls[0]} alt="모임 이미지" className={styles.gatheringDetailMainImage} />
        <div className={styles.gatheringDetailWrapper}>
          <div className={styles.gatheringDetailHeader}>
            <div className={styles.gatheringDetailHeaderTop}>
              <Category
                text={STATUS[meetingStatus as StatusType]}
                color="KU_Darkgreen"
                size="medium"
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
              <Button
                text="모임 마감"
                variant="fill"
                size="medium"
                disabled={!isValidMeetingApplication() || meetingCloseMutation.isPending}
                onClick={handleMeetingApplicationButton}
              />
            ) : (
              <Button
                text="모임 신청"
                variant="fill"
                disabled={
                  !isValidMeetingApplication() ||
                  meetingApplicationMutation.isPending ||
                  currentRecruitCount >= recruitNumber
                }
                size="medium"
                onClick={handleMeetingApplicationButton}
              />
            )}
          </div>

          <div className={styles.gatheringDetailContentWrapper}>
            <p className={styles.gatheringDetailContentTitle}>모임안내</p>
            <div className={styles.gatheringDetailContent}>
              <p className={styles.gatheringDetailDescriptionTitle}>모임 소개</p>
              <Category
                key={category}
                text={
                  CLASS_CATEGORY[category as keyof typeof CLASS_CATEGORY]?.text ||
                  CLASS_CATEGORY.ETC.text
                }
                icon={
                  CLASS_CATEGORY[category as keyof typeof CLASS_CATEGORY]?.icon ||
                  CLASS_CATEGORY.ETC.icon
                }
                color={
                  CLASS_CATEGORY[category as keyof typeof CLASS_CATEGORY]?.color ||
                  CLASS_CATEGORY.ETC.color
                }
                size="medium"
              />
              <p className={styles.gatheringDetailDescription}>{content}</p>
            </div>

            <div className={styles.gatheringDetailContent}>
              <div className={styles.gatheringDetailDescriptionTitle}>
                <Ic_calendar className={styles.gatheringDetailDescriptionTitleIcon} />
                활동기간
              </div>
              <p>
                {actualStartDate} ~ {actualEndDate}
              </p>
            </div>
          </div>

          <div className={styles.gatheringDetailContent}>
            <div className={styles.gatheringDetailDescriptionTitle}>
              <Ic_calendar className={styles.gatheringDetailDescriptionTitleIcon} />
              모임 이미지
            </div>
            <div className={styles.gatheringDetailImageWrapper}>
              {imageUrls.map(item => (
                <img src={item} alt="모임 이미지" className={styles.gatheringDetailImage} />
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

  const {
    meetingDetail,
    memberList,
    isMeetingPending,
    isMemberPending,
    meetingError,
    memberError,
  } = useGatheringDetail(id);

  if (isMeetingPending || isMemberPending) {
    return <LoadingSvg />;
  }

  if (meetingError || memberError || !meetingDetail) {
    navigate('/not-found');
    return null;
  }

  return <GatheringDetailPage {...meetingDetail} memberList={memberList} />;
}
