import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minHeight: "100vh",
  padding: "0 2rem",
});

export const Main = styled("section", {
  padding: "0.5rem 0",
  width: "100%",
  maxWidth: "1180px",
  margin: "0 auto",
});

export const Header = styled("header", {
  padding: "0.5rem 0",
  width: "100%",
  maxWidth: "1180px",
  margin: "0 auto",

  display: "flex",
  justifyContent: "space-between",

  nav: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",

    a: { color: "$blue300" },

    "& a:hover": {
      transition: "0.2s",
      color: "$blue500",
    },
  },
});
