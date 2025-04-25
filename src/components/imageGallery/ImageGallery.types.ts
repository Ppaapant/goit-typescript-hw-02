import { ImageDataUnspl} from "../../App/App.types";
export interface ImageGalleryProps{
    images: ImageDataUnspl[];
    onImageClick: (image: ImageDataUnspl) => void;
  }