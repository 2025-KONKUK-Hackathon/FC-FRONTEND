import * as styles from '@shared/components/imageBtn/ImageBtn.css';
import { Ic_camera } from '@svg/index';
import { useRef } from 'react';

interface ImageBtnProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    images?: string[];
};

export default function ImageBtn({ onChange, images }: ImageBtnProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    
  const openPicker = () => {
    inputRef.current?.click();
  };

  return (
   <div className={styles.container}>
    <input type="file" accept="image/*" multiple ref={inputRef} style={{ display: 'none' }} onChange={onChange} />

    <button className={styles.imageBtn} onClick={openPicker}>
        <Ic_camera className={styles.image} />
    </button>
    {images && images.length > 0 && (
        images.map((image) => (
            <img key={image} src={image} alt={`Uploaded`} className={styles.imagePreview} />
        ))
    )}
   </div>
  )
}
