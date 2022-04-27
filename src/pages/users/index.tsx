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
import { useState, useEffect } from "react";
import Link from "next/link";
import { RiAddLine, RiPencilLine, RiDeleteBin3Line } from "react-icons/ri";
import { Layout } from "../../components/Layout";
import { api_atema } from "../../services/api";
import { useUserSession } from "../../contexts/UserContext";
import { useAlert } from "../../contexts/AlertContext";

interface User {
  id: number;
  username: string;
  email: string;
  admin: boolean;
  insert: boolean;
  update: boolean;
  blog: boolean;
}

export default function Users() {
  const { token } = useUserSession();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const [users, setUsers] = useState<User[]>([]);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const { setMessage, setOpenAlert } = useAlert();

  useEffect(() => {
    async function fetchData() {
      const response = await api_atema.get("/users", config);
      console.log(response.data);
      if (response.status === 200) {
        setUsers(response.data);
      }
    }
    fetchData();
  }, []);

  const deleteUser = async (id) => {
    try {
      const response = await api_atema.delete(`/users/${id}`, config);
      if (response.status === 200) {
        setOpenAlert(true);
        setMessage("O usuário foi excluído");
      }
    } catch (erro) {
      console.log(erro);
    }
  };

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
                <Th>Nome de usuário</Th>
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
                    <Text colorScheme="bold">{user.username}</Text>
                  </Td>
                  <Td px={["4", "4", "6"]}>{user.email}</Td>
                  <Td px={["4", "4", "6"]}>{user.admin ? "SIM" : "NÃO"}</Td>
                  <Td px={["4", "4", "6"]}>{user.insert ? "SIM" : "NÃO"}</Td>
                  <Td px={["4", "4", "6"]}>{user.update ? "SIM" : "NÃO"}</Td>
                  <Td px={["4", "4", "6"]}>{user.blog ? "SIM" : "NÃO"}</Td>
                  <Td px={["4", "4", "6"]}>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="red"
                      leftIcon={<Icon as={RiDeleteBin3Line} fontSize="16" />}
                      onClick={() => deleteUser(user.id)}
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
