import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// return an object is to minimize the impact of changes on the consumer(the GenreList component) of the useGenres hook 
const useGenres = () => ({data: genres, isLoading: false, error: null});

export default useGenres;