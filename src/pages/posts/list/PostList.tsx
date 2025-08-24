import PostListItem from './components/PostListItem';
import StudentCouncilListItem from './components/StudentCouncilListItem';
import { generalPostsDummy } from './constant/GeneralPostsDummy';
import { studentCouncilPostsDummy } from './constant/StudentCouncilPostsDummy';
import * as styles from './PostList.css';

export default function PostList() {
  return (
    <div className={styles.container}>
      <div className={styles.studentCouncilSection}>
        <h2 className={styles.sectionTitle}>학생회 소식</h2>
        <div className={styles.studentCouncilContainer}>
          {studentCouncilPostsDummy.map(post => (
            <StudentCouncilListItem
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              imageUrl={post.imageUrl}
              categories={post.categories}
              createdAt={post.createdAt}
              commentCount={post.commentCount}
              authorName={post.authorName}
              onClick={id => console.log(`Student Council Post ${id} clicked`)}
            />
          ))}
        </div>
      </div>

      <div className={styles.generalPostsSection}>
        <h2 className={styles.sectionTitle}>전체 게시글</h2>
        {generalPostsDummy.map(post => (
          <PostListItem
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            imageUrl={post.imageUrl}
            categories={post.categories}
            createdAt={post.createdAt}
            commentCount={post.commentCount}
            authorName={post.authorName}
            onClick={id => console.log(`Post ${id} clicked`)}
          />
        ))}
      </div>
    </div>
  );
}
