import { extendTheme } from "@chakra-ui/react";

const futureEatsTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        fontFamily: "Roboto, sans-serif",
      },
    },
  },
  colors: {
    greenPalette: {
      400: "#5CB646",
    },
    neutralPalette: {
      100: "#FBF1EF",
      900: "#070C0E",
    },
  },
  components: {},
});

export default futureEatsTheme;
