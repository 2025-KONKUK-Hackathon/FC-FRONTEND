import { Ic_user_solid } from '@svg/index';
import { userProfileMockup } from './mockup';
import { useState } from 'react';
import * as styles from './User.css';
import { STAMP } from './constant/stamp';

export default function User() {
  //게시물 스크랩, 내가 만든 모임
  const [menu, setMenu] = useState<'post' | 'gathering'>('post');

  // TODO: 실제 API에서 사용자의 gathering 수를 가져와야 함
  const userGatheringCount: number = 3; // 임시로 3개로 설정

  const handleMenuClick = (menu: 'post' | 'gathering') => {
    setMenu(menu);
  };

  // gathering 수에 따른 스탬프 결정
  const getCurrentStamp = () => {
    if (userGatheringCount === 0) return STAMP[0];
    if (userGatheringCount >= 5) return STAMP[5];
    return STAMP[userGatheringCount as keyof typeof STAMP];
  };

  const currentStamp = STAMP[0];

  const renderStampCircles = () => {
    const stamps = Array.from({ length: 5 }, (_, index) => {
      const isFilled = index < 0;
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
          <p className={styles.userInfoName}>{userProfileMockup.name}</p>
          <p>{userProfileMockup.phoneNumber}</p>
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
      <div>
        {
          //todo: 게시물 스크랩 목록 or 내가 만든 모임 목록 출력
        }
      </div>
    </div>
  );
}
