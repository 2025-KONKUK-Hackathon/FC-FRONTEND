import STUDY from '@/assets/img/STUDY.png';
import PROJECT from '@/assets/img/PROJECT.png';
import EVENT from '@/assets/img/EVENT.png';
import FRIENDSHIP from '@/assets/img/FRIENDSHIP.png';
import ETC from '@/assets/img/ETC.png';

interface GetDefaultInfoProps {
  imageUrl: string;
  type: 'STUDY' | 'PROJECT' | 'EVENT' | 'FRIENDSHIP' | 'ETC';
}

export default function GetDefaultInfo({ imageUrl, type }: GetDefaultInfoProps) {
  const defaultImages = {
    STUDY,
    PROJECT,
    EVENT,
    FRIENDSHIP,
    ETC,
  };
  const categoryColor = {
    STUDY: 'Ocean',
    PROJECT: 'Yellow',
    EVENT: 'Mint',
    FRIENDSHIP: 'Lime',
    ETC: 'Coral',
  } as const;

  if (imageUrl === '')
    return {
      src: defaultImages[type],
      color: categoryColor[type],
    };
  return { src: imageUrl };
}
