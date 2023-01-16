import { PostProvider, usePostContext } from '@/core/contexts';
import { PostView } from '@/core/views/Posts';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Post = () => {
  const { setSlugUrl } = usePostContext();
  const router = useRouter();
  const slug = router.query.slug;

  useEffect(() => {
    setSlugUrl(slug);
  });
  return <PostView />;
};

export default Post;
