import { Button, Container, Wrapper } from "./Paginator.styles";

interface PaginatorProps {
  currentPage: number;
  pageCount: number;
  onChangePage: (page: number) => void;
}

type CreatePaginatorIndicesType = {
  pageCount: number;
  currentPage: number;
};

function CreatePaginatorIndices({
  currentPage,
  pageCount,
}: CreatePaginatorIndicesType) {
  let arr = [];
  for (let i = 1; i < pageCount + 1; i++) arr.push(i);

  if (currentPage < 4) {
    arr = arr.slice(0, 7);
  }
  if (currentPage > 3 && currentPage < pageCount - 3) {
    arr = arr.slice(currentPage - 4, currentPage + 3);
  }
  if (currentPage >= pageCount - 3) {
    arr = arr.slice(-7);
  }

  return arr;
}

function Paginator({ currentPage, onChangePage, pageCount }: PaginatorProps) {
  const hidden = pageCount === 1;

  const auxArr = CreatePaginatorIndices({ pageCount, currentPage });

  function handleChangePage(page: number) {
    onChangePage(page);
  }
  return (
    <>
      {!hidden && (
        <Container>
          <Wrapper>
            <li>
              <Button
                disabled={currentPage === 1}
                onClick={() => handleChangePage(1)}
              >
                Primeira
              </Button>
            </li>
            {auxArr.map((indice) => (
              <li key={indice}>
                <Button
                  className={`${indice === currentPage ? "selected" : ""}`}
                  onClick={() => handleChangePage(indice)}
                >
                  {indice}
                </Button>
              </li>
            ))}
            <li>
              <Button
                disabled={currentPage === pageCount}
                onClick={() => handleChangePage(pageCount)}
              >
                Última
              </Button>
            </li>
          </Wrapper>
        </Container>
      )}
    </>
  );
}

export { Paginator };
