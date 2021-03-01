import React from 'react'
import { Box, Flex, Text, Input, Divider, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons'

const arrFood = [
    {
        "id": "1",
        "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
        "shipping": 6,
        "address": "Rua das Margaridas, 110 - Jardim das Flores",
        "name": "Habibs",
        "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
        "deliveryTime": 60,
        "category": "Árabe"
    },
    {
        "id": "10",
        "address": "Travessa Reginaldo Pereira, 130 - Ibitinga",
        "name": "Tadashii",
        "logoUrl": "http://soter.ninja/futureFoods/logos/tadashii.png",
        "deliveryTime": 50,
        "category": "Asiática",
        "description": "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
        "shipping": 13
    },
    {
        "id": "2",
        "description": "McDonald's Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer, servindo cerca de 68 milhões de clientes por dia em 119 países através de 37 mil pontos de venda.",
        "shipping": 19,
        "address": "Avenida dos Papagaios, 1350 - Sta. Efigênia",
        "name": "McDonalds",
        "logoUrl": "http://soter.ninja/futureFoods/logos/mcdonalds.png",
        "deliveryTime": 15,
        "category": "Hamburguer"
    },
    {
        "id": "3",
        "deliveryTime": 20,
        "category": "Italiana",
        "description": "Restaurante Self Service e lanchonete localizado no Laboratório Nacional de Computação Científica",
        "shipping": 2,
        "address": "Rua Barão do Rio Branco, 98 - Centro",
        "name": "Cantina Mamma Perrotta",
        "logoUrl": "http://soter.ninja/futureFoods/logos/cantinamammaperrotta.jpg"
    }
]

const DashboardPage = () => {

    const category = arrFood.map((type) => {
        return (
            <Tab key={type.id}>{type.category}</Tab>
        )
    })

    const restaurantsList = arrFood.map((restaurant) => {
        return (
            <TabPanel key={restaurant.id}>
                <p>{restaurant.name}</p>
            </TabPanel>
        )
    })

    return (
        <Flex as="main" w="100vw" h="100vh" direction="column" align="center" >
            <Text>
                FutureEats
            </Text>
            <Divider />
            <InputGroup>
                <InputLeftElement pointerEvents="none"
                    children={<Search2Icon color="gray.300" />}
                />
                <Input placeholder="Restaurante" />
            </InputGroup>
            <Tabs>
                <TabList>
                    {category}
                </TabList>
                <TabPanels>
                    {restaurantsList}
                </TabPanels>
            </Tabs>

        </Flex>
    )
}

export default DashboardPage
