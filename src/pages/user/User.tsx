import { Ic_user_solid } from "@svg/index";
import { userProfileMockup } from "./mockup";
import { useState } from "react";
import * as styles from "./User.css";

export default function User() {
  //게시물 스크랩, 내가 만든 모임
  const [menu, setMenu] = useState<"post" | "gathering">("post");
  const handleMenuClick = (menu: "post" | "gathering") => {
    setMenu(menu);
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
      <div className={styles.userMenuContainer}>
        <p
          className={styles.userMenu({ isActive: menu === "post" })}
          onClick={() => handleMenuClick("post")}
        >
          게시물 스크랩
        </p>
        <p
          className={styles.userMenu({ isActive: menu === "gathering" })}
          onClick={() => handleMenuClick("gathering")}
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
