import { Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OrderHistoryCard from "../components/OrderHistoryCard";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  useAuth();
  return (
    <Flex as="main" w="100vw" h="100vh" direction="column" align="center">
      <Header>Profile</Header>
      <Flex as="section" h="100%" w="100%" flexDirection="column">
        profile page
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Profile;
