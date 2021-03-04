import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Category = () => {
  return (
    <Box py="0.5em">
      <Text mx="1em" py="0.5em" borderBottom="1px black solid">
        Categoria
      </Text>
    </Box>
  );
};
//pensando como vai ser a lógica pra renderizar isso aqui de acordo com o que vem da API
export default Category;
