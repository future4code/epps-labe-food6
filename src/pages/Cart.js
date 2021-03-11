import {
  Box,
  Button,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductOnCart from "../components/ProductOnCart";
import OrderStatus from "../components/OrderStatus";
import AuthContext from "../contexts/authContext";
import CartContext from "../contexts/cartContext";
import useAuth from "../hooks/useAuth";

const Cart = () => {
  useAuth();
  const { authStates } = useContext(AuthContext);
  const { cartStates } = useContext(CartContext);

  const toast = useToast();

  useEffect(() => {
    console.log(cartStates.order);
  }, [cartStates.order]);

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
          <Text fontSize="lg">
            {authStates.user && authStates.user.address}
          </Text>
        </Flex>

        {/* Items */}
        <Flex
          as="section"
          w="100%"
          h="100%"
          p="2"
          direction="column"
          justify="center"
        >
          {/* Array de cards */}
          {cartStates.products[0] ? (
            cartStates.products.map((product) => {
              console.log("dentro do map", product);
              return (
                <ProductOnCart
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  photoUrl={product.photoUrl}
                />
              );
            })
          ) : (
            <Text p="4" fontSize="xl">
              Seu carrinho está vazio.
            </Text>
          )}
        </Flex>

        {/* Shipping + Subtotal */}
        <Flex as="section" w="100%" h="100%" direction="column">
          <Flex justify="space-between" p="2">
            <Text alignSelf="flex-end" fontSize="xl">
              Subtotal
            </Text>
            <Box>
              <Text fontSize="xl" fontWeight="500" justifySelf="flex-end">
                Frete{" "}
                {/* {cartStates.shipping.shipping && cartStates.shipping.shipping} */}
              </Text>
              <Text
                fontSize="xl"
                fontWeight="600"
                justifySelf="flex-end"
                color="greenPalette.300"
              >
                {/* R$ {cartStates.order.totalPrice} */}
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
          <Button
            m="2"
            onClick={() =>
              toast({
                title: "Desculpe!",
                description: "Ainda não temos área de pagamento!",
                status: "warning",
                duration: 5000,
                isClosable: true,
              })
            }
          >
            Ir para pagamento
          </Button>
        </Flex>
      </Flex>
      <OrderStatus />
      <Footer />
    </Flex>
  );
};

export default Cart;
