export interface ImageDataUnspl {
    id: string;
    urls: {
      small: string;
      regular: string;
      full: string;
    };
    alt_description: string;
    user: {
      name: string;
    };
    likes: number;
  }

  export interface GetPhotosResponse {
    photos: ImageDataUnspl[];
    per_page: number;
    total_results: number;
  }

  export interface UnsplashApiResponse {
    total: number;
    total_pages: number;
    results: ImageDataUnspl[];
  }