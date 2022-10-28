import { SearchStateTypes } from "../../@types/searchTypes";

export const searchInitialState = {
  status: "idle",
  entitie: {
    page: 1,
    pageCount: 1,
    totalCount: 0,
    items: [],
    term: "",
  },
} as SearchStateTypes;
