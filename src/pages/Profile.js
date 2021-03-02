import { Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Profile = () => {
  return (
    <Flex as="main" w="100vw" h="100vh" direction="column" align="center">
      <Header>Profile</Header>
      <Flex as="section" h="90vh">
        teste
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Profile;
