import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { base_url } from "../constants";
import AuthContext from "../contexts/authContext";
import useAuth from "../hooks/useAuth";
import { goToProfile } from "../routing/Coordinator";

const EditAddress = () => {
  useAuth();
  const { authStates, authRequests } = useContext(AuthContext);
  const { handleSubmit, register } = useForm();
  const toast = useToast();

  const history = useHistory();

  useEffect(() => {
    if (authStates.user.hasAddress) {
      authRequests.getAddress();
    }
  }, [authRequests]);

  const updateAddress = async (userAddress) => {
    try {
      const response = await axios.put(`${base_url}/address`, userAddress, {
        headers: {
          auth: authStates.token,
        },
      });

      toast({
        title: `Sucesso!! Seu novo endereço é:`,
        description: `${response.data.user.address}.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  const onSubmit = (data) => {
    updateAddress(data);
    goToProfile(history);
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
        <Header>Editar endereço</Header>
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
              </FormLabel>
              <Input
                placeholder={
                  authStates.address.street && authStates.address.street
                }
                defaultValue={
                  authStates.address.street && authStates.address.street
                }
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
                name="street"
                type="text"
                ref={register({ required: true })}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                Número
              </FormLabel>
              <Input
                placeholder={
                  authStates.address.number && authStates.address.number
                }
                defaultValue={
                  authStates.address.number && authStates.address.number
                }
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
              </FormLabel>
              <Input
                placeholder={
                  authStates.address.complement && authStates.address.complement
                }
                defaultValue={
                  authStates.address.complement && authStates.address.complement
                }
                color="neutralPalette.900"
                borderColor="neutralPalette.500"
                size="lg"
                name="complement"
                ref={register}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg" marginTop="3">
                Bairro
              </FormLabel>
              <Input
                type="text"
                placeholder={
                  authStates.address.neighbourhood &&
                  authStates.address.neighbourhood
                }
                defaultValue={
                  authStates.address.neighbourhood &&
                  authStates.address.neighbourhood
                }
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
              </FormLabel>
              <Input
                type="text"
                placeholder={authStates.address.city && authStates.address.city}
                defaultValue={
                  authStates.address.city && authStates.address.city
                }
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
              </FormLabel>
              <Input
                type="text"
                placeholder={
                  authStates.address.state && authStates.address.state
                }
                defaultValue={
                  authStates.address.state && authStates.address.state
                }
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
              Salvar
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EditAddress;
