"use client"
import { NextPage } from 'next';
import { useState } from 'react';

interface Props {}

const CreatePostPage: NextPage<Props> = ({}) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            setTitle('');
            setContent('');
            alert('Post created successfully!');
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post');
        }
    };

    return (
        <div className="mt-36 flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-black border border-gray-300 rounded-md p-2 mb-4"
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="text-black border border-gray-300 rounded-md p-2 mb-4"
                ></textarea>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                    Create Post
                </button>
            </form>
        </div>
    );
};

export default CreatePostPage;
