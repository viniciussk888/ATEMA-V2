/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    Image,
    useColorModeValue,
    Button
} from '@chakra-ui/react';
import { formatDate } from '../../utils/formateDate';
import { api_atema } from '../../services/api';

interface Props {
    author: string;
    content: string;
    created_at: string;
    id: number;
    image: string;
    title: string;
    updated_at: string;
    deleteOption?: boolean;
    removePost?: (id: number) => void;
}

const CardBlog = ({ deleteOption = false, removePost, author, content, created_at, id, image, title, updated_at }: Props) => {
    const [loading, setLoading] = useState(false);

    const deletePost = async () => {
        setLoading(true);
        try {
            const response = await api_atema.delete(`/post/${id}`);
            if (response.status === 204) {
                removePost(id);
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }
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
                        src={image|| 'https://user-images.githubusercontent.com/30902898/163825590-fa72643f-a9aa-455d-a4b9-2d06529074d3.png'}
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
                <Stack mt={6} direction={'row'} spacing={4} align={'center'} justifyContent="space-between">
                    <Box display="flex" flexDirection="row" alignItems="center">
                        <Avatar mr="3"
                            name={author}
                            alt={author}
                        />
                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                            <Text fontWeight={600}>{author}</Text>
                            <Text color={'gray.500'}>{formatDate(created_at)}</Text>
                        </Stack>
                    </Box>
                    {deleteOption ? <Button onClick={deletePost} isLoading={loading} color="white" variant="outline" backgroundColor='red.400' colorScheme="red.400">Apagar</Button> : <Button as="a" href={`/post/${id}`} color="green.400" variant="outline" colorScheme="green.400">Ver detalhes</Button>}
                </Stack>
            </Box>
        </Center>
    )
}

export default CardBlog;