import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { base_url } from "../constants";
import AuthContext from "../contexts/authContext";

const EditProfile = () => {
  const pathParams = useParams();
  const { requests, states, setters } = useContext(AuthContext);
  const { handleSubmit, errors, register } = useForm();

  useEffect(() => {
    console.log(states.user);
  }, []);

  const updateProfile = async (userData) => {
    console.log(userData);
    try {
      const response = await axios.put(`${base_url}/profile`, userData, {
        headers: {
          auth: states.token,
        },
      });
      console.log(response.data);
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  const onSubmit = (data) => {
    updateProfile(data);
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
          <Input name="name" defaultValue={states.user.name} ref={register} />
        </FormControl>
        <FormControl paddingY="2">
          <FormLabel>Email</FormLabel>
          <Input name="email" defaultValue={states.user.email} ref={register} />
        </FormControl>
        <FormControl paddingY="2">
          <FormLabel>CPF</FormLabel>
          <Input name="cpf" defaultValue={states.user.cpf} ref={register} />
        </FormControl>
        <Button type="Submit" marginY="4">
          Salvar
        </Button>
      </Flex>
    </Flex>
  );
};

export default EditProfile;
