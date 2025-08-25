import * as styles from '@/shared/components/gatheringCard/GatheringCard.css';
import { Ic_personGrey300 } from "@svg/index";
import Category from "@/shared/components/category/Category";
import StatusChip from "@/shared/components/gatheringCard/component/StatusChip";
import { CLASS_CATEGORY, type ClassCategoryKey } from "@/shared/constant/class";
import { type GatheringStatus } from '@/shared/constant/status';
import { getRelativeTime } from '@/shared/components/comment/utils/dateUtils';

interface GatheringCardProps {
  status: GatheringStatus;
  type: ClassCategoryKey;
  currentCount: number;
  maxCount: number;
  title: string;
  description: string;
  mediaUrl: string[];
  leaderName: string; 
  comments: string[];
  createdAt: Date;
}

export default function GatheringCard({
  status,
  type,
  currentCount,
  maxCount,
  title,
  description,
  mediaUrl,
  leaderName,
  comments,
  createdAt,
}: GatheringCardProps) {
  const imageUrl = mediaUrl?.[0] ?? CLASS_CATEGORY[type].image;
  const time = getRelativeTime(createdAt);
  return(
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <img src={imageUrl} alt={`${type} 이미지`} className={styles.image}/>
      <StatusChip status={status} />
    </div>
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.row}>
        <div className={styles.countContainer}>
          <Ic_personGrey300 className={styles.icon} />
          <div className={styles.count}>{`${currentCount} / ${maxCount} 명`}</div>
        </div>
        <Category text={type} color={CLASS_CATEGORY[type].color} />
      </div>
      <div className={styles.row}>
        <div className={styles.footer}>{leaderName}</div>
        <div className={styles.footer}>{`${time} 전`}</div>
        <div className={styles.footer}>{`댓글 ${comments.length}개`}</div>
      </div>
    </div>
  </div>
  );
}