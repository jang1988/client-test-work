"use client"
import { NextPage } from 'next';
import PostsList from '../components/PostsList';
import { useEffect, useState } from 'react';

interface Props {}


const PostsPage: NextPage<Props> = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function fetchAndAnalyzePosts() {
            try {
                const response = await fetch('https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const xmlData = await response.text();

                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
                
                const items = xmlDoc.querySelectorAll('item');
                const parsedPosts: any = [];

                items.forEach((item) => {
                    const title = item.querySelector('title')?.textContent ?? '';
                    const link = item.querySelector('link')?.textContent ?? '';
                    const description = item.querySelector('description')?.textContent ?? '';
                    parsedPosts.push({ title, link, description });
                });

                setPosts(parsedPosts);
            } catch (error) {
                console.error('Error fetching and analyzing posts:', error);
            }
        }

        
        fetchAndAnalyzePosts();
        const intervalId = setInterval(fetchAndAnalyzePosts, 3600000);

    
        return () => clearInterval(intervalId);
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
