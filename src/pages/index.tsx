import { Box, Skeleton, Spinner, Stack, useMenuState } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardBlog from "../components/CardBlog";
import NavBarBlog from "../components/NavBarBlog";
import { api_atema } from "../services/api";

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
        <NavBarBlog>
            <Box overflow="auto"
                display="grid"
                gridGap="1.5rem"
                gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                gridAutoRows="minmax(200px, auto)">
                {posts.map(post => ( 
                    <CardBlog key={post.id} author={post.author} content={post.content} created_at={post.created_at} id={post.id} title={post.title} image={post.image} updated_at={post.updated_at} />
                ))}
            </Box>
        </NavBarBlog>
    );
}

export default Blog;