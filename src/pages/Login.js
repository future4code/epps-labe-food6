import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <FormControl isRequired>
        <FormLabel>E-mail</FormLabel>
        <Input
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          size="md"
        />
        <FormLabel>Senha</FormLabel>
        <InputGroup size="md">
          <Input
            name="password"
            id="password"
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
