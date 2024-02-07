import { NextPage } from 'next';
import { Grid, Box } from '@mui/material';
import PostsItem from './PostItem';

interface Props {
    posts: Post[];
}

const PostsList: NextPage<Props> = ({ posts }) => {
    return (
        <Grid container direction="column">
            <Box p={2}>
                {posts.map((post, ind) => (
                    <PostsItem key={ind} post={post}/>
                ))}
            </Box>
        </Grid>
    );
};

export default PostsList;
