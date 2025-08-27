import CreatePostButton from "@shared/components/button/createPost/CreatePostButton";
import PostListItem from "./components/PostListItem";
import StudentCouncilListItem from "./components/StudentCouncilListItem";
import { generalPostsDummy } from "./constant/GeneralPostsDummy";
import { studentCouncilPostsDummy } from "./constant/StudentCouncilPostsDummy";
import * as styles from "./PostList.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PostList() {
  const navigator = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = studentCouncilPostsDummy.length;

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
    if (containerRef.current) {
      const itemWidth = 29 + 16;
      const scrollAmount = index * itemWidth;

      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
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

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [totalSlides]);

  return (
    <div className={styles.container}>
      <div className={styles.studentCouncilSection}>
        <div className={styles.sectionTitle}>
          <span>📢</span>
          <span>공지사항</span>
        </div>
        <div className={styles.studentCouncilContainer} ref={containerRef}>
          {studentCouncilPostsDummy.map((post) => (
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
              onClick={(id) =>
                console.log(`Student Council Post ${id} clicked`)
              }
            />
          ))}
        </div>

        <div className={styles.slideIndicatorContainer}>
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`${styles.slideIndicator} ${
                index === currentSlide ? styles.slideIndicatorActive : ""
              }`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>

      <div className={styles.generalPostsSection}>
        {generalPostsDummy.map((post) => (
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
            onClick={(id) => navigator(`/posts/detail/${id}`)}
          />
        ))}
      </div>

      <div className={styles.createButtonWrapper}>
        <CreatePostButton to={ROUTES.POSTS.CREATE} />
      </div>
    </div>
  );
}
