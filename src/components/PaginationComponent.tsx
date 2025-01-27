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
}

function PaginationComponent({ page, setPage }: PaginationComponentProps) {
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
            <PaginationPrevious onClick={previousPage} />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink>{page}</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext onClick={nextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default PaginationComponent;
