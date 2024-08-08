import useTrailers from "../hooks/useTrailers";

// no need to pass the entire game object
interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  // use the useTrailers hook to fetch the trailers for the game and render them
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
