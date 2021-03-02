import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { base_url } from "../constants";
import AuthContext from "../contexts/authContext";
import { goToLogin, goToSignAddress } from "../routing/Coordinator";

const SignAddress = () => {
  const { states, requests, setters } = useContext(AuthContext);
  const { handleSubmit, errors, register, formState } = useForm();
  const toast = useToast();
  const history = useHistory();

  // toast({
  //   title: `Seja bem-vindx ${user.name}!`,
  //   description: `Email cadastrado: ${user.email}.`,
  //   status: "success",
  //   duration: 5000,
  //   isClosable: true,
  // });

  // toast({
  //   title: "Email ou CPF já cadastrados!",
  //   description: (
  //     <Button
  //       onClick={() => goToLogin(history)}
  //       variant="link"
  //       size="lg"
  //       color="neutralPalette.100"
  //       margin="2"
  //     >
  //       Ir para tela de Login
  //     </Button>
  //   ),
  //   status: "error",
  //   duration: 30000,
  //   isClosable: true,
  // });

  const createAddress = async (address) => {
    console.log("address data", address);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(`${base_url}/address`, address, {
        headers: {
          Authorization: token,
        },
      });
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  const onSubmit = (data) => {
    console.log("form data", data);
    createAddress(data);
  };

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
        <Header>Cadastrar endereço</Header>
        <Flex
          as="section"
          direction="column"
          w="100%"
          paddingBottom="6"
          paddingX="4"
        >
          <Box as="form" h="100%" w="100%" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                Logradouro
                {errors.street && (
                  <Text as="span" color="red">
                    {" "}
                    *
                  </Text>
                )}
              </FormLabel>
              <Input
                placeholder="Rua/Av."
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
                name="name"
                type="text"
                ref={register({ required: true })}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                Número
                {errors.number && (
                  <Text as="span" color="red">
                    {" "}
                    *
                  </Text>
                )}
              </FormLabel>
              <Input
                placeholder="220"
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
                type="text"
                name="number"
                ref={register({ required: true })}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                Complemento
                {errors.complement && (
                  <Text as="span" color="red">
                    {" "}
                    *
                  </Text>
                )}
              </FormLabel>
              <Input
                placeholder="Apto 420 bloco 02"
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
                name="complement"
                ref={register({ required: true })}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                Bairro
                {errors.password && (
                  <Text as="span" color="red">
                    {" "}
                    *
                  </Text>
                )}
              </FormLabel>
              <Input
                type="text"
                placeholder="Bairro"
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
                name="neighbourhood"
                ref={register({ required: true })}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                Cidade
                {errors.city && (
                  <Text as="span" color="red">
                    {" "}
                    *
                  </Text>
                )}
              </FormLabel>
              <Input
                type="text"
                placeholder="Cidade"
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
                name="city"
                ref={register({ required: true })}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                Estado
                {errors.state && (
                  <Text as="span" color="red">
                    {" "}
                    *
                  </Text>
                )}
              </FormLabel>
              <Input
                type="text"
                placeholder="Estado"
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
                name="state"
                ref={register({ required: true })}
              />
            </FormControl>
            <Button
              type="submit"
              variant="solid"
              fontSize="20px"
              marginTop="6"
              w="100%"
            >
              Cadastrar
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignAddress;
