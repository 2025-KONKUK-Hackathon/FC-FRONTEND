import * as styles from '@/shared/components/gatheringCard/GatheringCard.css';
import { Ic_personGrey300 } from '@svg/index';
import Category from '@/shared/components/category/Category';
import StatusChip from '@/shared/components/gatheringCard/component/StatusChip';
import { type StatusType } from '@/shared/constant/status';
import { CLASS_CATEGORY, type ClassCategoryKey } from '@shared/constant/class';

interface GatheringCardProps {
  meetingId: number;
  hostName: string;
  meetingName: string;
  content: string;
  recruitNumber: number;
  currentRecruitCount: number;
  category: ClassCategoryKey;
  status: StatusType;
  imageUrl: string;
}

export default function GatheringCard({
  meetingId,
  hostName,
  meetingName,
  content,
  recruitNumber,
  currentRecruitCount,
  category,
  status,
  // imageUrl,
}: GatheringCardProps) {
  const handleClick = () => {
    console.log(meetingId);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.imageContainer}>
        {/* <img src={imageUrl} alt={`이미지`} className={styles.image} /> */}
        <div className={styles.temp}></div>
        <StatusChip status={status} />
      </div>
      <div className={styles.content}>
        <div className={styles.headerSection}>
          <h2 className={styles.title}>{meetingName}</h2>
        </div>
        
        <div className={styles.contentText}>
          {content}
        </div>
        
        <div className={styles.bottomRow}>
          <div className={styles.leftInfo}>
            <Category
              text={CLASS_CATEGORY[category].text}
              icon={CLASS_CATEGORY[category].icon}
              color={CLASS_CATEGORY[category].color}
            />
            <div className={styles.countContainer}>
              <Ic_personGrey300 className={styles.icon} />
              <div className={styles.count}>{`${currentRecruitCount} / ${recruitNumber}`}</div>
            </div>
          </div>
          <div className={styles.footer}>{hostName}</div>
        </div>
      </div>
    </div>
  );
}
