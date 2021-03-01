const Button = {
  baseStyle: {
    textTransform: "uppercase",
  },
  variants: {
    solid: {
      bgColor: "greenPalette.400",
      color: "neutralPalette.900",
    },
  },
  defaultProps: {
    size: "lg",
    variant: "solid",
  },
};

export default Button;
