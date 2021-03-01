const Button = {
  variants: {
    solid: {
      bgColor: "greenPalette.400",
      color: "neutralPalette.900",
      _hover: {
        bgColor: "greenPalette.200",
        color: "neutralPalette.900",
      },
      _focus: {
        bgColor: "greenPalette.200",
        color: "neutralPalette.900",
      },
    },
  },
  defaultProps: {
    size: "lg",
    variant: "solid",
  },
};

export default Button;
