/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';
import { formatDate } from '../../utils/formateDate';

interface Props {
    author: string;
    content: string;
    created_at: string;
    id: number;
    image: string;
    title: string;
    updated_at: string;
}

const CardBlog = ({ author, content, created_at, id, image, title, updated_at }: Props) => {
    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                        src={image}
                        layout={'fill'}
                    />
                </Box>
                <Stack>
                    <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'large'}
                        letterSpacing={1.1}>
                        {title}
                    </Text>
                    <Text color={'gray.500'}>
                        {content?.substring(0, 150)}...
                    </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar
                        name={author}
                        alt={author}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>{author}</Text>
                        <Text color={'gray.500'}>{formatDate(created_at)}</Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    )
}

export default CardBlog;