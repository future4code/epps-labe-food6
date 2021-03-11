import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { base_url } from "../constants";
import AuthContext from "../contexts/authContext";
import useAuth from "../hooks/useAuth";
import { goToProfile } from "../routing/Coordinator";

const EditProfile = () => {
  useAuth();
  const { authStates } = useContext(AuthContext);
  const { handleSubmit, register } = useForm();
  const history = useHistory();
  const toast = useToast();

  const updateProfile = async (userData) => {
    try {
      await axios.put(`${base_url}/profile`, userData, {
        headers: {
          auth: authStates.token,
        },
      });

      toast({
        title: `Sucesso!! Seu perfil foi alterado!`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  const onSubmit = (data) => {
    updateProfile(data);
    goToProfile(history);
  };

  return (
    <Flex w="100vw" h="100vh" direction="column">
      <Header>Editar</Header>
      <Flex
        h="90vh"
        w="100%"
        p="4"
        as="form"
        direction="column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl paddingY="2">
          <FormLabel>Nome</FormLabel>
          <Input
            name="name"
            defaultValue={authStates.user.name}
            ref={register}
          />
        </FormControl>
        <FormControl paddingY="2">
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            defaultValue={authStates.user.email}
            ref={register}
          />
        </FormControl>
        <FormControl paddingY="2">
          <FormLabel>CPF</FormLabel>
          <Input name="cpf" defaultValue={authStates.user.cpf} ref={register} />
        </FormControl>
        <Button type="Submit" marginY="4">
          Salvar
        </Button>
      </Flex>
    </Flex>
  );
};

export default EditProfile;
