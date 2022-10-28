import { styled } from "../../styles";

export const TagContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",

  svg: {
    height: "1rem",
    width: "auto",
    color: "$blue300",
  },

  span: {
    fontSize: "0.875rem",
    color: "$span",
  },
});
