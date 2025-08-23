import * as styles from '@shared/components/imageBtn/ImageBtn.css';
import { Ic_camera } from '@svg/index';

interface ImageBtnProps {
    onClick?: () => void;
    images?: string[];
};

export default function ImageBtn({ onClick, images }: ImageBtnProps) {
  return (
   <div className={styles.container}>
    <button className={styles.imageBtn} onClick={onClick}>
        <Ic_camera className={styles.image} />
        <div className={styles.text}>사진 업로드</div>
    </button>
    {images && images.length > 0 && (
        images.map((image) => (
            <img key={image} src={image} alt={`Uploaded`} className={styles.imagePreview} />
        ))
    )}
   </div>
  )
}
