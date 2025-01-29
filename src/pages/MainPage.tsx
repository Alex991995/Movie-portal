import { useEffect, useState } from 'react';

import ListMovies from 'src/components/ListMovies';
import Loader from 'src/components/Loader';
import { useGetAllMovieQuery } from 'src/features/api/movieApi';
import { IDataError } from 'src/types/index';
import { arrayGenres, arrYears } from 'src/utils/constants';
import { Input } from '../components/ui/input';
import PaginationComponent from 'src/components/PaginationComponent';
import SelectComponent from 'src/components/SelectComponent';
import { Button } from 'src/components/ui/button';


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

  // function resetFn() {
  //   setTypeValue('22')
  //   setYearValue('')
  // }

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
    <section className="grid h-[70%] grid-rows-[1fr_100px]">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex gap-4">
          <SelectComponent
            array={arrayGenres}
            onChangeFn={setTypeValue}
            placeholder="Choose genre"
          />

          <SelectComponent
            array={arrYears}
            onChangeFn={setYearValue}
            placeholder="Choose year"
          />
          {/* <Button
            variant="ghost"
            className="rounded-md border border-stone-800"
            onClick={resetFn}
          >
            Reset
          </Button> */}
        </div>

        <Input className="bg-input max-w-80" placeholder="Type..." onChange={e => setValue(e.target.value)} />
        <ul>{isFetching ? <Loader /> : <ListMovies data={data} />}</ul>
      </div>
      <PaginationComponent page={page} setPage={setPage} />
    </section>
  );
}

export default MainPage;
