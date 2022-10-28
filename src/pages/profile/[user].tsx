import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetServerSideProps, GetStaticPropsContext } from "next";

import { ProfileCard } from "../../components/ProfileCard";
import { RepoList } from "../../components/RepoList";
import { Paginator } from "../../components/Paginator";

import { ProfileType } from "../../@types/profilesTypes";
import { useAppSelector } from "../../store/hooks";
import {
  addProfile,
  updateReposList,
  selectProfile,
  updateIsFavoriteStatus,
} from "../../store/profileSlice/profileSlice";
import { fetchRepos } from "../../services/lib/repos";
import { fetchProfile } from "../../services/lib/profile";
import { selectProfiles } from "../../store/favoritesSlice/favoritesSlice";

interface ProfileProps {
  data: ProfileType;
}

function Profile({ data }: ProfileProps) {
  const dispatch = useDispatch();
  const profile = useAppSelector(selectProfile);
  const favorites = useAppSelector(selectProfiles);

  useEffect(() => {
    if (favorites.find((entitie) => entitie.id === profile.id)) {
      dispatch(updateIsFavoriteStatus({ isFavorite: true }));
    }
  }, [dispatch, favorites, profile.id]);

  useEffect(() => {
    if (profile.id !== data.id) {
      dispatch(addProfile(data));
    }
  }, [data, dispatch, profile.id]);

  async function handleChangePage(page: number) {
    const res = await fetchRepos({
      user: profile.login,
      page,
      totalCount: profile.publicRepos,
    });
    dispatch(updateReposList(res));
  }

  return (
    <div>
      <ProfileCard profile={profile} />
      {profile.repos.pageCount > 1 && (
        <Paginator
          onChangePage={(page) => handleChangePage(page)}
          currentPage={profile.repos.page}
          pageCount={profile.repos.pageCount}
        />
      )}
      <RepoList repos={profile.repos.items} />
      {profile.repos.pageCount > 1 && (
        <Paginator
          onChangePage={(page) => handleChangePage(page)}
          currentPage={profile.repos.page}
          pageCount={profile.repos.pageCount}
        />
      )}
    </div>
  );
}

export default Profile;

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GetStaticPropsContext) => {
  const user = params?.user;

  const res = await fetchProfile(String(user));

  return {
    props: { data: res },
  };
};
