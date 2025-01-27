import { useEffect, useState } from 'react';

import ListMovies from 'src/components/ListMovies';
import Loader from 'src/components/Loader';
import { useGetAllMovieQuery } from 'src/features/api/movieApi';
import { IDataError } from 'src/types/index';
import { arrYears } from 'src/utils/constants';
import { Input } from '../components/ui/input';
import PaginationComponent from 'src/components/PaginationComponent';

function MainPage() {
  const [value, setValue] = useState('abc');
  const [typeValue, setTypeValue] = useState('movie');
  const [page, setPage] = useState('1');
  const [yearValue, setYearValue] = useState('');
  const { data, isFetching, error, isError } = useGetAllMovieQuery({
    value,
    typeValue,
    yearValue,
    page,
  });

  useEffect(() => {
    if (!value.length) {
      setValue('abc');
    }
  }, [value]);

  if (isError) {
    const customError = error as IDataError;

    throw new Error(customError.data.Error);
  }
  
  return (
    <section>
      <div>
        <span>choose the category</span>
        <select
          value={typeValue}
          onChange={e => setTypeValue(e.target.value)}
          className="bg-accent text-accent-foreground"
        >
          <option>movie</option>
          <option>series</option>
          <option>episode</option>
        </select>
      </div>
      <div>
        <span>choose year</span>
        <select
          value={yearValue}
          onChange={e => setYearValue(e.target.value)}
          className="bg-accent text-accent-foreground"
        >
          {arrYears.map(item => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <Input className="bg-input" onChange={e => setValue(e.target.value)} />
      <ul>{isFetching ? <Loader /> : <ListMovies data={data} />}</ul>
      <PaginationComponent page={page} setPage={setPage} />
    </section>
  );
}

export default MainPage;
