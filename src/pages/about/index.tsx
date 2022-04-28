import NavBarBlog from "../../components/NavBarBlog";
import FooterBlog from '../../components/FooterBlog';
import {
  Box,
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
} from '@chakra-ui/react';

const About : React.FC = () => {
    return(
      <>
      <NavBarBlog>
      <Container maxW={'7xl'}>
          <SimpleGrid
            columns={{ base: 1, lg: 2}}
            spacing={{ base: 10, md: 30 }}
            py={{ base: 20, md: 24 }}>
            <Flex my="-100">
              <Image
                rounded={'md'}
                alt={'about image'}
                src={'https://user-images.githubusercontent.com/30902898/163825590-fa72643f-a9aa-455d-a4b9-2d06529074d3.png'}
                fit={'cover'}
                align={'center'}
                w={'120%'}
                h={{ base: '100%', sm: '600px', lg: '600px' }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={500}
                  fontSize={{ base: '1xl', sm: '3xl', md: '5xl' }}>
                  Quem somos
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
                <VStack spacing={{ base: 4, sm: 6}}>
                  <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
                  pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
                  imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
                  sapien. Suspendisse placerat vulputate posuere. Curabitur neque
                  tortor, mattis nec lacus non, placerat congue elit.
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
export default About;