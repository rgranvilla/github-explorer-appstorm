import { styled } from "../../styles";

export const Container = styled("div", {
  margin: "0.5rem 0",
  backgroundColor: "$bg_card",
  borderRadius: "8px",
  border: "1px solid $blue500",

  color: "$text",

  display: "flex",
  justifyContent: "space-between",

  cursor: "pointer",

  transition: "all ease-in-out 0.3s",
  "&:hover": {
    backgroundColor: "$bg_card_hover",
    border: "1px solid $blue300",
  },
});

export const Avatar = styled("div", {
  padding: "1rem",

  img: {
    borderRadius: "8px",
  },
});

export const Content = styled("a", {
  display: "flex",
  width: "100%",
  color: "$span",
  transition: "all ease-in-out 0.3s",

  header: {
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",

    fontWeight: "bold",
    fontSize: "1.5rem",
  },

  "&:hover": {
    color: "$text",
  },
});

export const ActionButton = styled("a", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  gap: "0.5rem",
  border: 0,
  borderRadius: "0 6px 6px 0",
  background: "$blue500",
  cursor: "pointer",

  span: {
    background: "transparent",
    border: 0,
    fontSize: "0.875rem",
    fontWeight: "bold",
    color: "$background",
  },
  svg: {
    color: "$background",
  },

  transition: "all ease-in-out 0.3s",

  "&:hover": {
    transitions: "0.2s",
    backgroundColor: "$blue300",
  },
});
