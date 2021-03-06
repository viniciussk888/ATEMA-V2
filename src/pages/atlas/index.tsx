import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';

const Atlas: React.FC = () => {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                <h1>Teste</h1>
            </Flex>
        </Flex>
    );
}

export default Atlas;