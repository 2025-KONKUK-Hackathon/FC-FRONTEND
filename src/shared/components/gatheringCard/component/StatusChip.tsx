import * as styles from '@/shared/components/gatheringCard/component/StatusChip.css';

interface StatusChipProps {
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'FINISHED';
}

export default function StatusChip({ status }: StatusChipProps) {
    const statusText = {
        NOT_STARTED: '모집전',
        IN_PROGRESS: '모집중',
        FINISHED: '모집완료',
    }
  return (
    <div className={styles.container({status})}>{statusText[status]}</div>
  )
}
