import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CartContext from "../contexts/cartContext";
import { goToCart } from "../routing/Coordinator";

const ProductCard = ({ idToAdd, name, description, price, photoUrl }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartStates, cartSetters } = useContext(CartContext);
  const history = useHistory();
  const toast = useToast();

  const onChangeSelect = (event) => {
    cartSetters.setSelectQuantity(event.target.value);
  };

  const addProductToCart = (productId) => {
    if (cartStates.selectQuantity !== 0) {
      const newProduct = {
        id: productId,
        name: name,
        description: description,
        price: price,
        photoUrl: photoUrl,
        quantity: Number(cartStates.selectQuantity),
      };
      let newCart = [...cartStates.products, newProduct];
      cartSetters.setProducts(newCart);
      cartSetters.setSelectQuantity(0);
      console.log("Objeto novo produto", newProduct);
      toast({
        title: "O produto foi adicionado ao carrinho",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Por favor, selecione a quantidade",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Flex
      as="article"
      border="1px solid"
      borderColor="neutralPalette.400"
      borderRadius="8px"
      mx="1em"
      my="0.5em"
      h="7em"
      onClick={onOpen}
      _hover={{
        backgroundColor: "neutralPalette.400",
      }}
      _active={{
        borderColor: "greenPalette.400",
      }}
    >
      <Flex w="30%" h="7em">
        <Image
          w="100%"
          src={photoUrl}
          objectFit="cover"
          alt={description}
          borderRadius="8px 0 0 8px"
        />
      </Flex>
      <Flex
        color="neutralPalette.500"
        flexDirection="column"
        px="1em"
        paddingTop="0.5em"
        grow="1"
        justify="space-evenly"
      >
        <Text color="greenPalette.400">{name}</Text>
        <Text fontSize="sm" flexWrap="wrap">
          {description}
        </Text>
        <Text color="black">
          <strong>R$ {price}</strong>
        </Text>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="70%">
          <ModalHeader marginTop="1em">Quantidade:</ModalHeader>
          <ModalCloseButton marginTop="0.5em" />
          <ModalBody>
            <Select
              name="quantity"
              id="quantity"
              color="neutralPalette.900"
              w="100%"
              onChange={onChangeSelect}
              isRequired
            >
              <option isdisabled>Selecione:</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Flex w="100%" direction="column" p="0" justify="space-around">
              <Button
                variant="outline"
                size="sm"
                my="0.5em"
                type="submit"
                onClick={() => addProductToCart(idToAdd)}
              >
                Adicionar
              </Button>
              <Button
                variant="solid"
                size="sm"
                my="0.5em"
                onClick={() => goToCart(history, 1)}
              >
                Ir ao carrinho
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ProductCard;
