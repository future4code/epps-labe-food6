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

    outline: {
      borderColor: "greenPalette.400",
      color: "greenPalette.400",
      _hover: {
        borderColor: "greenPalette.200",
        color: "greenPalette.400",
      },
      _focus: {
        borderColor: "greenPalette.200",
        color: "greenPalette.400",
      },
    },
  },
  defaultProps: {
    size: "lg",
    variant: "solid",
  },
};

export default Button;
