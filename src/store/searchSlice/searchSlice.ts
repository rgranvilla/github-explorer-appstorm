import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchSearch } from "../../services/lib/search";

import { AppDispatch, RootState } from "../hooks";
import { searchInitialState } from "./searchInitialState";
import {
  SearchType,
  SearchStateTypes,
  SearchItemType,
} from "../../@types/searchTypes";

export const searchSlice = createSlice({
  name: "search",
  initialState: searchInitialState as SearchStateTypes,
  reducers: {
    addSearchTerm: (state, { payload }: PayloadAction<{ term: string }>) => {
      state.entitie.term = payload.term;
      return state;
    },
    updateSearchPage: (
      state,
      { payload }: PayloadAction<{ entitie: SearchType }>
    ) => {
      state.entitie = payload.entitie;
      return state;
    },
    resetSearch: (state) => {
      state = searchInitialState;
      return state;
    },
    searchLoading: (state) => {
      state.status = "loading";
    },
    searchLoaded: (state, { payload }: PayloadAction<SearchType>) => {
      state.entitie = payload;
      state.status = "idle";
    },
  },
});

const { actions, reducer } = searchSlice;

export const {
  addSearchTerm,
  updateSearchPage,
  resetSearch,
  searchLoading,
  searchLoaded,
} = actions;

export default reducer;

//Thunk function
export const handleFetchSearch =
  (user: string) => async (dispatch: AppDispatch) => {
    dispatch(searchLoading());
    const response = await fetchSearch(user);
    dispatch(searchLoaded(response));
    dispatch(addSearchTerm({ term: user }));
  };

const selectSearchEntietie = (state: RootState) => state.search.entitie;

export const selectSearch = createSelector(
  selectSearchEntietie,
  (entitie: SearchType) => entitie
);
