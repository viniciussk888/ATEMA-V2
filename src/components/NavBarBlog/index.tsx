import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    Divider,
} from '@chakra-ui/react';
import { FaWindowClose, FaBars } from 'react-icons/fa';
import { Logo } from '../Header/Logo';


const Links = [
    {
        name: 'Blog',
        href: '/',
    },
    {
        name: 'Sobre',
        href: '/about',
    },
    {
        name: 'Contato',
        href: '/contact',
    }
];

const NavLink = ({ links }) => {
    return (
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.50', 'gray.700'),
            }}
            href={links.href}>
            {links.name}
        </Link>
    )
};

const NavBarBlog: React.FC = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue('white', 'gray.800')} px={10} borderBottom={1}
                borderStyle={'solid'} borderColor={useColorModeValue('gray.50', 'gray.900')}>
                <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'lg'}
                        icon={isOpen ? <FaWindowClose size={30} /> : <FaBars size={30} />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box><Logo /></Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((item) => (
                                <NavLink key={item.name} links={item} />
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button as='a' href='/login' color="white" backgroundColor="green.400" colorScheme='green.100'>Entrar no sistema</Button>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((item) => (
                                <NavLink key={item.name} links={item} />
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>

            <Box p={4}>{children}</Box>
        </>
    )
}

export default NavBarBlog;