import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Link,
  Stack,
  Image,
  Box,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../../components/form/Input";
import { supabase } from "../../utils/supabaseClient";
import { Alert } from "../../components/Alert";
import { useContext, useState } from "react";
import Router from "next/router";
import { Logo } from "../../components/Header/Logo";
import { useAlert } from '../../contexts/AlertContext';
import { api_atema } from '../../services/api';
import { useUserSession } from '../../contexts/UserContext';

type SignInFormData = {
  email: string;
  password: string;
};

const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
  const { setNewToken, setNewUser, setNewEmail } = useUserSession()
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const { setMessage, setOpenAlert } = useAlert()

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    setLoading(true);
    try {
      const response = await api_atema.post('sessions', {
        email: data.email,
        password: data.password,
      })
      if (response.status === 200) {
        setNewEmail(data.email)
        setNewToken(response.data[0].token);
        setNewUser(response.data[1]);
        Router.push("/dashboard");
      }
    } catch (err) {
      setOpenAlert(true);
      setMessage("Falha no login, tente novamente.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack as="form" onSubmit={handleSubmit(handleSignIn)} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Box textAlign="center"><Logo /></Box>
          <FormControl id="email">
            <Input
              name="email"
              label="Email"
              error={errors?.email}
              {...register("email", { required: "Campo email obrigatório" })} />
          </FormControl>
          <FormControl id="password">
            <Input
              name="password"
              label="Senha"
              type="password"
              error={errors?.password}
              {...register("password", {
                required: "Campo senha obrigatório",
                maxLength: 2,
              })} />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Lembrar</Checkbox>
              <Link color={'blue.500'}>Esqueceu sua senha?</Link>
            </Stack>
            <Button isLoading={loading} type="submit" backgroundColor='green.400' colorScheme={'green.400'} variant={'solid'}>
              Entrar
            </Button>
          </Stack>
        </Stack>
      </Flex >
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack >
  );
}
