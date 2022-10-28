import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TagContainer } from "./IconTag.styles";

interface IconTagProps {
  icon: IconProp;
  label: string | number;
}

function IconTag({ icon, label }: IconTagProps) {
  return (
    <TagContainer>
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
    </TagContainer>
  );
}

export { IconTag };
