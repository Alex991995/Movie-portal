import { useAppSelector } from 'src/hooks/reduxHooks';
import InfoAboutSingleMovie from 'src/components/InfoAboutSingleMovie';
import { isPosterExist } from 'src/helpers/isPosterExist';
import PaginationComponent from 'src/components/PaginationComponent';
import { useState } from 'react';

function Favorite() {
  const movies = useAppSelector(state => state.movies.favoriteMovies);
  const [page, setPage] = useState('1');

  const itemsPerPage = 3;
  const startIndex = (+page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageItems = movies.slice(startIndex, endIndex);

  return (
    <section className='flex flex-col'>
      <div className="listGrid mt-4 grid gap-4">
        {pageItems.length ? (
          pageItems.map(item => (
            <div className="flex max-w-48 flex-col gap-4 rounded-md bg-border" key={item.imdbID}>
              {isPosterExist(item, '112px')}
              <InfoAboutSingleMovie data={item} />
            </div>
          ))
        ) : (
          <div>No chosen movies</div>
        )}
      </div>
      <PaginationComponent page={page} setPage={setPage} />
    </section>
  );
}

export default Favorite;
