import * as styles from './CreatePostButton.css';
import { IC_pencil_solid_full } from '@svg/index';
import { Link } from 'react-router-dom';

interface CreatePostButtonProps {
  to: string;
  text?: string;
}

const CreatePostButton = ({ to, text = "글쓰기" }: CreatePostButtonProps) => {
  return (
    <Link to={to} className={styles.wrapper}>
      <IC_pencil_solid_full className={styles.icon} />
      {text}
    </Link>
  );
};

export default CreatePostButton;
