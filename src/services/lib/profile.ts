import { ProfileType } from "../../@types/profilesTypes";
import { normalizeProfile } from "../../utils/normalizeProfile";
import { axiosClient } from "../apiClient";
import { fetchRepos } from "./repos";

async function fetchProfile(user: string, page?: number): Promise<ProfileType> {
  const res = await axiosClient.get(`/users/${user}`);
  const currentUser = normalizeProfile(res.data);
  const repos = await fetchRepos({
    user,
    page,
    totalCount: currentUser.publicRepos,
  });

  const newProfile = { ...currentUser, repos, isFavorite: false };

  return newProfile;
}

export { fetchProfile };
