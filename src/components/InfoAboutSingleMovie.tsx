import { ISingleMovie } from 'src/types';

interface InfoAboutSingleMovieProps {
  data: ISingleMovie | undefined;
}

function InfoAboutSingleMovie({ data }: InfoAboutSingleMovieProps) {
  if (!data) {
    return null;
  }
  return (
    <>
      <p className="font-bold">
        <span className="italic">Name:</span> {data.Title}
      </p>
      <p className="font-bold">
        <span className="italic">Country: {data?.Country}</span>
      </p>
      <p className="font-bold">
        <span className="italic">Genre: {data?.Genre}</span>
      </p>
    </>
  );
}

export default InfoAboutSingleMovie;
