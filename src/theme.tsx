import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

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
      50: "#281E5D",
      100: "#44337A",
      500: "#B794F4",
    },
  },
  fonts,
  breakpoints,
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#281E5D', '#281E5D')(props)
      }
    })
  },
});

export default theme;
