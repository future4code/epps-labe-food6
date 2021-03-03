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
} from "@chakra-ui/react";
import React from "react";
import testImage from "../images/arepas_venezuelanas.jpg";

const ProductCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      as="article"
      mx="1em"
      my="0.5em"
      border="1px solid"
      borderColor="neutralPalette.500"
      borderRadius="8px"
      p="0"
    >
      <Image
        h="100%"
        w="35%"
        paddingRight="1em"
        src={testImage}
        alt="Arepa bem gostosa"
        objectFit="contain"
        borderRadius="8px 8px 0 0"
      />
      <Flex
        color="neutralPalette.500"
        flexDirection="column"
        justify="space-between"
      >
        <Text color="greenPalette.400" paddingTop="1em">
          Arepa
        </Text>
        <Text fontSize="sm" lineHeight="12px">
          Farinha de milho com recheios diversos
        </Text>
        <Flex justify="space-between">
          <Text color="black">R$ 20,00</Text>
        </Flex>
        <Button
          colorScheme="greenPalette.400"
          size="md"
          m="0"
          borderRadius="8px 0 8px 0"
          variant="outline"
          alignSelf="flex-end"
          justifySelf="flex-end"
          onClick={onOpen}
        >
          adicionar
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w="60%">
            <ModalHeader marginTop="1em">Quantidade:</ModalHeader>
            <ModalCloseButton marginTop="0.5em" />
            <ModalBody>
              <Select color="neutralPalette.900" w="100%">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Select>
            </ModalBody>
            <ModalFooter display="flex" justify="center">
              <Button variant="outline" size="sm" mx="auto" my="1em">
                Adicionar ao carrinho
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
