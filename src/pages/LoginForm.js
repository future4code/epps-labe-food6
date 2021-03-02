import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { goToSignUp } from "../routing/Coordinator";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { handleSubmit, register } = useForm()
  const history = useHistory()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
      <Flex as="main" w="100vw" h="100vh" direction="column" align="center">
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
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
        <FormControl isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input
            placeholder="Digite seu e-mail"
            color="neutralPalette.900"
            borderColor="neutralPalette.500"
            size="lg"
            type="email"
            name="email"
            ref={register({ required: true })}
           
          />
        </FormControl>
        <FormControl>
          <FormLabel>Senha</FormLabel>
          <InputGroup size="md">
            <Input
              placeholder="Digite sua senha"
              color="neutralPalette.900"
              borderColor="neutralPalette.500"
              size="lg"
              name="password"
              ref={register({ required: true })}
              type={show ? "text" : "password"}
  
            />
            <InputRightElement width="4.5rem">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                margin="normal"
                h="1.75rem"
                size="sm"
                // onClick=handleClick
                required
              >
                {show ? "Esconder" : "Mostrar"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          type="submit"
          variant="solid"
          fontSize="20px"
          marginTop="6"
          w="100%"
        >
          Entrar
        </Button>
        </Box>
        <Button
          onClick={() => goToSignUp(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          margin={"normal"}
        >
          Cadastre-se
        </Button>
      </Flex>
  )
}

export default LoginForm
