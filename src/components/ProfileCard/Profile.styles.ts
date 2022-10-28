import { styled } from "../../styles";

export const Container = styled("a", {
  margin: "1rem 0",
  backgroundColor: "$input",
  borderRadius: "8px",
  color: "$text",
  display: "flex",
  border: "3px solid $blue500",

  "&:hover": {
    transition: "0.2s",
    border: "3px solid $blue300",
  },
});

export const Avatar = styled("div", {
  padding: "2rem 0",
  paddingLeft: "2.5rem",

  img: {
    borderRadius: "8px",
  },
});

export const AvatarSkeleton = styled("div", {
  margin: "2rem 0",
  marginLeft: "2.5rem",
  height: "120px",
  width: "120px",

  borderRadius: "8px",
  backgroundColor: "$profile",
});

export const ContentSkeleton = styled("div", {
  height: "1rem",
  width: "100%",

  backgroundColor: "$profile",
});

export const ContentWrapper = styled("div", {
  padding: "2rem",
  width: "100%",

  display: "flex",
  flexDirection: "column",

  justifyContent: "space-between",

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    fontWeight: "bold",
    fontSize: "1.5rem",

    ".actionsButton": {
      display: "flex",
      gap: "1rem",

      button: {
        background: "transparent",
        border: 0,
        fontSize: "1.25rem",
        color: "$blue300",
        cursor: "pointer",

        "&:hover": {
          transitions: "0.2s",
          color: "$blue500",
        },
      },
    },
  },

  "& .footer": {
    display: "flex",
    justifyContent: "space-between",

    svg: {
      color: "$blue300",
    },
  },
});

export const TagContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const ProfileAccessButton = styled("button", {
  padding: "0.5rem",
  fontSize: "1rem",
  backgroundColor: "$blue500",
  color: "$background",
  border: 0,
  borderRadius: "0 4px 4px 0",

  cursor: "pointer",

  "&:hover": {
    transition: "0.2s",
    backgroundColor: "$blue300",
  },
});
