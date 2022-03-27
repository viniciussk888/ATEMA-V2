import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Blog: React.FC = () => {
    return (
        <h1> blog <Link href='/login'>login</Link></h1>
    );
}

export default Blog;