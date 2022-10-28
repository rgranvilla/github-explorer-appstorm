import { RepoDTO } from "../@types/reposTypes";

export function normalizeRepoData(repo: RepoDTO) {
  const normalizedRepo = {
    id: repo.id,
    repoName: repo.name,
    fullName: repo.full_name,
    htmlUrl: repo.html_url,
    description: repo.description,
    disabled: repo.disabled,
    createdAt: repo.created_at,
    updatedAt: repo.updated_at,
    pushedAt: repo.pushed_at,
    sshUrl: repo.ssh_url,
    cloneUrl: repo.clone_url,
    language: repo.language,
    languagesUrl: repo.languages_url,
    allowForking: repo.allow_forking,
    isTemplate: repo.is_template,
    forks: repo.forks,
    openIssues: repo.open_issues,
    watchers: repo.watchers,
    hasWiki: repo.has_wiki,
  };

  return normalizedRepo;
}
