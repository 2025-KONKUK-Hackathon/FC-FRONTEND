import GatheringCard from '@shared/components/gatheringCard/GatheringCard';
import CreatePostButton from '@shared/components/button/createPost/CreatePostButton';
import DropDown from '@shared/components/dropDown/DropDown';
import LoadingSvg from '@shared/components/loading/Loading';
import EmptyState from '@shared/components/emptyState/EmptyState';
import { useIntersectionObserver } from '@shared/hooks/useIntersectionObserver';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ROUTES } from '@router/constant/Routes';
import { useGatheringList } from './hooks/useGatheringList';
import { CLASS_FILTER_OPTIONS } from './constant/FilterOptions';
import type { GatheringListContent } from './types/gatheringList';
import type { StatusType } from '@shared/constant/status';
import type { ClassCategoryKey } from '@shared/constant/class';
import * as styles from './GatheringList.css';

export default function GatheringList() {
  const {
    gatheringListResult,
    isGatheringListPending,
    gatheringListError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGatheringList();
  const navigate = useNavigate();

  if (isGatheringListPending) {
    return <LoadingSvg />;
  }

  if (gatheringListError) {
    navigate('/not-found');
    return null;
  }

  if (!gatheringListResult?.content) {
    return <LoadingSvg />;
  }

  return (
    <GatheringListPage
      gatherings={gatheringListResult.content}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
}

interface GatheringListPageProps {
  gatherings: GatheringListContent[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

function GatheringListPage({
  gatherings,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: GatheringListPageProps) {
  // 필터 상태
  const [classFilter, setClassFilter] = useState('ALL');

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

  // 필터링된 모임 목록
  const filteredGatherings = gatherings.filter(gathering => {
    const matchesClass = classFilter === 'ALL' || gathering.category === classFilter;
    return matchesClass;
  });

  return (
    <div className={styles.container}>
      {/* 동기부여 섹션 */}
      <div className={styles.motivationalSection}>
        <div className={styles.sparkleLeft}>✨</div>
        <div className={styles.motivationalText}>모임을 만들고 참여해보세요!</div>
        <div className={styles.motivationalSubText}>새로운 사람들과 함께하는 특별한 경험</div>
        <div className={styles.sparkleRight}>⭐</div>
      </div>

      {/* 필터 섹션 */}
      <div className={styles.filterSection}>
        <div className={styles.filterContainer}>
          <div className={styles.filterDropdownWrapper}>
            <DropDown
              options={CLASS_FILTER_OPTIONS}
              selectedValue={classFilter}
              setSelectedValue={setClassFilter}
              placeholder="카테고리"
              size="small"
            />
          </div>
        </div>
      </div>

      <div className={styles.generalPostsSection}>
        {filteredGatherings.length === 0 ? (
          <EmptyState
            type="gatherings"
            message="해당 조건의 모임이 없습니다"
            subMessage="새로운 모임을 만들어보는 건 어떨까요?"
          />
        ) : (
          <>
            {filteredGatherings.map(gathering => (
              <GatheringCard
                key={gathering.meetingId}
                meetingId={gathering.meetingId}
                hostName={gathering.hostName}
                meetingName={gathering.meetingName}
                content={gathering.content || '모임에 대한 설명이 없습니다.'}
                recruitNumber={gathering.recruitNumber}
                currentRecruitCount={gathering.currentRecruitCount}
                category={gathering.category as ClassCategoryKey}
                imageUrl={gathering.imageUrl}
                status={gathering.recruitStatus as StatusType}
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
          </>
        )}
      </div>

      <div className={styles.createButtonWrapper}>
        <CreatePostButton to={ROUTES.GATHERING.CREATE} text="모임 생성" />
      </div>
    </div>
  );
}
