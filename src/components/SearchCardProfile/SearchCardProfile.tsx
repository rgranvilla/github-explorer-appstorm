import Link from "next/link";
import Image from "next/future/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SearchItemType } from "../../@types/searchTypes";
import {
  ActionButton,
  Avatar,
  Container,
  Content,
} from "./SearchCardProfile.styles";

import GenericAvatarImage from "../../assets/generic-avatar.svg";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface SearchCardProfileProps {
  profile: SearchItemType;
}

function SearchCardProfile({ profile }: SearchCardProfileProps) {
  const { avatarUrl, login, htmlUrl } = profile;
  return (
    <Container>
      <Link href={{ pathname: `/profile/${login}` }} passHref legacyBehavior>
        <Content>
          <Avatar>
            <Image
              src={avatarUrl || GenericAvatarImage}
              alt=""
              width={80}
              height={80}
            />
          </Avatar>
          <header>
            <span>{login}</span>
          </header>
        </Content>
      </Link>
      {login && (
        <ActionButton href={profile.htmlUrl} target="_blank">
          <>
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </>
        </ActionButton>
      )}
    </Container>
  );
}

export { SearchCardProfile };
