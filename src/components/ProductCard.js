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

const ProductCard = ({ name, description, price, photoUrl }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="article"
      border="1px solid"
      borderColor="neutralPalette.400"
      borderRadius="8px"
      m="0.5em"
      h="7em"
    >
      <Flex w="30%" h="7em">
        <Image
          w="100%"
          src={photoUrl}
          objectFit="cover"
          alt={description}
          borderRadius="8px 0 0 8px "
        />
      </Flex>
      <Flex direction="column" grow="1">
        <Flex
          color="neutralPalette.500"
          flexDirection="column"
          px="1em"
          paddingTop="0.5em"
          grow="1"
        >
          <Text color="greenPalette.400">{name}</Text>
          <Text fontSize="sm">{description}</Text>

          <Text color="black">
            <strong>R$ {price}</strong>
          </Text>
        </Flex>
        <Flex justify="flex-end">
          <Button
            colorScheme="greenPalette.400"
            size="sm"
            borderRadius="8px 0 8px 0"
            variant="outline"
            onClick={onOpen}
            m="0"
          >
            adicionar
          </Button>
        </Flex>

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
