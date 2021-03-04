import {
  Box,
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

const ProductCard = ({ name, description, price, photoUrl }) => {
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
      <Box w="35%">
        <Image
          h="100%"
          w="100%"
          paddingRight="1em"
          src={photoUrl}
          alt={description}
          objectFit="cover"
          borderRadius="8px 8px 0 0"
        />
      </Box>
      <Flex
        color="neutralPalette.500"
        flexDirection="column"
        justify="space-between"
      >
        <Text color="greenPalette.400" paddingTop="1em">
          {name}
        </Text>
        <Text fontSize="sm" lineHeight="12px">
          {description}
        </Text>
        <Flex justify="space-between">
          <Text color="black">R$ {price}</Text>
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
