import { ProfileCard } from "../../components/ProfileCard";

import { selectProfiles } from "../../store/favoritesSlice/favoritesSlice";
import { useAppSelector } from "../../store/hooks";

import image from "../../assets/undraw_happy_announcement_re_tsm0.svg";
import Image from "next/future/image";

import { Container } from "../../styles/pages/favorites";

function Favorites() {
  const favoritesProfiles = useAppSelector(selectProfiles);

  return (
    <>
      {favoritesProfiles.length > 0 ? (
        favoritesProfiles.map((profile) => (
          <ProfileCard profile={profile} key={profile.id} />
        ))
      ) : (
        <Container>
          <Image src={image} alt="" />
        </Container>
      )}
    </>
  );
}

export default Favorites;
