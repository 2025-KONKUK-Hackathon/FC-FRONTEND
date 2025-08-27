import * as styles from './CreatePostButton.css';
import { IC_pencil_solid_full } from '@svg/index';
import { Link } from 'react-router-dom';

interface CreatePostButtonProps {
  to: string;
}

const CreatePostButton = ({ to }: CreatePostButtonProps) => {
  return (
    <Link to={to} className={styles.wrapper}>
      <IC_pencil_solid_full className={styles.icon} />
      글쓰기
    </Link>
  );
};

export default CreatePostButton;
