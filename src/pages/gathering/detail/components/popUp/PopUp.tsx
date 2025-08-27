import * as styles from "@/pages/gathering/detail/components/popUp/PopUp.css";
import { Ic_x } from "@svg/index";
import type { GatheringMemberResponse } from "../../types/Gathering";

interface PopUpProps {
  recruitNumber: number;
  currentRecruitCount: number;
  isHost: boolean;
  handlePopUpClose: () => void;
  memberList?: GatheringMemberResponse[];
}

export default function PopUp({
  recruitNumber,
  currentRecruitCount,
  isHost,
  handlePopUpClose,
  memberList = [],
}: PopUpProps) {
  const sortedData = memberList.sort((a, b) => {
    return new Date(b.registerAt).getTime() - new Date(a.registerAt).getTime();
  });
  console.log(sortedData, isHost);
  return (
    <div className={styles.overlay}>
      <div className={styles.popUpWrapper}>
        <div className={styles.popUpHeaderTitle}>
          <p>
            모집 현황 ({currentRecruitCount}/{recruitNumber}명)
          </p>
          <Ic_x
            className={styles.popUpHeaderClose}
            onClick={handlePopUpClose}
          />
        </div>

        <div className={styles.popUpContent}>
          {sortedData.map((member: GatheringMemberResponse, index: number) => (
            <div
              key={member.meetingMemberId}
              className={styles.popUpContentItem}
            >
              <span className={styles.popUpContentItemRanking}>
                {index + 1}
              </span>
              <div className={styles.popUpContentItemInfo}>
                <div className={styles.popUpContentItemTopInfo}>
                  <p>{member.name}</p>
                  <p>
                    {new Date(member.registerAt).toLocaleString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: false,
                    })}
                  </p>
                </div>

                {isHost && (
                  <div className={styles.popUpContentItemToHost}>
                    <p>학번: {member.studentNumber}</p>
                    <p>연락처: {member.phone}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
