import CreatePostButton from '@shared/components/button/createPost/CreatePostButton';
import PostListItem from './components/PostListItem';
import StudentCouncilListItem from './components/StudentCouncilListItem';
import { studentCouncilPostsDummy } from './constant/StudentCouncilPostsDummy';
import * as styles from './PostList.css';
import { useNavigate } from 'react-router-dom';
import { useSlideIndicator } from './hooks/useSlideIndicator';
import { ROUTES } from '@router/constant/Routes';
import { usePostList } from './hooks/usePostList';
import LoadingSvg from '@shared/components/loading/Loading';
import type { PostListContent } from './types/postList';
import { useIntersectionObserver } from '@shared/hooks/useIntersectionObserver';

export default function PostList() {
  const { 
    postListResult, 
    isPostListPending, 
    postListError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePostList();
  const navigate = useNavigate();

  if (isPostListPending) {
    return <LoadingSvg />;
  }

  if (postListError) {
    navigate('/not-found');
    return null;
  }

  if (!postListResult?.content) {
    return <LoadingSvg />;
  }

  return (
    <PostListPage
      posts={postListResult.content}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
}

interface PostListPageProps {
  posts: PostListContent[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

function PostListPage({
  posts,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: PostListPageProps) {
  const navigator = useNavigate();

  const totalSlides = studentCouncilPostsDummy.length;
  const { currentSlide, containerRef, handleIndicatorClick } = useSlideIndicator({
    totalSlides,
    itemWidth: 29,
    itemGap: 20,
  });

  // 무한스크롤 trigger
  const { targetRef } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px',
    onIntersect: () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
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
        {posts.map(post => (
          <PostListItem
            key={post.postId}
            id={post.postId}
            title={post.title}
            content={post.content}
            imageUrl={post.imageUrl}
            categories={[post.topic, post.grade, post.affiliation, post.part].filter(Boolean)}
            createdAt={post.createdAt}
            commentCount={post.commentCount}
            authorName={post.writerName}
            onClick={id => navigator(`/posts/detail/${id}`)}
          />
        ))}
        
        {/* 무한스크롤 트리거 */}
        <div ref={targetRef} style={{ height: '20px' }} />
        
        {/* 로딩 인디케이터 */}
        {isFetchingNextPage && (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <LoadingSvg />
          </div>
        )}
      </div>

      <div className={styles.createButtonWrapper}>
        <CreatePostButton to={ROUTES.POSTS.CREATE} />
      </div>
    </div>
  );
}