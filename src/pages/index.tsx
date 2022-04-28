/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-page-custom-font */
import { Box, Button, Container, Heading, Icon, Skeleton, Spinner, Stack, Text, useMenuState } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardBlog from "../components/CardBlog";
import NavBarBlog from "../components/NavBarBlog";
import FooterBlog from '../components/FooterBlog';
import { api_atema } from "../services/api";
import Head from "next/head";

interface Post {
    author: string;
    content: string;
    created_at: string;
    id: number;
    image: string;
    title: string;
    updated_at: string;
}

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await api_atema.get('/post');
            if (response.status === 200) {
                setPosts(response.data)
            }
        }
        fetchData();
    }, [])

    if (posts.length === 0) {
        return (
            <NavBarBlog>
                <Box marginTop='30vh' display="flex" alignItems='center' justifyContent='center'>
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='green.500'
                        size='xl'
                    />
                </Box>
            </NavBarBlog>
        )
    }

    return (
        <>
            <NavBarBlog>
                <>
                    <Head>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                            rel="stylesheet"
                        />
                    </Head>

                    <Container maxW={'3xl'}>
                        <Stack
                            as={Box}
                            textAlign={'center'}
                            spacing={{ base: 6, md: 4 }}
                            py={{ base: 15, md: 20 }}>
                            <Heading
                                fontWeight={600}
                                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                                lineHeight={'110%'}>
                                ATEMA {' '}
                                <Text as={'span'} color={'green.400'}>
                                    MA
                                </Text>
                            </Heading>
                            <Text color={'gray.500'}>
                                Monetize your content by charging your most loyal readers and reward
                                them loyalty points. Give back to your loyal readers by granting
                                them access to your pre-releases and sneak-peaks.
                            </Text>
                        </Stack>
                    </Container>
                </>
                <Box overflow="auto"
                    display="grid"
                    gridGap="1.5rem"
                    gridTemplateColumns="repeat(auto-fit, minmax(400px, 1fr))"
                    gridAutoRows="minmax(200px, auto)">
                    {posts.map(post => (
                        <CardBlog key={post.id} author={post.author} content={post.content} created_at={post.created_at} id={post.id} title={post.title} image={post.image} updated_at={post.updated_at} />
                    ))}
                </Box>
            </NavBarBlog>
            <br />
            <FooterBlog />
        </>
    );
}

export default Blog;