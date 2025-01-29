import { Link, useNavigate, useParams } from 'react-router';
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
  const { data, isFetching, isError, error, isLoading, isSuccess, isUninitialized } =
    useGetSingleMovieQuery(id || '');
  const navigate = useNavigate();
  const { addToFavorites, deleteFromFavorites } = useActions();

  const user = localStorage.getItem('authorized');
  const favoriteMovies = useAppSelector(state => state.movies.favoriteMovies);
  const isExistMovieInStorage = favoriteMovies.find(item => item.imdbID === data?.imdbID);

  if (!data) {
    return null;
  }
  const resultIfPosterOrNot = isPosterExist(data, 'auto');

  console.log(isFetching);
  console.log(isLoading);
  console.log(isSuccess)
  console.log(isUninitialized)

  console.log(data)
  // console.log(user);

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    const customError = error as IDataError;
    throw new Error(customError.data.Error);
  }

  let ifUserExistShowLikeOrRedirectToLogin;

  if (user) {
    console.log(user);
    ifUserExistShowLikeOrRedirectToLogin = isExistMovieInStorage ? (
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
        onClick={() => addToFavorites({ ...data, user })}
      >
        Like
      </Button>
    );
  } else {
    ifUserExistShowLikeOrRedirectToLogin = (
      <Button
        variant="secondary"
        className="self-end justify-self-start"
        onClick={() => navigate('/login')}
      >
        Войти
      </Button>
    );
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
        {ifUserExistShowLikeOrRedirectToLogin}
      </div>
    </section>
  );
}

export default SingleMovie;
