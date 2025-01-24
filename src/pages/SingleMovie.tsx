import { useParams } from 'react-router';
import { useGetSingleMovieQuery } from 'src/features/api/movieApi';

function SingleMovie() {
  const { id } = useParams();
  const { data } = useGetSingleMovieQuery(id || '');
  const isPoster = /https/g.test(data?.Poster || '');
  console.log(data);
  return (
    <section>
      <h2>{data?.Actors}</h2>
      {isPoster ? <img src={data?.Poster} alt="" /> : <div>No poster</div>}
    </section>
  );
}

export default SingleMovie;
