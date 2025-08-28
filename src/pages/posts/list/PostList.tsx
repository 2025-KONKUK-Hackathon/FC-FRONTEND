import CreatePostButton from '@shared/components/button/createPost/CreatePostButton';
import PostListItem from './components/PostListItem';
import StudentCouncilListItem from './components/StudentCouncilListItem';
import { generalPostsDummy } from './constant/GeneralPostsDummy';
import { studentCouncilPostsDummy } from './constant/StudentCouncilPostsDummy';
import * as styles from './PostList.css';
import { useNavigate } from 'react-router-dom';
import { useSlideIndicator } from './hooks/useSlideIndicator';
import { ROUTES } from '@router/constant/Routes';
import { usePostList } from './hooks/usePostList';
import LoadingSvg from '@shared/components/loading/Loading';

function PostListPage() {
  const navigator = useNavigate();

  const totalSlides = studentCouncilPostsDummy.length;
  const { currentSlide, containerRef, handleIndicatorClick } = useSlideIndicator({
    totalSlides,
    itemWidth: 29,
    itemGap: 20,
  });

  return (
    <div className={styles.container}>
      <div className={styles.studentCouncilSection}>
        <div className={styles.sectionTitle}>
          <span>📢</span>
          <span>공지사항</span>
        </div>
        <div className={styles.studentCouncilContainer} ref={containerRef}>
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

        <div className={styles.slideIndicatorContainer}>
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`${styles.slideIndicator} ${
                index === currentSlide ? styles.slideIndicatorActive : ''
              }`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>

      <div className={styles.generalPostsSection}>
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
            onClick={id => navigator(`/posts/detail/${id}`)}
          />
        ))}
      </div>

      <div className={styles.createButtonWrapper}>
        <CreatePostButton to={ROUTES.POSTS.CREATE} />
      </div>
    </div>
  );
}

export default function PostList() {
  const { postListResult, isPostListPending, postListError } = usePostList();
  const navigate = useNavigate();

  if (isPostListPending) {
    return <LoadingSvg />;
  }

  if (postListError) {
    navigate('/not-found');
    return null;
  }

  return <PostListPage />;
}
