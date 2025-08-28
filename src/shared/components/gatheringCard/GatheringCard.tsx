import * as styles from '@/shared/components/gatheringCard/GatheringCard.css';
import { Ic_personGrey300 } from '@svg/index';
import Category from '@/shared/components/category/Category';
import StatusChip from '@/shared/components/gatheringCard/component/StatusChip';
import { type StatusType } from '@/shared/constant/status';
import { SUBJECT_CATEGORY, type Subject } from '@shared/constant/subject';

interface GatheringCardProps {
  meetingId: number;
  hostName: string;
  meetingName: string;
  recruitNumber: number;
  currentRecruitCount: number;
  category: Subject;
  status: StatusType;
  imageUrl: string;
}

export default function GatheringCard({
  meetingId,
  hostName,
  meetingName,
  recruitNumber,
  currentRecruitCount,
  category,
  status,
  imageUrl,
}: GatheringCardProps) {
  const handleClick = () => {
    console.log(meetingId);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={`이미지`} className={styles.image} />
        <StatusChip status={status} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{meetingName}</h2>
        <p className={styles.description}>{category}</p>
        <div className={styles.row}>
          <div className={styles.countContainer}>
            <Ic_personGrey300 className={styles.icon} />
            <div className={styles.count}>{`${currentRecruitCount} / ${recruitNumber} 명`}</div>
          </div>
          <Category
            text={SUBJECT_CATEGORY[category].text}
            icon={SUBJECT_CATEGORY[category].icon}
            color={SUBJECT_CATEGORY[category].color}
          />
        </div>
        <div className={styles.row}>
          <div className={styles.footer}>{hostName}</div>
        </div>
      </div>
    </div>
  );
}
