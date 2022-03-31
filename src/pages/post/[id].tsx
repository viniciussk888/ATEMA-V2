import React from 'react';
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
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaArrowLeft } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useRouter } from 'next/router';

const Post: React.FC = () => {
  const router = useRouter();
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
                src={
                  'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
                }
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
                  Automatic Watch ahdga
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
                  <Text
                    color={useColorModeValue('gray.500', 'gray.400')}
                    fontSize={'2xl'}
                    fontWeight={'300'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </Text>
                  <Text fontSize={'lg'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                    maxime modi nam officiis porro, quae, quisquam quos
                    reprehenderit velit? Natus, totam.
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