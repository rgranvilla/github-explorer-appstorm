import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  handleFetchSearch,
  resetSearch,
} from "../../store/searchSlice/searchSlice";

import {
  ClearButton,
  Container,
  ErrorWrapper,
  SearchInput,
} from "./SearchBar.styles";
import { useAppDispatch } from "../../store/hooks";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

const searchFormSchema = z.object({
  searchName: z.string().min(1, { message: "Deve ter no mínimo um caracter" }),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

function SearchBar() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleSearchUser: SubmitHandler<SearchFormInputs> = (values) => {
    const { searchName } = values;

    dispatch(handleFetchSearch(searchName));
  };

  function handleClearSearch() {
    resetField("searchName");
    dispatch(resetSearch());
  }

  return (
    <Container>
      <form action="" onSubmit={handleSubmit(handleSearchUser)}>
        <div className="search-wrapper">
          <SearchInput
            type="text"
            placeholder="Buscar por usuário"
            {...register("searchName")}
          />
          <ClearButton type="reset" onClick={() => handleClearSearch()}>
            <FontAwesomeIcon icon={faXmark} />
          </ClearButton>
        </div>
        <ErrorWrapper>
          {errors?.searchName && <span>{errors.searchName.message}</span>}
        </ErrorWrapper>
      </form>
    </Container>
  );
}

export { SearchBar };
