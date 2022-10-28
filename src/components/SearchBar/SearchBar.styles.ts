import { styled } from "../../styles";

export const Container = styled("div", {
  margin: "1rem 0",
  display: "flex",
  flexDirection: "column",

  ".search-wrapper": {
    display: "flex",
    gap: "0.5rem",
  },
});

export const ClearButton = styled("button", {
  width: "43px",
  height: "43px",
  border: 0,
  borderRadius: "6px",

  backgroundColor: "$blue500",
  color: "$background",

  cursor: "pointer",

  svg: {
    width: "1.25rem",
    height: "1.25rem",
  },

  "&:hover": {
    transitions: "0.2s",
    backgroundColor: "$error",
  },
});

export const ErrorWrapper = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  fontSize: "0.75rem",

  paddingRight: "4rem",

  span: {
    textAlign: "right",
    color: "$error",
  },
});

export const SearchInput = styled("input", {
  width: "stretch",

  borderRadius: "6px",
  padding: "0.75rem 1rem",

  background: "$input",
  color: "$text",

  border: "2px solid $border",
  outline: "none",

  transition: "border-color 0.2s",

  "&:hover": {
    border: "2px solid $blue300",
  },

  "&:not(:placeholder-shown)": {
    border: "2px solid $blue500",
  },
});
