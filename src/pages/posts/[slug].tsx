import { PostProvider } from '@/core/contexts';
import { PostView } from '@/core/views/Posts';

const Post = () => {
  return (
    <PostProvider>
      <PostView />;
    </PostProvider>
  );
};

export default Post;
