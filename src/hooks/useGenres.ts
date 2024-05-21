import useData from './useData';

export interface Genre {
  id: number;
  name: string;
}

// we don't need the FetchGenreResponse anymore, hiding the details behind useGenres hook
const useGenres = () => useData<Genre>('/genres');

export default useGenres;