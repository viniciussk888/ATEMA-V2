/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import NavBarBlog from '../../components/NavBarBlog';
import FooterBlog from '../../components/FooterBlog';


import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaArrowLeft } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useRouter } from 'next/router';
import { api_atema } from '../../services/api';
import { formatDate } from '../../utils/formateDate';

interface Post {
  author: string;
  content: string;
  created_at: string;
  id: number;
  image: string;
  title: string;
  updated_at: string;
}

const Post: React.FC = () => {
  const router = useRouter();
  const { id } = router.query
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (id) {
        const response = await api_atema.get(`/post/${id}`);
        if (response.status === 200) {
          setPost(response.data)
        }
      }
    }
    fetchData();
  }, [id]);

  if (post === null) {
    return (
      <>
        <NavBarBlog>
          <Box marginTop='30vh' display="flex" alignItems='center' justifyContent='center'>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='green.500'
              size='xl'
            />
          </Box>
        </NavBarBlog>
      </>
    )
  }

  return (
    <>
      <NavBarBlog>
        <Container maxW={'7xl'}>
          <Button onClick={() => router.back()} leftIcon={<FaArrowLeft color="green.400" />} variant="outline" color="green.400" colorScheme='green.400'>Voltar</Button>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}>
            <Flex>
              <Image
                rounded={'md'}
                alt={'product image'}
                src={post?.image || 'https://via.placeholder.com/300x300'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                  {post?.title}
                </Heading>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                  />
                }>
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text fontSize={'lg'}>
                    {post?.content}
                  </Text>
                  <Text
                    color={useColorModeValue('gray.500', 'gray.400')}
                    fontSize={'large'}
                    fontWeight={'300'}>
                    Autor: {post?.author} - Publicado em: {formatDate(post?.created_at)}
                  </Text>
                </VStack>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </NavBarBlog>
      <FooterBlog />
    </>
  );
}

export default Post;