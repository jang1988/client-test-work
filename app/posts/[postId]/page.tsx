"use client"
import { NextPage } from 'next';
import { useParams } from 'next/navigation'

import { useEffect, useState } from 'react';

interface Props {}

interface Post {
    _id: string;
    title: string;
    content: string;
}

const PostPage: NextPage<Props> = () => {
    const params = useParams()
    const postId = params.postId
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        async function fetchPost() {
            if (!postId) {
                setPost(null);
                return;
            }
            try {
                const response = await fetch(`http://localhost:5000/api/posts/${postId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        }

        fetchPost();
    }, [postId]);

    return (
        <div>
            {post ? (
                <>
                    <p>_id: {post._id}</p>
                    <p>title: {post.title}</p>
                    <p>content: {post.content}</p>
                </>
            ) : (
                <p>{postId ? 'Loading...' : 'Post ID not provided'}</p>
            )}
        </div>
    );
};

export default PostPage;
