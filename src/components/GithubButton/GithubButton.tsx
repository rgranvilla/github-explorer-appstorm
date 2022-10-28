import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { Container } from "./GithubButton.styles";

interface GithubeButtonProps {
  url: string;
  label: string;
}

function GithubButton({ url, label }: GithubeButtonProps) {
  return (
    <a href={url} target="blank">
      <Container>
        <span>{label.toUpperCase()}</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </Container>
    </a>
  );
}

export { GithubButton };
