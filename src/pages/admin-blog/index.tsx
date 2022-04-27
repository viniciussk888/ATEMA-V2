import { Box, FormControl, FormLabel, Input, Button, Divider, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CardBlog from '../../components/CardBlog';
import { Layout } from '../../components/Layout';
import { useAlert } from '../../contexts/AlertContext';
import { useUserSession } from '../../contexts/UserContext';
import { api_atema } from '../../services/api';

interface Post {
    author: string;
    content: string;
    created_at: string;
    id: number;
    image: string;
    title: string;
    updated_at: string;
}

const AdminBlog: React.FC = () => {
    const { user, token } = useUserSession()
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [loadingPost, setLoadingPost] = useState(false);
    const [file, setFile] = useState<any>('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const { setMessage, setOpenAlert } = useAlert()

    async function handlePost(e) {
        e.preventDefault();
        setLoadingPost(true);
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        if (!title || !text) {
            setLoadingPost(false);
            setOpenAlert(true);
            return setMessage("Informe o titulo e conteudo!");
        }
        try {
            const formData = new FormData();
            formData.append('file', file);
            const response = await api_atema.post('files', formData, config);
            if (!response.data.url) {
                setLoadingPost(false);
                setOpenAlert(true);
                return setMessage("Erro ao fazer upload da imagem!");
            }
            const { data } = await api_atema.post(
                'post',
                {
                    title: title,
                    image: response.data.url,
                    content: text,
                    author: user.username
                }
            );
            setPosts([...posts, data]);
            setFile('');
            setTitle('');
            setText('');
            setOpenAlert(true);
            setMessage("Post criado com sucesso!");

        } catch (error) {
            console.log(error)
        } finally {
            setLoadingPost(false);
        }
    }

    const removePost = (id: number) => {
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts);
    }

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            try {
                const response = await api_atema.get('/post');
                if (response.status === 200) {
                    setPosts(response.data)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [])

    return (
        <Layout>
            <Box>
                <FormControl onSubmit={handlePost} as="form" isRequired>
                    <FormLabel htmlFor='title'>Titulo</FormLabel>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} id='title' placeholder='Escreva o titulo' />

                    <FormLabel htmlFor='Imagem'>Imagem</FormLabel>
                    <Input onChange={(e) => setFile(e.target.files[0])} type='file' id='Imagem' placeholder='Selecione a imagem' />

                    <FormLabel htmlFor='text'>Texto</FormLabel>
                    <Input value={text} onChange={(e) => setText(e.target.value)} as="textarea" height='250' id='text' placeholder='Digite o texto do post' />

                    <Button isLoading={loadingPost} type='submit' color="white" backgroundColor='green.400' colorScheme='green.400'>Enviar</Button>
                </FormControl>
            </Box>
            <Divider mt='10' mb='10' orientation='horizontal' />
            {loading ? <Spinner size='lg' /> :
                <Box
                    mb='10'
                    p='10'
                    overflow="auto"
                    maxHeight={500}
                    display="grid"
                    gridGap="1.5rem"
                    gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                    gridAutoRows="minmax(200px, auto)">
                    {posts.map(post => (
                        <CardBlog removePost={removePost} key={post.id} deleteOption={true} author={post.author} content={post.content} created_at={post.created_at} id={post.id} image={post.image} title={post.title} updated_at={post.updated_at} />
                    ))}
                </Box>
            }

        </Layout>
    );
}

export default AdminBlog;