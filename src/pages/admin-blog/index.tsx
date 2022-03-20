import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';

const AdminBlog: React.FC = () => {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
            </Flex>
        </Flex>
    );
}

export default AdminBlog;