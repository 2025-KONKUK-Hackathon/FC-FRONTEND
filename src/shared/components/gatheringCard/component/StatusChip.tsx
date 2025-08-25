import * as styles from '@/shared/components/gatheringCard/component/StatusChip.css';
import { type GatheringStatus,GATHERING_STATUS } from '@shared/constant/status';

export default function StatusChip({ status }: { status: GatheringStatus }) {

  return (
    <div className={styles.container({status})}>{GATHERING_STATUS[status]}</div>
  )
}
