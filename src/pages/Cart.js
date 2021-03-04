import {
  Box,
  Button,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AuthContext from "../contexts/authContext";
import useAuth from "../hooks/useAuth";

const Cart = () => {
  useAuth();

  const { states } = useContext(AuthContext);

  const frete = "R$6,99";
  const subtotal = "R$42,00";

  return (
    <Flex
      as="main"
      w="100vw"
      h="100vh"
      direction="column"
      align="center"
      paddingBottom="80px"
    >
      <Header>Cart</Header>
      <Flex as="section" h="100%" w="100%" direction="column">
        {/* Address */}
        <Flex
          as="section"
          w="100%"
          h="100px"
          p="4"
          direction="column"
          bgColor="#ddd"
        >
          <Heading as="h6" fontSize="18px" fontWeight="500" color="GrayText">
            Endereço da entrega
          </Heading>
          <Text fontSize="lg">{states.user && states.user.address}</Text>
        </Flex>

        {/* Items */}
        <Flex as="section" w="100%" h="100%" p="2" justify="center">
          {/* Array de cards */}
          <Text p="4" fontSize="xl">
            Seu carrinho está vazio.
          </Text>
        </Flex>

        {/* Shipping + Subtotal */}
        <Flex as="section" w="100%" h="100%" direction="column">
          <Flex justify="space-between" p="2">
            <Text alignSelf="flex-end" fontSize="xl">
              Subtotal
            </Text>
            <Box>
              <Text fontSize="xl" fontWeight="500" justifySelf="flex-end">
                Frete {frete}
              </Text>
              <Text
                fontSize="xl"
                fontWeight="600"
                justifySelf="flex-end"
                color="greenPalette.300"
              >
                R$ {subtotal}
              </Text>
            </Box>
          </Flex>

          {/* Payment Method */}
          <Text boxShadow="1px 1px 1px lightgray" fontSize="xl" w="100%" p="2">
            Método de Pagamento:
          </Text>
          <RadioGroup as="section" w="100%" direction="column" p="2">
            <Radio value="cartao" p="2" w="100%" size="lg" colorScheme="green">
              Cartão
            </Radio>
            <Radio
              value="dinheiro"
              p="2"
              w="100%"
              size="lg"
              colorScheme="green"
            >
              Dinheiro
            </Radio>
          </RadioGroup>
          <Button marginY="2">Ir para pagamento</Button>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Cart;
