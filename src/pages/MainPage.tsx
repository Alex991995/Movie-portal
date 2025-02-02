import { useEffect, useRef, useState } from 'react';

import ListMovies from 'src/components/ListMovies';
import Loader from 'src/components/Loader';
import { useGetAllMovieQuery } from 'src/features/api/movieApi';
import { IDataError } from 'src/types/index';
import { arrayGenres, arrYears } from 'src/utils/constants';
import { Input } from '../components/ui/input';
import PaginationComponent from 'src/components/PaginationComponent';
import SelectComponent from 'src/components/SelectComponent';
import { useDebounce } from 'src/hooks/useDebounce';
import { Button } from 'src/components/ui/button';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const [value, setValue] = useState('abc');
  const debouncedValue = useDebounce(value);
  const [typeValue, setTypeValue] = useState('');
  const [page, setPage] = useState('1');
  const [yearValue, setYearValue] = useState('');
  const [isLastPage, setIsLastPage] = useState(false);
  const { t } = useTranslation();
  const { data, isFetching, error, isError } = useGetAllMovieQuery({
    debouncedValue,
    typeValue,
    yearValue,
    page,
  });

  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (data?.Search && data.Search.length === 0) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
  }, [data?.Search]);

  useEffect(() => {
    if (!debouncedValue.length) {
      setValue('abc');
    }
  }, [debouncedValue]);

  if (isError) {
    const customError = error as IDataError;

    throw new Error(customError.data.Error);
  }

  function reset() {
    setYearValue('');
    setTypeValue('');
    setValue('');
    setPage('1');
    if (refInput.current) {
      refInput.current.value = '';
    }
  }

  return (
    <section className="grid h-[85%] grid-rows-[1fr_100px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex gap-4 md:flex-row flex-col">
          <SelectComponent
           value={typeValue}
            array={arrayGenres}
            onChangeFn={setTypeValue}
            placeholder={t("Choose genre")} 
          />

          <SelectComponent
            value={yearValue}
            array={arrYears}
            onChangeFn={setYearValue}
            placeholder={t("Choose year")}
          />
          <Button onClick={reset}>{t("Reset")}</Button>
        </div>

        <Input
          className="max-w-80 bg-input"
          placeholder={t('Type')}
          onChange={e => setValue(e.target.value)}
          ref={refInput}
        />

        <ul className="min-h-64">
          {isFetching ? <Loader /> : <ListMovies data={data} />}
        </ul>
      </div>
      <PaginationComponent
        page={page}
        setPage={setPage}
        isLastPage={isLastPage}
      />
    </section>
  );
}

export default MainPage;
