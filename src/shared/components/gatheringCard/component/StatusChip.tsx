import * as styles from '@/shared/components/gatheringCard/component/StatusChip.css';
import { type StatusType, STATUS } from '@shared/constant/status';

export default function StatusChip({ status }: { status: StatusType }) {
  return <div className={styles.container({ status })}>{STATUS[status]}</div>;
}
