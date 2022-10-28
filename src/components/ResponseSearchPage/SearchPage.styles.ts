import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Title = styled("span", {
  marginTop: "2rem",
  fontSize: "2rem",
  color: "$span",
});

export const Description = styled("span", {
  margin: "4rem 0",
  fontSize: "1.25rem",
  color: "$span",
});
