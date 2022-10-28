export type RepoType = {
  id: number;
  repoName: string;
  fullName: string;
  htmlUrl: string;
  description: string;
  disabled: boolean;
  createdAt: Date;
  updatedAt: Date;
  pushedAt: Date;
  sshUrl: string;
  cloneUrl: string;
  language: string;
  languagesUrl: string;
  allowForking: boolean;
  isTemplate: boolean;
  forks: number;
  openIssues: number;
  watchers: number;
  hasWiki: boolean;
};

export type ReposStateType = {
  page: number;
  pageCount: number;
  totalCount: number;
  items: RepoType[];
};

export type RepoDTO = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  disabled: boolean;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  ssh_url: string;
  clone_url: string;
  language: string;
  languages_url: string;
  allow_forking: boolean;
  is_template: boolean;
  forks: number;
  open_issues: number;
  watchers: number;
  has_wiki: boolean;
};
