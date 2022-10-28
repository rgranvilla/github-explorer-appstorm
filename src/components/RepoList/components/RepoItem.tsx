import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { RepoType } from "../../../@types/reposTypes";

import { GithubButton } from "../../GithubButton";
import { IconTag } from "../../IconTag";

import {
  faCalendarPlus,
  faClipboard,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCodeFork,
  faEye,
  faFileCircleQuestion,
  faLanguage,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

import { Button, Container, RepoTitle } from "./RepoItem.styles";

interface RepoItem {
  repo: RepoType;
}

function RepoItem({ repo }: RepoItem) {
  const publishedDateFormatted = format(
    new Date(repo.createdAt),
    "d 'de' LLLL 'de' yyyy",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date(repo.createdAt),
    {
      locale: ptBR,
      addSuffix: true,
    }
  );

  const updatedDateRelativeToNow = formatDistanceToNow(
    new Date(repo.updatedAt),
    {
      locale: ptBR,
      addSuffix: true,
    }
  );

  function copyToClipboard(url: string) {
    navigator.clipboard.writeText(url);

    alert(`Url copiada: ${url}`);
  }

  return (
    <Container>
      <div className="header">
        <RepoTitle>
          {repo.repoName.toLocaleUpperCase()}
          <span className="dateRelative">
            (criado {publishedDateRelativeToNow} )
          </span>
        </RepoTitle>

        <GithubButton url={repo.htmlUrl} label="Repo" />
      </div>

      {repo.description ? (
        <div className="resume">
          <span>Descrição</span>
          <span>{repo.description}</span>
        </div>
      ) : (
        <div className="resume">
          <span>Descrição</span>
          <span>
            Repositório sem descrição, que tal sugerir ao autor para colocar
            uma?
          </span>
        </div>
      )}

      <div className="tags">
        <Button type="button" onClick={() => copyToClipboard(repo.cloneUrl)}>
          <IconTag icon={faClipboard} label="Clonar por URL" />
        </Button>

        <Button type="button" onClick={() => copyToClipboard(repo.sshUrl)}>
          <IconTag icon={faClipboard} label="Clonar por SSH" />
        </Button>

        <IconTag icon={faCodeFork} label={repo.forks} />

        <IconTag
          icon={faCodeFork}
          label={`${repo.allowForking ? "Permite" : "Não Permite"} `}
        />

        <IconTag icon={faEye} label={repo.watchers} />

        <IconTag icon={faFileCircleQuestion} label={repo.openIssues} />

        <IconTag icon={faLanguage} label={repo.language} />

        <IconTag icon={faUpload} label={updatedDateRelativeToNow} />

        <IconTag icon={faCalendarPlus} label={publishedDateFormatted} />
      </div>
    </Container>
  );
}

export { RepoItem };
