interface ImageUser {
    name: string;
  }
  
   interface ImageUrls {
    small: string;
    regular: string;
    full: string;
  }
  
  export interface ImageData {
    urls: ImageUrls;
    alt_description: string;
    user: ImageUser;
    likes: number;
    id: string;
  }
  
  export interface ImageProps{
    image: ImageData | null;
    onClose: () => void;
  }