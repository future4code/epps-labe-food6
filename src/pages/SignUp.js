import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { base_url } from "../constants";
import AuthContext from "../contexts/authContext";
import { goToLogin, goToSignAddress } from "../routing/Coordinator";

const SignUp = () => {
  const token = localStorage.getItem("token");
  const { authSetters } = useContext(AuthContext);
  const { handleSubmit, errors, register } = useForm();
  const toast = useToast();
  const history = useHistory();

  useEffect(() => {
    if (token) {
      history.push("/feed/restaurants");
    }
  }, [history, token]);

  const createUser = async (user) => {
    try {
      const response = await axios.post(`${base_url}/signup`, user);
      toast({
        title: `Seja bem-vindx ${user.name}!`,
        description: `Email cadastrado: ${user.email}.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      localStorage.setItem("token", response.data.token);

      authSetters.setToken(response.data.token);
      authSetters.setUser(response.data.user);

      if (!response.data.user.hasAddress) {
        goToSignAddress(history);
      }
    } catch (err) {
      if (err && err.response.data.message === "Email ou CPF já cadastrados") {
        toast({
          title: "Email ou CPF já cadastrados!",
          description: (
            <Button
              onClick={() => goToLogin(history)}
              variant="link"
              size="lg"
              color="neutralPalette.100"
              margin="2"
            >
              Ir para tela de Login
            </Button>
          ),
          status: "error",
          duration: 30000,
          isClosable: true,
        });
      }
      throw new Error(err.response.data.message);
    }
  };

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      console.log("passwords don't match");
    } else {
      const userData = {
        name: data.name,
        email: data.email,
        cpf: data.cpf,
        password: data.password,
      };

      createUser(userData);
    }
    goToSignAddress(history);
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
          <Box as="form" h="100%" w="100%" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                Nome
                {errors.name && (
                  <Text as="span" color="red">
                    {" "}
                    *
                  </Text>
                )}
              </FormLabel>
              <Input
                placeholder="Nome completo"
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
                E-mail
                {errors.email && (
                  <Text as="span" color="red">
                    {" "}
                    *
                  </Text>
                )}
              </FormLabel>
              <Input
                placeholder="E-mail"
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
                type="email"
                name="email"
                ref={register({ required: true })}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                CPF
                {errors.cpf && (
                  <Text as="span" color="red">
                    {" "}
                    *
                  </Text>
                )}
              </FormLabel>
              <Input
                placeholder="000.000.000-00"
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
                name="cpf"
                ref={register({ required: true })}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                Senha
                {errors.password && (
                  <Text as="span" color="red">
                    {" "}
                    *
                  </Text>
                )}
              </FormLabel>
              <Input
                type="password"
                placeholder="Senha"
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
                name="password"
                ref={register({ required: true, minLength: 6, maxLength: 16 })}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                Confirmar senha
                {errors.confirmPassword && (
                  <Text as="span" color="red">
                    {" "}
                    *
                  </Text>
                )}
              </FormLabel>
              <Input
                type="password"
                placeholder="Confirmar senha"
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
                name="confirmPassword"
                ref={register({ required: true, minLength: 6, maxLength: 16 })}
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

export default SignUp;
