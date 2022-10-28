import { ReposStateType } from "./reposTypes";

export type ProfileType = {
  id: number;
  isFavorite: boolean;
  login: string;
  name: string;
  avatarUrl: string;
  htmlUrl: string;
  followers: number;
  following: number;
  company: string | null;
  location: string;
  hireable: boolean;
  bio: string;
  twitterUsername: string;
  publicRepos: number;
  repos: ReposStateType;
};

export type ProfileDTO = {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  company: string;
  location: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
};

export type ProfileStateType = {
  status: "idle" | "pending" | "succeeded" | "failed" | "loading";
  entitie: {
    id: number;
    isFavorite: boolean;
    login: string;
    name: string;
    avatarUrl: string;
    htmlUrl: string;
    followers: number;
    following: number;
    company: string | null;
    location: string;
    hireable: boolean;
    bio: string;
    twitterUsername: string;
    publicRepos: number;
    repos: ReposStateType;
  };
};
