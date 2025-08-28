import Category from "@shared/components/category/Category";
import type { Color } from "@styles/theme.css";
import * as styles from "./PostListItem.css";

interface PostListItemProps {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
  categories: Array<{
    text: string;
    icon?: string;
    color?: Color;
  }>;
  createdAt: string;
  commentCount: number;
  authorName: string;
  onClick?: (id: number) => void;
}

export default function PostListItem({
  id,
  title,
  content,
  imageUrl,
  categories,
  createdAt,
  commentCount,
  authorName,
  onClick,
}: PostListItemProps) {
  const handleClick = () => {
    onClick?.(id);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
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
          {categories.map((category, index) => (
            <Category
              key={`${category.text}-${index}`}
              text={category.text}
              icon={category.icon}
              color={category.color}
              size="medium"
            />
          ))}
        </div>
        
        <div className={styles.metaInfo}>
          <span className={styles.createdAt}>{createdAt}</span>
          <span className={styles.commentCount}>댓글 {commentCount}</span>
          <span className={styles.authorName}>{authorName}</span>
        </div>
      </div>
    </div>
  );
}
