
import axios from 'axios';
import { GetPhotosResponse, UnsplashApiResponse } from './App/App.types';

const ACCESS_KEY = 'tU055obFs00XuS1fRfXpAIqNTpBZagV7IguJijYNxMs';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
  client_id: ACCESS_KEY,
};

export const getPhotos = async (query: string, page: number): Promise<GetPhotosResponse> => {
  const { data } : {data: UnsplashApiResponse}= await axios.get(`/search/photos`, { params: { query, page } });
  return {
    photos: data.results || [], 
    per_page: 15,
    total_results: data.total || 0,
  };
};



