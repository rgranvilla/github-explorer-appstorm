import { ProfileDTO, ProfileType } from "../@types/profilesTypes";

export function normalizeProfile(data: ProfileDTO): ProfileType {
  const {
    id,
    login,
    name,
    avatar_url: avatarUrl,
    html_url: htmlUrl,
    followers,
    following,
    company,
    location,
    hireable,
    bio,
    twitter_username: twitterUsername,
    public_repos: publicRepos,
  } = data;

  const normalizedUser = {
    id,
    login,
    isFavorite: false,
    name,
    avatarUrl,
    htmlUrl,
    followers,
    following,
    company,
    location,
    hireable,
    bio,
    twitterUsername,
    publicRepos,
    repos: [],
  };

  return normalizedUser;
}
