import { Box, Button, Checkbox, Divider, Flex, Heading, HStack, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Input } from '../../components/form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Layout } from '../../components/Layout'
import { api_atema } from '../../services/api'
import { useAlert } from '../../contexts/AlertContext'
import Router from 'next/router'

type CreateUserData = {
  username: string
  email: string
  password: string
  password_confirm?: string
  admin: boolean;
  criar: boolean;
  alterar: boolean;
  blog: boolean;
  
}

const createUserSchema = yup.object().shape({
  username: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória").min(6, "No mínimo 6 caracteres"),
  password_confirm: yup.string().oneOf([
    null, yup.ref("password")
  ], "As senhas precisam ser iguais")
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserSchema)
  })

  const { setMessage, setOpenAlert } = useAlert()

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserData> = async (data) => {
    try {
      delete data.password_confirm
      const response = await api_atema.post('/users',data);
      if(response.status===200){
        setOpenAlert(true)
        setMessage('Usuário cadastrado com sucesso')
        return Router.back()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.50"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="username"
                label="Nome de usuário"
                error={errors?.username}
                {...register("username")}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors?.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                error={errors?.password}
                {...register("password")}
              />
              <Input
                name="password_confirm"
                type="password"
                label="Confirmação de senha"
                error={errors?.password_confirm}
                {...register("password_confirm")}
              />
            </SimpleGrid>

            <SimpleGrid w="100%">
              <Text>Permissões</Text>
              <Stack mt={2} spacing={5} direction='row'>
                <Checkbox
                name="insert"
                {...register("insert")}
                >
                  Criar
                </Checkbox>
                <Checkbox
                name="update"
                {...register("update")}
                >
                  Alterar
                </Checkbox>
                <Checkbox
                name="blog"
                {...register("blog")}
                >
                  Blog
                </Checkbox>
                <Checkbox
                name="admin"
                {...register("admin")}
                >
                  Admin
                </Checkbox>
              </Stack>
            </SimpleGrid>

          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button
                  as="a"
                  backgroundColor='red.400'
                  colorScheme="red.900"
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                backgroundColor='green.400'
                colorScheme="green.400"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
    </Layout>
  )
}
