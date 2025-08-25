import * as styles from '@/pages/gathering/detail/components/popUp/PopUp.css';
import { mockUp } from './mockUp';
import { Ic_x } from '@svg/index';

interface PopUpProps {
  maxPeople: number;
  currentPeople: number;
  isHost: boolean;
  handlePopUpClose: () => void;
}

export default function PopUp({ maxPeople, currentPeople, isHost, handlePopUpClose }: PopUpProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.popUpWrapper}>
        <div className={styles.popUpHeaderTitle}>
            <p>모집 현황 ({currentPeople}/{maxPeople}명)</p>
            <Ic_x className={styles.popUpHeaderClose} onClick={handlePopUpClose}/>
        </div>
     
        <div className={styles.popUpContent}>
            {
                mockUp.map((item) => (
                    <div className={styles.popUpContentItem}>
                        <div className={styles.popUpContentItemRanking}>{item.ranking}</div>
                        <div className={styles.popUpContentItemInfo}>
                        <div className={styles.popUpContentItemName}>{item.name}</div>
                        {
                            isHost && (
                                <div className={styles.popUpContentItemPhoneNumber}>{item.phoneNumber}</div>
                            )
                        }
                        
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}
