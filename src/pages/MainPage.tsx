import { useEffect, useState } from 'react';

import ListMovies from 'src/components/ListMovies';
import Loader from 'src/components/Loader';
import { useGetAllMovieQuery } from 'src/features/api/movieApi';
import { IDataError } from 'src/types/index';
import { arrYears } from 'src/utils/constants';

function MainPage() {
  const [value, setValue] = useState('abc');
  const [typeValue, setTypeValue] = useState('movie');
  const [yearValue, setYearValue] = useState('');
  const { data, isFetching, error, isError } = useGetAllMovieQuery({ value, typeValue, yearValue });

  useEffect(() => {
    if (!value.length) {
      setValue('abc');
    }
  }, [value]);

  if (isError) {
    const customError = error as IDataError;

    throw new Error(customError.data.Error);
  }

  console.log(isFetching);

  return (
    <section>
      <div>
        <span>choose the category</span>
        <select value={typeValue} onChange={e => setTypeValue(e.target.value)}>
          <option>movie</option>
          <option>series</option>
          <option>episode</option>
        </select>
      </div>
      <div>
        <span>choose year</span>
        <select value={yearValue} onChange={e => setYearValue(e.target.value)}>
          {arrYears.map(item => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <input className="input" onChange={e => setValue(e.target.value)} />
      <ul>
        {isFetching ? <Loader /> : <ListMovies data={data} />}

      </ul>
    </section>
  );
}

export default MainPage;
