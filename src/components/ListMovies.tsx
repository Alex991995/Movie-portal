import { Link } from 'react-router';
import { IDataAllMovies } from 'src/types';

interface ListMoviesProps {
  data: IDataAllMovies | undefined;
}

function ListMovies({ data }: ListMoviesProps) {
  return (
    <>
      {data?.Response === 'False' ? (
        <div>No data</div>
      ) : (
        data?.Search.map(item => (
          <Link key={item.imdbID} to={`movie/${item.imdbID}`}>
            <li key={item.imdbID}>{item.Title}</li>
          </Link>
        ))
      )}
    </>
  );
}

export default ListMovies;
