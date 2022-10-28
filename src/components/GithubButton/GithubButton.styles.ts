import { styled } from "../../styles";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.75rem",

  color: "$blue300",

  "&:hover": {
    transition: "0.2s",
    color: "$blue500",
  },
});
