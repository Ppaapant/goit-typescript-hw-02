import styles from '../imageGallery/ImageGallery.module.css';
import { ImageCardProps } from './ImageCard.types';

const ImageCard = ({ image, onImageClick }:ImageCardProps) => {
  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onImageClick} 
      />
    </div>
  );
};

export default ImageCard;
