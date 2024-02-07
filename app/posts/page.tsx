"use client"
import { NextPage } from 'next';
import PostsList from '../components/PostsList';
import { useEffect, useState } from 'react';

interface Props {}

const PostsPage: NextPage<Props> = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('http://localhost:5000/api/posts/');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        fetchPosts();
    }, []);
    return (
        <div className="mt-36 flex flex-col items-center justify-center">
            <h3>Все посты</h3>
            <div>
                <PostsList posts={posts} />
            </div>
        </div>
    );
};

export default PostsPage;
