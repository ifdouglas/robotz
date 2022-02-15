import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    black: "#16161D",
    green: {
      500: "#46DA51",
    },
    brand: {
      50: "#44337A",
      100: "#B794F4",
      500: "#B794F4",
    },
  },
  fonts,
  breakpoints,
});

export default theme;
