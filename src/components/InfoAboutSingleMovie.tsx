import { ISingleMovie } from 'src/types';


interface InfoAboutSingleMovieProps {
  data: ISingleMovie;
}

function InfoAboutSingleMovie({ data }: InfoAboutSingleMovieProps) {

  return (
    <>
      <p className="font-bold">
        <span className="italic">Actors:</span> {data?.Actors}
      </p>
      <p className="font-bold">
        <span className="italic">Country: {data?.Country}</span>
      </p>
      <p className="font-bold">
        <span className="italic">Genre: {data?.Genre}</span>
      </p>
      {/* <p className="my-4 font-bold">
        <span className="italic">Plot: {data?.Plot}</span>
      </p> */}
    </>
  );
}

export default InfoAboutSingleMovie;
