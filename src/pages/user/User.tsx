import { Ic_user_solid } from '@svg/index';
import { useState } from 'react';
import * as styles from './User.css';
import { STAMP } from './constant/stamp';
import { useGetUserInfo, useGetUserMeeting, useGetUserScrap } from './hooks/useGetUser';
import { useNavigate } from 'react-router-dom';
import LoadingSvg from '@shared/components/loading/Loading';
import GatheringCard from '@shared/components/gatheringCard/GatheringCard';
import PostCard from '@shared/components/postCard/PostCard';
import EmptyState from '@shared/components/emptyState/EmptyState';
import type { ClassCategoryKey } from '@shared/constant/class';

export default function User() {
  const navigate = useNavigate();
  //게시물 스크랩, 내가 만든 모임
  const [menu, setMenu] = useState<'post' | 'gathering'>('post');
  const { userScrap, isUserScrapPending, userScrapError } = useGetUserScrap();
  const { userMeeting, isUserMeetingPending, userMeetingError } = useGetUserMeeting();
  const { userInfo, isUserInfoPending, userInfoError } = useGetUserInfo();

  if (isUserInfoPending || isUserMeetingPending || isUserScrapPending) {
    return <LoadingSvg />;
  }

  if (userInfoError || userMeetingError || userScrapError) {
    navigate('/not-found');
    return null;
  }
  // TODO: 실제 API에서 사용자의 gathering 수를 가져와야 함
  //const userGatheringCount: number = 3; // 임시로 3개로 설정

  const handleMenuClick = (menu: 'post' | 'gathering') => {
    setMenu(menu);
  };

  // userMeeting.content의 길이에 따라 현재 스탬프 결정
  const meetingCount = userMeeting?.content?.length || 0;
  const maxStamps = 5;
  const currentStampIndex = Math.min(meetingCount, maxStamps);
  const currentStamp = STAMP[currentStampIndex as keyof typeof STAMP] || STAMP[0];

  const renderStampCircles = () => {
    // userMeeting.content의 길이에 따라 스탬프 개수 결정
    const meetingCount = userMeeting?.content?.length || 0;
    const maxStamps = 5; // 최대 스탬프 개수
    const filledStamps = Math.min(meetingCount, maxStamps); // 최대 5개까지만

    const stamps = Array.from({ length: maxStamps }, (_, index) => {
      const isFilled = index < filledStamps;
      const stampKey = (index + 1) as keyof typeof STAMP;
      const stampData = STAMP[stampKey];

      return (
        <div
          key={index}
          className={`${styles.userStampCircle({
            color: 'color' in stampData ? (stampData.color as any) : undefined,
          })} ${isFilled && styles.userStampCircleFilled({ color: 'color' in stampData ? (stampData.color as any) : undefined })}`}
        >
          {isFilled && 'src' in stampData && stampData.src && (
            <img
              src={stampData.src}
              alt={
                ('alt' in stampData ? stampData.alt : `stamp_${index + 1}`) || `stamp_${index + 1}`
              }
              className={styles.userStampImage}
            />
          )}
        </div>
      );
    });

    return <>{stamps}</>;
  };

  return (
    <div className={styles.userContainer}>
      <div className={styles.userInfoContainer}>
        <div className={styles.userInfoImageContainer}>
          <Ic_user_solid className={styles.userInfoImage} />
        </div>
        <div className={styles.userInfoTextContainer}>
          <p className={styles.userInfoName}>{userInfo?.name}</p>
          <div className={styles.userInfoTextDetailContainer}>
            <div className={styles.userInfoTextDetail}>
              <span className={styles.userInfoTextDetailKey}>PHONE:</span>
              <span>{userInfo?.phone}</span>
            </div>
            <div className={styles.userInfoTextDetail}>
              <span className={styles.userInfoTextDetailKey}>STUDENT NUMBER:</span>
              <span>{userInfo?.studentNumber}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.userStampContainer}>
        <div className={styles.userStampCirclesContainer}>{renderStampCircles()}</div>
        <p className={styles.userStampText}>{currentStamp.text}</p>
      </div>
      <div className={styles.userMenuContainer}>
        <p
          className={styles.userMenu({ isActive: menu === 'post' })}
          onClick={() => handleMenuClick('post')}
        >
          게시물 스크랩
        </p>
        <p
          className={styles.userMenu({ isActive: menu === 'gathering' })}
          onClick={() => handleMenuClick('gathering')}
        >
          내가 만든 모임
        </p>
      </div>
      <div className={styles.userSavedDataContainer}>
        {menu === 'post' ? (
          <div className={styles.userPostContainer}>
            {userScrap?.content && userScrap.content.length > 0 ? (
              userScrap.content.map(item => (
                <PostCard
                  writerId={item.writerId}
                  key={item.postId}
                  postId={item.postId}
                  title={item.title}
                  content={item.content}
                  imageUrl={item.imageUrl}
                  grade={item.grade}
                  affiliation={item.affiliation}
                  part={item.part}
                  topic={item.topic}
                  createdAt={item.createdAt}
                  commentCount={item.commentCount}
                  writerName={item.writerName}
                  onClick={id => navigate(`/posts/detail/${id}`)}
                />
              ))
            ) : (
              <EmptyState 
                type="scrapped-posts"
                message="스크랩한 게시물이 없습니다"
                subMessage="마음에 드는 게시물을 스크랩해보세요"
              />
            )}
          </div>
        ) : (
          <div className={styles.userGatheringContainer}>
            {userMeeting?.content && userMeeting.content.length > 0 ? (
              userMeeting.content.map(item => (
                <GatheringCard
                  key={item.meetingId}
                  meetingId={item.meetingId}
                  hostName={item.hostName}
                  meetingName={item.meetingName}
                  content={item.content || '모임에 대한 설명이 없습니다.'}
                  recruitNumber={item.recruitNumber}
                  currentRecruitCount={item.currentRecruitCount}
                  category={item.category as ClassCategoryKey}
                  status={item.status}
                  imageUrl={item.imageUrl}
                />
              ))
            ) : (
              <EmptyState 
                type="my-gatherings"
                message="생성한 모임이 없습니다"
                subMessage="첫 번째 모임을 만들어보세요"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
