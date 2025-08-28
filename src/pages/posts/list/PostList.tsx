import StudentCouncilListItem from './components/StudentCouncilListItem';
import CreatePostButton from '@shared/components/button/createPost/CreatePostButton';
import DropDown from '@shared/components/dropDown/DropDown';
import { useState, useRef, useEffect } from 'react';
import * as styles from './PostList.css';
import {
  PART_FILTER_OPTIONS,
  GRADE_FILTER_OPTIONS,
  TOPIC_FILTER_OPTIONS,
  AFFILIATION_FILTER_OPTIONS,
} from './constant/FilterOptions';
import { studentCouncilPostsDummy } from './constant/StudentCouncilPostsDummy';
import { ROUTES } from '@router/constant/Routes';

export default function PostList() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 필터 상태
  const [partFilter, setPartFilter] = useState('ALL');
  const [gradeFilter, setGradeFilter] = useState('ALL');
  const [topicFilter, setTopicFilter] = useState('ALL');
  const [affiliationFilter, setAffiliationFilter] = useState('ALL');

  const totalSlides = studentCouncilPostsDummy.length;

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
    if (containerRef.current) {
      const itemWidth = 29 + 16;
      const scrollAmount = index * itemWidth;

      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // 스크롤 이벤트 감지
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = 29 + 20; // 아이템 너비 + gap

      const currentIndex = Math.floor(scrollLeft / (totalSlides * itemWidth));

      setCurrentSlide(Math.max(0, Math.min(currentIndex, totalSlides - 1)));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [totalSlides]);

  return (
    <div className={styles.container}>
      {/* 필터 섹션 */}
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

      <div className={styles.generalPostsSection}></div>

      <div className={styles.createButtonWrapper}>
        <CreatePostButton to={ROUTES.POSTS.CREATE} />
      </div>
    </div>
  );
}
