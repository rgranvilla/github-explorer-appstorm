import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",

      blue300: "#3294F8",
      blue500: "#094077",

      title: "#E7EDF4",
      subtitle: "#C4D4E3",
      text: "#AFC2D4",
      span: "#7B96B2",
      label: "#3A536B",
      border: "#1C2F41",
      post: "#112131",
      profile: "#0B1B2B",
      background: "#071422",
      input: "#040F1A",

      bg_card: "#040F1A",
      bg_card_hover: "#010204",
      error: "#F44336",
    },
  },
});
