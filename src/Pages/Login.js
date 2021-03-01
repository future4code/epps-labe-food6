import React, { useState } from "react";
import { Button, ButtonGroup, FormControl, FormLabel, Input, InputGroup, InputRightElement, Show } from "@chakra-ui/react";

const Login = () => {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <div>
      <FormControl id="first-name" isRequired>
        <FormLabel>E-mail</FormLabel>
        <Input placeholder="Digite seu e-mail" size="md" />
        <FormLabel>Senha</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Digite sua senha"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Esconder" : "Mostrar"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </div>
  );
};

export default Login;
