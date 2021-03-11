import { extendTheme } from "@chakra-ui/react";
import Button from "./styles/Button";
const futureEatsTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        fontFamily: "Roboto, sans-serif",
        bgColor: "neutralPalette.100",
      },
    },
  },
  colors: {
    greenPalette: {
      200: "#98D189",
      300: "#7EC66C",
      400: "#5CB646",
    },
    neutralPalette: {
      100: "#F2F4F7",
      400: "#B8B8B8",
      900: "#07080D",
    },
  },
  components: {
    Button,
  },
});

export default futureEatsTheme;
