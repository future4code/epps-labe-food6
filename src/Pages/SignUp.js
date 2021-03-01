import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";

const SignUp = () => {
  return (
    <Flex as="main" w="100vw" h="100vh" direction="column" align="center">
      <Flex
        as="article"
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="space-between"
      >
        <Header>Cadastrar</Header>
        <Box as="span" padding="4">
          <Text
            fontSize="48px"
            fontWeight="400"
            lineHeight="0.9"
            alignSelf="flex-end"
          >
            Future
          </Text>
          <Text
            fontSize="48px"
            fontWeight="700"
            lineHeight="0.9"
            alignSelf="flex-end"
            color="greenPalette.400"
          >
            Eats
          </Text>
        </Box>
        <Flex
          as="section"
          direction="column"
          w="100%"
          paddingBottom="6"
          paddingX="4"
        >
          <Box as="form" h="100%" w="100%" paddingBottom="6">
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                Nome
              </FormLabel>
              <Input
                placeholder="Nome completo"
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                E-mail
              </FormLabel>
              <Input
                placeholder="E-mail"
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                CPF
              </FormLabel>
              <Input
                placeholder="000.000.000-00"
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                Senha
              </FormLabel>
              <Input
                type="password"
                placeholder="Senha"
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                Confirmar senha
              </FormLabel>
              <Input
                type="password"
                placeholder="Confirmar senha"
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
              />
            </FormControl>
          </Box>
          <Button type="submit" variant="solid" fontSize="20px">
            Cadastrar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUp;
