import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";




const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <ul className={style.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onImageClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

