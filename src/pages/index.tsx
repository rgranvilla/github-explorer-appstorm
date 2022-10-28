import type { NextPage } from "next";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchSearch } from "../services/lib/search";
import {
  selectSearch,
  updateSearchPage,
} from "../store/searchSlice/searchSlice";

import { SearchBar } from "../components/SearchBar";
import { Paginator } from "../components/Paginator";
import { SearchPage } from "../components/ResponseSearchPage";
import { SearchCardProfile } from "../components/SearchCardProfile";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const profiles = useAppSelector(selectSearch);

  async function handleChangePage(page: number) {
    const res = await fetchSearch(profiles.term, page);
    dispatch(updateSearchPage({ entitie: res }));
  }
  return (
    <div>
      <SearchBar />
      {profiles.term === "" && (
        <SearchPage
          title="Realize uma busca!"
          description="Utilize o campo acima para realizar a sua busca de perfís no github."
        />
      )}
      {profiles.term !== "" && profiles.totalCount === 0 && (
        <SearchPage
          title="Nenhum perfíl localizado"
          description="Sua busca não encontrou nenhum perfíl localizado com o termo digitado, tente outro termo."
        />
      )}
      {profiles.pageCount > 1 && (
        <Paginator
          currentPage={profiles.page}
          pageCount={Math.floor(profiles.totalCount / 12)}
          onChangePage={(page) => handleChangePage(page)}
        />
      )}
      {profiles.items.map((profile) => (
        <SearchCardProfile profile={profile} key={profile.login} />
      ))}
      {profiles.pageCount > 1 && (
        <Paginator
          currentPage={profiles.page}
          pageCount={Math.floor(profiles.totalCount / 12)}
          onChangePage={(page) => handleChangePage(page)}
        />
      )}
    </div>
  );
};

export default Home;
