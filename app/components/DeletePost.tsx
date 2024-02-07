"use client"
import { NextPage } from 'next';
import { useState } from 'react';

interface Props {}

const DeletePostPage: NextPage<Props> = ({}) => {

    const [postId, setPostId] = useState('');

    // Обработчик для удаления поста
    const handleDelete = async () => {
        try {
            // Отправка запроса на сервер для удаления поста с использованием postId
            const response = await fetch(`http://localhost:5000/api/posts/${postId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete post');
            }

            // Очистка состояния postId после успешного удаления
            setPostId('');
            alert('Post deleted successfully!');
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('Failed to delete post');
        }
    };

    return (
        <div className="mt-36 flex flex-col items-center justify-center">
            <input
                type="text"
                placeholder="Post ID"
                value={postId}
                onChange={(e) => setPostId(e.target.value)}
                className="text-black border border-gray-300 rounded-md p-2 mb-4"
            />
            <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded-md">
                Delete Post
            </button>
        </div>
    );
};

export default DeletePostPage;
