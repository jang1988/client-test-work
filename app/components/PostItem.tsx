"use client"
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface Props {
    post: Post;
}

const PostsItem: FC<Props> = ({ post }) => {
    const router = useRouter()
    return (
        <div className="cursor-pointer m-3 p-3 border border-blue-100 rounded-lg" onClick={() => router.push('/posts/' + post._id)}>
            <h2>{post.title}</h2>
        </div>
    );
};

export default PostsItem;
