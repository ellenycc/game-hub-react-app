import useGenres from "../hooks/useGenres";

const GenreList = () => {
  // first export interface Genre from useGenres
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
