import { ProfileStateType } from "../../@types/profilesTypes";

export const profileInitialState = {
  status: "idle",
  entitie: {
    id: 0,
    isFavorite: false,
    login: "",
    name: "",
    avatarUrl: "",
    htmlUrl: "",
    followers: 0,
    following: 0,
    company: "",
    location: "",
    hireable: false,
    bio: "",
    twitterUsername: "",
    publicRepos: 0,
    repos: {
      page: 1,
      pageCount: 1,
      totalCount: 0,
      items: [],
    },
  },
} as ProfileStateType;
