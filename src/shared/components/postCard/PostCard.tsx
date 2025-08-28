import Category from '@shared/components/category/Category';
import * as styles from './PostCard.css';
import { AFFILIATION_CATEGORY, type AffiliationCategoryKey } from '@shared/constant/affiliation';
import { PART_CATEGORY, type Part } from '@shared/constant/part';
import { GRADE_CATEGORY, type Grade } from '@shared/constant/grade';
import { SUBJECT_CATEGORY, type Subject } from '@shared/constant/subject';
import { getTimeAgo } from '@shared/utils/timeUtils';

interface PostCardProps {
  postId: number;
  title: string;
  content: string;
  imageUrl: string;
  grade: Grade;
  affiliation: AffiliationCategoryKey;
  part: Part;
  topic: Subject;
  createdAt: string;
  commentCount: number;
  writerName: string;
  writerId: number;
  onClick?: (id: string) => void;
}

export default function PostCard({
  postId,
  title,
  content,
  imageUrl,
  grade,
  affiliation,
  part,
  topic,
  createdAt,
  commentCount,
  writerName,
  onClick,
}: PostCardProps) {
  return (
    <div className={styles.container} onClick={() => onClick?.(postId.toString())}>
      <div className={styles.topSection}>
        <div className={styles.textSection}>
          {/* todo: 제목 앞에 '학생회'나 'LINK' 칩 추가하기 */}
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.content}>{content}</p>
        </div>
        {imageUrl && (
          <div className={styles.imageSection}>
            <img src={imageUrl} alt="" className={styles.image} />
          </div>
        )}
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.categoriesContainer}>
          {grade && (
            <Category
              text={GRADE_CATEGORY[grade].text}
              icon={GRADE_CATEGORY[grade].icon}
              color={GRADE_CATEGORY[grade].color}
              size="medium"
            />
          )}
          {affiliation && (
            <Category
              text={AFFILIATION_CATEGORY[affiliation].text}
              icon={AFFILIATION_CATEGORY[affiliation].icon}
              color={AFFILIATION_CATEGORY[affiliation].color}
              size="medium"
            />
          )}
          {part && (
            <Category
              text={PART_CATEGORY[part].text}
              icon={PART_CATEGORY[part].icon}
              color={PART_CATEGORY[part].color}
              size="medium"
            />
          )}
          {topic && (
            <Category
              text={SUBJECT_CATEGORY[topic].text}
              icon={SUBJECT_CATEGORY[topic].icon}
              color={SUBJECT_CATEGORY[topic].color}
              size="medium"
            />
          )}
        </div>

        <div className={styles.metaInfo}>
          <span className={styles.createdAt}>{getTimeAgo(createdAt)}</span>
          <span className={styles.commentCount}>댓글 {commentCount}</span>
          <span className={styles.authorName}>{writerName}</span>
        </div>
      </div>
    </div>
  );
}
