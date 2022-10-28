import {
  SearchDTO,
  SearchItemDTO,
  SearchItemType,
  SearchType,
} from "../@types/searchTypes";

const normalizeSearchItem = (item: SearchItemDTO): SearchItemType => {
  const normalizedSearchItem = {
    login: item.login,
    id: item.id,
    avatarUrl: item.avatar_url,
    apiUrl: item.url,
    htmlUrl: item.html_url,
    reposUrl: item.repos_url,
    type: item.type,
  };

  return normalizedSearchItem;
};

export function normalizeSearch(
  data: SearchDTO,
  page: number,
  user: string
): SearchType {
  const normalizedItems = data.items.map((item) => normalizeSearchItem(item));

  const normalizedSearch = {
    page,
    pageCount: Math.floor(data.total_count / 12),
    totalCount: data.total_count,
    items: normalizedItems,
    term: user,
  };

  return normalizedSearch;
}
