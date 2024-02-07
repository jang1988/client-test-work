import { NextPage } from 'next';
import CreatePostPage from '../components/CreatePost';
import DeletePostPage from '../components/DeletePost';

interface Props {}

const AdminPostsPage: NextPage<Props> = ({}) => {
    return (
        <>
            <CreatePostPage />
            <DeletePostPage />
        </>
    );
};

export default AdminPostsPage;
