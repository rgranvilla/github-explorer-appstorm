import { RepoItem } from "./components";

import { RepoType } from "../../@types/reposTypes";

import { Container } from "./RepoList.styles";

interface RepoListProps {
  repos: RepoType[];
}

function RepoList({ repos }: RepoListProps) {
  return (
    <Container>
      {repos?.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </Container>
  );
}

export { RepoList };
