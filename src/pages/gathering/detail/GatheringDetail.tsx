import Category from '@/shared/components/category/Category';
import * as styles from './GatheringDetail.css';
import { SUBJECT_CATEGORY, type SubjectCategory } from '@/shared/constant/subject';
import { Ic_calendar, Ic_user } from '@/assets/svg';
import Button from '@/shared/components/button/Button';

interface GatheringDetailProps {
  title: string;
  image: string;
  description: string;
  tags: SubjectCategory[];
  isRecruiting: string;
  maxPeople: number;
  currentPeople: number;
  activityPeriod: string;
  applicationPeriod: string;
  studyLeader: string;
}
//TODO: 모임 신청 가능 여부에 따라 조건부 렌더링, 모임장

export default function GatheringDetail({
  title = '모임 제목',
  image = 'https://picsum.photos/200/300',
  description = '모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명',
  tags = ['CLASS', 'STUDY'],
  isRecruiting = '모집중', //모임 신청 가능 여부
  maxPeople = 10, //모임 최대 인원
  currentPeople = 0, //모임 현재 인원
  activityPeriod = '2025-01-01 ~ 2025-01-01', //모임 활동기간
  applicationPeriod = '2025-01-01 ~ 2025-01-01', //모임 신청기간
  studyLeader = '스터디장', //스터디장
}: GatheringDetailProps) {
  return (
    <div className={styles.gatheringWrapper}>
      <img src={image} alt="모임 이미지" className={styles.gatheringDetailImage} />
      <div className={styles.gatheringDetailWrapper}>
        <div className={styles.gatheringDetailHeader}>
          <div className={styles.gatheringDetailHeaderTop}>
            <Category text={isRecruiting} icon="🕒" color="KU_Darkgreen" size="small" />
            <p className={styles.gatheringDetailDate}>{applicationPeriod}</p>
          </div>

          <p className={styles.gatheringDetailTitle}>{title}</p>
          <p className={styles.gatheringDetailStudyLeader}>
            <Ic_user className={styles.gatheringDetailStudyLeaderIcon} />
            {studyLeader}
          </p>
        </div>

        <div className={styles.gatheringDetailButtonWrapper}>
          <Button
            text={`모집 현황 ${currentPeople}/${maxPeople}`}
            variant="outline"
            size="medium"
          />
          <Button text={`모임 신청`} variant="fill" size="medium" />
        </div>

        <div className={styles.gatheringDetailContentWrapper}>
          <p className={styles.gatheringDetailContentTitle}>모임안내</p>
          <div className={styles.gatheringDetailContent}>
            <p className={styles.gatheringDetailDescriptionTitle}>모임 소개</p>
            <div className={styles.gatheringDetailDescriptionCategory}>
              {tags.map(tag => (
                <Category
                  key={tag}
                  text={SUBJECT_CATEGORY[tag].text}
                  icon={SUBJECT_CATEGORY[tag].icon}
                  color={SUBJECT_CATEGORY[tag].color}
                  size="small"
                />
              ))}
            </div>
            <p className={styles.gatheringDetailDescription}>{description}</p>
          </div>

          <div className={styles.gatheringDetailContent}>
            <div className={styles.gatheringDetailDescriptionTitle}>
              <Ic_calendar className={styles.gatheringDetailDescriptionTitleIcon} />
              활동기간
            </div>
            <p>{activityPeriod}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
