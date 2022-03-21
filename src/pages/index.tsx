import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Header } from '../components/Header';
import { SideBar } from '../components/Sidebar';

const Blog: React.FC = () => {
    return (
        <h1> blog <Link href='/login'>login</Link></h1>
    );
}

export default Blog;