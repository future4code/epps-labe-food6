import React from "react";
import {
  Flex,
  Text,
  Input,
  Divider,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import RestaurantCard from "../../components/RestaurantCard";

const arrFood = [
  {
    id: "1",
    description:
      "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
    shipping: 6,
    address: "Rua das Margaridas, 110 - Jardim das Flores",
    name: "Habibs",
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fhabibs.jpg?alt=media&token=a30ea547-3a3b-4e80-b58e-b8dc976697de",
    deliveryTime: 60,
    category: "Árabe",
  },
  {
    id: "10",
    address: "Travessa Reginaldo Pereira, 130 - Ibitinga",
    name: "Tadashii",
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Ftadashii.png?alt=media&token=0e4b9b8c-3b6e-4a78-bd49-d3576657a342",
    deliveryTime: 50,
    category: "Asiática",
    description:
      "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
    shipping: 13,
  },
  {
    id: "2",
    description:
      "McDonald's Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer, servindo cerca de 68 milhões de clientes por dia em 119 países através de 37 mil pontos de venda.",
    shipping: 19,
    address: "Avenida dos Papagaios, 1350 - Sta. Efigênia",
    name: "McDonalds",
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fmcdonalds.png?alt=media&token=87a0fc52-3b8d-4475-b3e4-6ff730356121",
    deliveryTime: 15,
    category: "Hamburguer",
  },
  {
    id: "3",
    deliveryTime: 20,
    category: "Italiana",
    description:
      "Restaurante Self Service e lanchonete localizado no Laboratório Nacional de Computação Científica",
    shipping: 2,
    address: "Rua Barão do Rio Branco, 98 - Centro",
    name: "Cantina Mamma Perrotta",
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fcantinamammaperrotta.jpg?alt=media&token=3a4e76b6-3d07-414b-8672-e624f5a10a76",
  },
];

const DashboardPage = () => {
  const category = arrFood.map((type) => {
    return <Tab key={type.id}>{type.category}</Tab>;
  });

  const restaurantsList = arrFood.map((restaurant) => {
    return (
      <RestaurantCard
        key={restaurant.id}
        deliveryTime={restaurant.deliveryTime}
        category={restaurant.category}
        description
        shipping={restaurant.shipping}
        address={restaurant.adress}
        name={restaurant.name}
        logoUrl={restaurant.logoUrl}
      />
    );
  });

  return (
    <Flex
      as="main"
      isFullWidth
      mx="1em"
      h="100vh"
      direction="column"
      align="center"
    >
      <Text p="12px 50px">FutureEats</Text>
      <Divider />
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input placeholder="Restaurante" />
      </InputGroup>
      <Tabs>
        <TabList>{category}</TabList>
        <TabPanels>{restaurantsList}</TabPanels>
      </Tabs>
    </Flex>
  );
};

export default DashboardPage;
