import Category from '@shared/components/category/Category';
import * as styles from './StudentCouncilListItem.css';
import { GRADE_CATEGORY, type Grade } from '@shared/constant/grade';
import { PART_CATEGORY, type Part } from '@shared/constant/part';
import { SUBJECT_CATEGORY, type Subject } from '@shared/constant/subject';
import { AFFILIATION_CATEGORY, type AffiliationCategoryKey } from '@shared/constant/affiliation';
import { CLASS_CATEGORY } from '@shared/constant/class';

interface StudentCouncilListItemProps {
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

export default function StudentCouncilListItem({
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
}: StudentCouncilListItemProps) {
  const handleClick = () => {
    onClick?.(postId.toString());
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.topSection}>
        {imageUrl && (
          <div className={styles.imageSection}>
            <img src={imageUrl} alt="" className={styles.image} />
          </div>
        )}
        <div className={styles.textSection}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.content}>{content}</p>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.categoriesContainer}>
          <Category
            text={CLASS_CATEGORY.ANNOUNCEMENT.text}
            icon={CLASS_CATEGORY.ANNOUNCEMENT.icon}
            color={CLASS_CATEGORY.ANNOUNCEMENT.color}
            size="medium"
          />
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
          <span className={styles.createdAt}>{createdAt}</span>
          <span className={styles.commentCount}>{commentCount}</span>
          <span className={styles.authorName}>{writerName}</span>
        </div>
      </div>
    </div>
  );
}
