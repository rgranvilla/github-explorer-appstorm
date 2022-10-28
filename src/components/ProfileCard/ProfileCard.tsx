import Link from "next/link";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ProfileType } from "../../@types/profilesTypes";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateIsFavoriteStatus } from "../../store/profileSlice/profileSlice";
import {
  addProfileToFavorites,
  removeProfileFromFavorites,
  selectProfiles,
} from "../../store/favoritesSlice/favoritesSlice";

import { GithubButton } from "../GithubButton";
import { IconTag } from "../IconTag";

import GenericAvatarImage from "../../assets/generic-avatar.svg";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHeart as faHeartOutlined } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart,
  faCity,
  faBookBookmark,
  faMagnifyingGlassDollar,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import {
  Avatar,
  Container,
  ContentWrapper,
  ProfileAccessButton,
} from "./Profile.styles";

interface ProfileProps {
  profile: ProfileType;
}

function ProfileCard({ profile }: ProfileProps) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectProfiles);

  const { pathname } = useRouter();
  const showButton = pathname === "/favorites";

  function handleSwitch() {
    const existInFavorite = favorites.find(
      (entitie) => entitie.id === profile.id
    );

    if (existInFavorite) {
      dispatch(updateIsFavoriteStatus({ isFavorite: false }));
      dispatch(removeProfileFromFavorites({ id: profile.id }));
    }

    if (!existInFavorite) {
      dispatch(updateIsFavoriteStatus({ isFavorite: true }));
      dispatch(addProfileToFavorites(profile));
    }
  }

  return (
    <Container>
      <Avatar>
        <Image
          src={profile.avatarUrl || GenericAvatarImage}
          alt=""
          width={120}
          height={120}
        />
      </Avatar>
      <ContentWrapper>
        <header>
          <span>{profile.name || "Nenhum usuário selecionado"}</span>
          {profile.name && (
            <div className="actionsButton">
              <GithubButton url={profile.htmlUrl} label="Github" />
              <button type="button" onClick={handleSwitch} title="Favoritar">
                <FontAwesomeIcon
                  icon={profile.isFavorite ? faHeart : faHeartOutlined}
                />
              </button>
            </div>
          )}
        </header>
        {profile && (
          <>
            <div className="content">
              <span>{profile.bio}</span>
            </div>
            <div className="footer">
              <IconTag icon={faGithub} label={profile.login} />

              {profile.hireable && (
                <IconTag icon={faMagnifyingGlassDollar} label="Open to Work" />
              )}

              {profile.location && (
                <IconTag icon={faCity} label={profile.location} />
              )}

              {profile.followers && (
                <IconTag
                  icon={faUserGroup}
                  label={`${profile.followers} seguidores`}
                />
              )}

              {profile.publicRepos && (
                <IconTag
                  icon={faBookBookmark}
                  label={`${profile.publicRepos} repositórios`}
                />
              )}

              {profile.twitterUsername && (
                <IconTag icon={faTwitter} label={profile.twitterUsername} />
              )}
            </div>
          </>
        )}
      </ContentWrapper>
      {showButton && (
        <Link href={`/profile/${profile.login}`}>
          <ProfileAccessButton>Acessar Perfíl</ProfileAccessButton>
        </Link>
      )}
    </Container>
  );
}

export { ProfileCard };
