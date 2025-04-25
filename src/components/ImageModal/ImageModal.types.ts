import { ImageDataUnspl } from "../../App/App.types";

  
  export interface ImageProps{
    image: ImageDataUnspl | null;
    onClose: () => void;
  }