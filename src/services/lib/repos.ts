import { RepoDTO, ReposStateType, RepoType } from "../../@types/reposTypes";
import { normalizeRepoData } from "../../utils/normalizeRepoData";
import { axiosClient } from "../apiClient";

type FetchReposType = {
  user: string;
  page?: number;
  totalCount?: number;
};

async function fetchRepos({ user, page = 1, totalCount = 0 }: FetchReposType) {
  const res = await axiosClient.get(`/users/${user}/repos`, {
    params: {
      per_page: 12,
      page: page,
    },
  });

  const repos: RepoType[] = res.data.map((repo: RepoDTO) => {
    const normalizedRepo = normalizeRepoData(repo);

    return normalizedRepo;
  });

  const pageCount = Math.floor(totalCount / 12);

  const normalizedReposState = {
    page: page,
    pageCount,
    totalCount: totalCount,
    items: repos,
  };

  return normalizedReposState;
}

export { fetchRepos };
