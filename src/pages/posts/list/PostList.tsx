import StudentCouncilListItem from './components/StudentCouncilListItem';
import CreatePostButton from '@shared/components/button/createPost/CreatePostButton';
import DropDown from '@shared/components/dropDown/DropDown';
import { useState } from 'react';
import * as styles from './PostList.css';
import {
  PART_FILTER_OPTIONS,
  GRADE_FILTER_OPTIONS,
  TOPIC_FILTER_OPTIONS,
  AFFILIATION_FILTER_OPTIONS,
} from './constant/FilterOptions';
import { ROUTES } from '@router/constant/Routes';
import { usePostList } from './hooks/usePostList';
import { useNavigate } from 'react-router-dom';
import LoadingSvg from '@shared/components/loading/Loading';
import type { PostListContent } from './types/postList';
import { useSlideIndicator } from './hooks/useSlideIndicator';
import { useIntersectionObserver } from '@shared/hooks/useIntersectionObserver';
import PostCard from '@shared/components/postCard/PostCard';
import EmptyState from '@shared/components/emptyState/EmptyState';
import type { Grade } from '@shared/constant/grade';
import type { AffiliationCategoryKey } from '@shared/constant/affiliation';
import type { Part } from '@shared/constant/part';
import type { Subject } from '@shared/constant/subject';

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
  // 필터 상태
  const [partFilter, setPartFilter] = useState('ALL');
  const [gradeFilter, setGradeFilter] = useState('ALL');
  const [topicFilter, setTopicFilter] = useState('ALL');
  const [affiliationFilter, setAffiliationFilter] = useState('ALL');

  const navigator = useNavigate();

  const totalSlides = posts.filter(post => post.isAnnouncement).length;
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

  // 필터링된 게시글 목록
  const filteredPosts = posts.filter(post => {
    const matchesAffiliation =
      affiliationFilter === 'ALL' || post.affiliation === affiliationFilter;
    const matchesPart = partFilter === 'ALL' || post.part === partFilter;
    const matchesGrade = gradeFilter === 'ALL' || post.grade === gradeFilter;
    const matchesTopic = topicFilter === 'ALL' || post.topic === topicFilter;

    return matchesAffiliation && matchesPart && matchesGrade && matchesTopic;
  });

  const studentCouncilPosts = posts.filter(post => post.isAnnouncement);

  return (
    <div className={styles.container}>
      <div className={styles.studentCouncilSection}>
        <div className={styles.sectionTitle}>
          <span>📢</span>
          <span>공지사항</span>
        </div>
        <div className={styles.studentCouncilContainer} ref={containerRef}>
          {studentCouncilPosts.map(post => (
            <StudentCouncilListItem
              key={post.postId}
              postId={post.postId}
              title={post.title}
              content={post.content}
              imageUrl={post.imageUrl}
              grade={post.grade as Grade}
              affiliation={post.affiliation as AffiliationCategoryKey}
              part={post.part as Part}
              topic={post.topic as Subject}
              createdAt={post.createdAt}
              commentCount={post.commentCount}
              writerName={post.writerName}
              writerId={post.writerId}
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
      <div className={styles.filterSection}>
        <div className={styles.filterContainer}>
          <div className={styles.filterDropdownWrapper}>
            <DropDown
              options={AFFILIATION_FILTER_OPTIONS}
              selectedValue={affiliationFilter}
              setSelectedValue={setAffiliationFilter}
              placeholder="소속"
              size="small"
            />
          </div>
          <div className={styles.filterDropdownWrapper}>
            <DropDown
              options={PART_FILTER_OPTIONS}
              selectedValue={partFilter}
              setSelectedValue={setPartFilter}
              placeholder="파트"
              size="small"
            />
          </div>
          <div className={styles.filterDropdownWrapper}>
            <DropDown
              options={GRADE_FILTER_OPTIONS}
              selectedValue={gradeFilter}
              setSelectedValue={setGradeFilter}
              placeholder="학년"
              size="small"
            />
          </div>
          <div className={styles.filterDropdownWrapper}>
            <DropDown
              options={TOPIC_FILTER_OPTIONS}
              selectedValue={topicFilter}
              setSelectedValue={setTopicFilter}
              placeholder="주제"
              size="small"
            />
          </div>
        </div>
      </div>

      {/* todo: 게시글 없을 시 띄울 기본 UI 컴포넌트 구현 */}

      <div className={styles.generalPostsSection}>
        {filteredPosts.length === 0 ? (
          <EmptyState 
            type="posts" 
            message="필터링 결과가 없습니다"
            subMessage="다른 필터 조건을 선택해보세요"
          />
        ) : (
          <>
            {filteredPosts.map(post => (
              <PostCard
                key={post.postId}
                postId={post.postId}
                title={post.title}
                content={post.content}
                imageUrl={post.imageUrl}
                grade={post.grade as Grade}
                affiliation={post.affiliation as AffiliationCategoryKey}
                part={post.part as Part}
                topic={post.topic as Subject}
                createdAt={post.createdAt} // todo: 게시글 생성시간 처리 로직 구현
                commentCount={post.commentCount}
                writerName={post.writerName}
                writerId={post.writerId}
                onClick={id => navigator(`/posts/detail/${id}`)}
              />
            ))}

            {/* 무한스크롤 트리거 */}
            <div ref={targetRef} style={{ height: '20px' }} />

            {/* 로딩 인디케이터 */}
            {/* todo: 무한스크롤용 로딩 인디케이터 추가하기 */}
            {isFetchingNextPage && (
              <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                <LoadingSvg />
              </div>
            )}
          </>
        )}
      </div>

      <div className={styles.createButtonWrapper}>
        <CreatePostButton to={ROUTES.POSTS.CREATE} />
      </div>
    </div>
  );
}
