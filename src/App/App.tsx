import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import SearchBar from "../components/SearchBar/SearchBar";
import "./App.css";
import { getPhotos } from "../apiService";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import ImageGallery from "../components/imageGallery/ImageGallery";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../components/ImageModal/ImageModal";
import { GetPhotosResponse, ImageDataUnspl } from "./App.types";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<ImageDataUnspl[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageDataUnspl | null>(null); // Стан для модального вікна

  useEffect(() => {
    if (!query) return;

    const fetchPhotos = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { photos, per_page, total_results }: GetPhotosResponse = await getPhotos(query, page);

        if (!photos || photos.length === 0) {
          setIsEmpty(true);
          return;
        }

        setImages((prev) => [...prev, ...photos]);
        setIsVisible(page < Math.ceil(total_results / per_page));
      } catch (error:any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, [page, query]);

  // Функція для обробки пошуку
  const getQuery = (inputValue: string) => {
    setQuery(inputValue);
    setImages([]);
    setPage(1);
    setIsEmpty(false);
  };

  // Функція для завантаження додаткових зображень
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Функції для відкриття/закриття модального вікна
  const openModal = (image:ImageData) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={getQuery} />
      {isEmpty && <p>No images found. Try another search!</p>}
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {isVisible && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </>
  );
};

export default App;
