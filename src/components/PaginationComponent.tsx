import { useTranslation } from 'react-i18next';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination';

interface PaginationComponentProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  isLastPage: boolean;
}

function PaginationComponent({ page, setPage, isLastPage }: PaginationComponentProps) {
  const { t } = useTranslation();

  function nextPage() {
    setPage(prevStat => String(+prevStat + 1));
  }
  function previousPage() {
    if (+page > 1) {
      setPage(prevStat => String(+prevStat - 1));
    }
  }
  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious text={t('Previous')} onClick={previousPage} />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink>{page}</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              text={t('Next')}
              onClick={isLastPage ? undefined : nextPage}
              className={isLastPage ? 'cursor-not-allowed' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default PaginationComponent;
