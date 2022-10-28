import Image from "next/future/image";

import image from "../../assets/undraw_search_re_x5gq.svg";

import { Container, Description, Title } from "./SearchPage.styles";

interface SearchPageProps {
  title: string;
  description: string;
}

function SearchPage({ title, description }: SearchPageProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Image src={image} alt="" height={320} width={320} />
    </Container>
  );
}

export { SearchPage };
