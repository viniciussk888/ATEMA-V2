import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';
import Router from "next/router";

export const Layout: React.FC = ({ children }) => {

    useEffect(() => {
        const token = localStorage.getItem('@atema/token')
        if (!token) {
            Router.push('/login')
        }
    },[])

    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                <Box w="100%">
                    {children}
                </Box>
            </Flex>
        </Flex>
    );
}