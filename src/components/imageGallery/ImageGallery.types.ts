import { ImageData } from "../../App/App.types";
export interface ImageGalleryProps{
    images: ImageData[];
    onImageClick: (image: ImageData) => void;
  }