import { useNavigate, useParams } from 'react-router';
import { useGetSingleMovieQuery } from 'src/features/api/movieApi';
import Loader from 'src/components/Loader';
import { IDataError } from 'src/types';
import { Button } from 'src/components/ui/button';
import useActions from 'src/hooks/useAction';
import { useAppSelector } from 'src/hooks/reduxHooks';
import InfoAboutSingleMovie from 'src/components/InfoAboutSingleMovie';
import { isPosterExist } from 'src/helpers/isPosterExist';

function SingleMovie() {
  const { id } = useParams();
  const { data, isFetching, isError, error, isLoading } = useGetSingleMovieQuery(id || '');
  const navigate = useNavigate();
  const { addToFavorites, deleteFromFavorites } = useActions();
  const favoriteMovies = useAppSelector(state => state.movies.favoriteMovies);
  const isExistMovieInStorage = favoriteMovies.find(item => item.imdbID === data?.imdbID);

  if (!data) {
    return null;
  }
  const resultIfPosterOrNot = isPosterExist(data, 'auto')

console.log(isFetching)
console.log(data)
console.log(isLoading)
  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    const customError = error as IDataError;
    throw new Error(customError.data.Error);
  }

  return (
    <section>
      <div className="mt-4 grid grid-cols-[auto_1fr] items-center gap-4">
        {resultIfPosterOrNot}
        <div className="flex max-w-80 flex-col gap-3">
          <InfoAboutSingleMovie data={data} />
        </div>
        <Button
          className="mt-4 self-start justify-self-start"
          variant="outline"
          onClick={() => navigate(-1)}
        >
          Назад
        </Button>
        {isExistMovieInStorage ? (
          <Button
            variant="destructive"
            className="self-end justify-self-start"
            onClick={() => deleteFromFavorites(isExistMovieInStorage.imdbID)}
          >
            delite
          </Button>
        ) : (
          <Button
            variant="secondary"
            className="self-end justify-self-start"
            onClick={() => addToFavorites(data)}
          >
            Like
          </Button>
        )}
      </div>
    </section>
  );
}

export default SingleMovie;
