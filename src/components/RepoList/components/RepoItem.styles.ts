import { styled } from "../../../styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",

  padding: "1rem",
  backgroundColor: "$input",

  borderRadius: "8px",
  boxShadow: "1px 1px 2px #094077",

  color: "$text",

  ".header": {
    display: "flex",
    justifyContent: "space-between",

    ".dateRelative": {
      color: "$label",
    },
  },

  ".resume": {
    margin: "1rem 0",
    padding: "0 1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.375rem",
    fontSize: "0.875rem",
    textAlign: "justify",

    color: "$span",
  },

  ".tags": {
    display: "flex",
    gap: "1rem",
    padding: "0 1rem",
    span: {
      color: "$span",
    },
  },
});

export const RepoTitle = styled("h2", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "1.125rem",
  fontWeight: "normal",

  span: {
    fontSize: "0.75rem",
    fontWeight: "normal",
  },
});

export const Button = styled("button", {
  backgroundColor: "$profile",
  padding: "0.375rem",
  borderRadius: "4px",

  border: 0,
  cursor: "pointer",

  span: {
    color: "$blue300",
  },

  "&:hover": {
    transition: "0.2s",
    backgroundColor: "$border",
    span: {
      color: "$blue300",
    },
  },
});
