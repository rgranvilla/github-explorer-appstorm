export type SearchItemDTO = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  url: string;
  repos_url: string;
  type: string;
};

export type SearchDTO = {
  total_count: number;
  items: SearchItemDTO[];
};

export type SearchItemType = {
  login: string;
  id: number;
  avatarUrl: string;
  apiUrl: string;
  htmlUrl: string;
  reposUrl: string;
  type: string;
};

export type SearchType = {
  term: string;
  page: number;
  pageCount: number;
  totalCount: number;
  items: SearchItemType[];
};

export type SearchStateTypes = {
  status: "idle" | "pending" | "succeeded" | "failed" | "loading";
  entitie: SearchType;
};
