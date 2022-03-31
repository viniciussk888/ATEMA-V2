import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>ATEMA</ListHeader>
            <Link href={'/'}>Blog</Link>
            <Link href={'/about'}>Sobre</Link>
            <Link href={'/contact'}>Contato</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>UEMA</ListHeader>
            <Link href={'https://www.uema.br/'}>Site</Link>
            <Link href={'https://uemanet.uema.br/'}>UEMA Net</Link>
            <Link href={'http://www.biblioteca.uema.br/'}>Biblioteca</Link>
          </Stack>

          <Stack align={'flex-end'}>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'https://twitter.com/UemaOficial'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'https://www.youtube.com/channel/UC75nEe_agWiU6KdeWDpWHRA'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/uemaoficial/'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© {anoAtual} Desenvolvido por <a target='_blank' rel="noreferrer" href='https://viniciussk888.github.io/'>Vinicius Martins</a> e <a target="_blank" rel="noreferrer" href='https://github.com/livia-oliveira'>Livia Oliveira</a>. Todos os direitos reservados</Text>
        </Container>
      </Box>
    </Box>
  );
}