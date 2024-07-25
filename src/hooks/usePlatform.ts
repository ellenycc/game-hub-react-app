import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  // parameter id is optional
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === id);
};
export default usePlatform;
