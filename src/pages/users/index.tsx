import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Skeleton,
    Stack,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine, RiDeleteBin3Line } from "react-icons/ri";
import { Layout } from "../../components/Layout";

const users = [
    {
        id: 1,
        name: "João",
        email: "sdasd@dsadasd.com",
        admin: true,
        criar: true,
        alterar: true,
        blog: true,
    },
    {
        id: 2,
        name: "João",
        email: "sdasd@dsadasd.com",
        admin: true,
        criar: true,
        alterar: true,
        blog: true,
    },
    {
        id: 3,
        name: "João",
        email: "sdasd@dsadasd.com",
        admin: true,
        criar: true,
        alterar: true,
        blog: true,
    }
]

export default function Users() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Layout>
            <Box flex="1" borderRadius="8" bg="gray.50" p="8">
                <Flex mb="8" justify="space-between" align="center">
                    <Heading size="lg" fontWeight="normal">
                        Usuários
                    </Heading>

                    <Link href="/users/create" passHref>
                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            backgroundColor="green.400"
                            colorScheme="green.400"
                            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                        >
                            Criar novo
                        </Button>
                    </Link>
                </Flex>
                {users.length > 0 ? (
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th>Nome</Th>
                                <Th>Email</Th>
                                <Th>Administrador</Th>
                                <Th>Criar</Th>
                                <Th>Alterar</Th>
                                <Th>Blog</Th>
                                <Th>Ações</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {users.map((user) => (
                                <Tr key={user.id}>
                                    <Td px={["4", "4", "6"]}>
                                        <Text colorScheme="bold">{user.name}</Text>
                                    </Td>
                                    <Td px={["4", "4", "6"]}>{user.email}</Td>
                                    <Td px={["4", "4", "6"]}>{user.admin ? "SIM" : "NÃO"}</Td>
                                    <Td px={["4", "4", "6"]}>{user.criar ? "SIM" : "NÃO"}</Td>
                                    <Td px={["4", "4", "6"]}>{user.alterar ? "SIM" : "NÃO"}</Td>
                                    <Td px={["4", "4", "6"]}>{user.blog ? "SIM" : "NÃO"}</Td>
                                    <Td px={["4", "4", "6"]}>
                                        <Button
                                            as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="red"
                                            leftIcon={<Icon as={RiDeleteBin3Line} fontSize="16" />}
                                        >
                                            Excluir
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                ) : (
                    <Stack>
                        <Skeleton height="40px" />
                        <Skeleton height="40px" />
                        <Skeleton height="40px" />
                        <Skeleton height="40px" />
                        <Skeleton height="40px" />
                    </Stack>
                )}
            </Box>
        </Layout>
    );
}
