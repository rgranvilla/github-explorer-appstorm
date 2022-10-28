import { styled } from "@stitches/react";

export const Container = styled("div", {
  li: {
    listStyleType: "none",
  },
  margin: "2rem 0",
});

export const Button = styled("button", {
  padding: "0.75rem 0.75rem",
  minWidth: "3rem",
  border: 0,
  borderRadius: "6px",
  backgroundColor: "$blue500",
  color: "$background",
  cursor: "pointer",
  fontSize: "1rem",

  "&:not(:disabled):hover": {
    transition: "0.2s",
    backgroundColor: "$blue300",
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: "0.4",
  },

  "&.selected": {
    backgroundColor: "$blue300",
  },
});

export const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
  maxWidth: "600px",
});
