import { useAppSelector } from 'src/hooks/reduxHooks';
import InfoAboutSingleMovie from 'src/components/InfoAboutSingleMovie';
import { isPosterExist } from 'src/helpers/isPosterExist';
import PaginationComponent from 'src/components/PaginationComponent';
import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function Favorite() {
  const user = localStorage.getItem('authorized')
  const navigate = useNavigate()
  const movies = useAppSelector(state => state.movies.favoriteMovies);
  const usersMovies = movies.filter(item => item.user === user)

  const [page, setPage] = useState('1');

  const itemsPerPage = 3;
  const startIndex = (+page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageItems = movies.slice(startIndex, endIndex);

  useLayoutEffect(()=> {
    if(!user){

      navigate('register')
    }
  })
    console.log(movies)
  return (
    <section className='flex flex-col'>
      <div className="listGrid mt-4 grid gap-4">
        {usersMovies.length ? (
          usersMovies.map(item => (
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
