import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AuthContext from "../contexts/authContext";
import OrderHistoryCard from "../components/OrderHistoryCard";
import useAuth from "../hooks/useAuth";
import { goToEditProfile } from "../routing/Coordinator";
import { useHistory } from "react-router-dom";

const Profile = () => {
  useAuth();
  const { states } = useContext(AuthContext);
  const history = useHistory();

  return (
    <Flex as="main" w="100vw" h="100vh" direction="column" align="center">
      <Header>Profile</Header>
      <Flex as="section" h="100%" w="100%" direction="column">
        <Flex w="100%" justifyContent="space-between" align="center">
          <Box w="100%" p="4">
            <Text>{states.user && states.user.name}</Text>
            <Text>{states.user && states.user.email}</Text>
            <Text>{states.user && states.user.cpf}</Text>
          </Box>
          <IconButton
            icon={<EditIcon />}
            variant="ghost"
            fontSize="26px"
            onClick={() => goToEditProfile(history, states.user.id)}
          />
        </Flex>
        <Flex as="section" w="100%" bgColor="#ddd" align="center">
          <Box w="100%" p="4">
            <Heading as="h6" fontSize="18px" fontWeight="500" color="GrayText">
              Endereço cadastrado
            </Heading>
            <Text fontSize="lg">{states.user && states.user.address}</Text>
          </Box>
          <IconButton icon={<EditIcon />} variant="ghost" fontSize="26px" />
        </Flex>
        <Flex padding="4" direction="column">
          <Text fontSize="xl">Histórico de Pedidos</Text>
          <Divider bgColor="black" marginTop="1" marginBottom="4" />
          <OrderHistoryCard />
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Profile;
