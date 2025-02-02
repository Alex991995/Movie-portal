import { useAppSelector } from 'src/hooks/reduxHooks';
import InfoAboutSingleMovie from 'src/components/InfoAboutSingleMovie';
import { isPosterExist } from 'src/helpers/isPosterExist';
import PaginationComponent from 'src/components/PaginationComponent';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from 'src/hoc/AuthProvider';

function Favorite() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const movies = useAppSelector(state => state.movies.favoriteMovies);
  const usersMovies = movies.filter(item => item.user === user);

  const [page, setPage] = useState('1');

  const itemsPerPage = 3;
  const startIndex = (+page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageItems = usersMovies.slice(startIndex, endIndex);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    if (pageItems.length === 0) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
  }, [pageItems.length]);

  useLayoutEffect(() => {
    if (!user) {
      navigate('/register');
    }
  }, [user]);

  return (
    <section className="grid h-full grid-rows-[1fr_200px] items-center">
      <ul className="listGrid mt-4 grid justify-center gap-4 justify-items-center">
        {pageItems.length ? (
          pageItems.map(item => (
            <li className="flex max-h-[400px] flex-col gap-4 rounded-md" key={item.imdbID}>
              {isPosterExist(item)}
              <InfoAboutSingleMovie data={item} />
            </li>
          ))
        ) : (
          <div>No chosen movies</div>
        )}
      </ul>
      <PaginationComponent page={page} setPage={setPage} isLastPage={isLastPage} />
    </section>
  );
}

export default Favorite;
