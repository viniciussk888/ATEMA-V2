import { stringOrNumber } from "@chakra-ui/core";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

interface registerType {
  created_at: string;
  id: number;
  name: string;
  updated_at: string;
}

interface props {
  title: string;
  registers: registerType[];
}

export function PainelRegister({ title, registers }: props) {
  const [isWideVersion, setisWideVersion] = useState(false);
  const size = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    setisWideVersion(size);
  }, [size]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      borderRadius="8"
      bg="gray.50"
      p="8"
      w={isWideVersion ? "48%" : "100%"}
      mb="8"
    >
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="md" fontWeight="normal">
          {title}
        </Heading>
        <Box fontWeight="semibold" letterSpacing="wide" fontSize="lg">
          Total de {registers.length} registros
        </Box>
      </Flex>
      <Flex mb="2" justify="space-between" align="center">
        <Input placeholder="Adicionar novo" size="md" />
        <Button
          as="a"
          size="md"
          fontSize="md"
          backgroundColor="green.400"
          colorScheme="green.400"
          m="2"
        >
          Criar
        </Button>
      </Flex>
      <Box overflow="auto" height="250px">
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              {registers.map((register) => (
                <Tr key={register.id}>
                  <Td>{register.name}</Td>
                  <Td isNumeric>
                  <Button
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
        </TableContainer>
      </Box>
    </Box>
  );
}
