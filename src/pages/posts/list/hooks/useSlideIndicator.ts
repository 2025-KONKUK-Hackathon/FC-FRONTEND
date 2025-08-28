import { useState, useRef, useEffect } from "react";

interface UseSlideIndicatorProps {
  totalSlides: number;
  itemWidth?: number;
  itemGap?: number;
}

export function useSlideIndicator({
  totalSlides,
  itemWidth = 29,
  itemGap = 20,
}: UseSlideIndicatorProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
    if (containerRef.current) {
      const scrollAmount = index * (itemWidth + itemGap);

      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const totalItemWidth = itemWidth + itemGap;

      const currentIndex = Math.floor(scrollLeft / (totalSlides * totalItemWidth));

      setCurrentSlide(Math.max(0, Math.min(currentIndex, totalSlides - 1)));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [totalSlides, itemWidth, itemGap]);

  return {
    currentSlide,
    containerRef,
    handleIndicatorClick,
  };
}