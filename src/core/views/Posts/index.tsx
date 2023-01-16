import { PageTemplate } from '@/components/templates';
import { usePostContext } from '@/core/contexts';
import { useEffect } from 'react';

export const PostView = () => {
  const { postContent, slugUrl, getPostsContent } = usePostContext();

  useEffect(() => getPostsContent(), [slugUrl]);

  return (
    <PageTemplate title={postContent?.title}>
      <h1>{postContent?.title}</h1>
    </PageTemplate>
  );
};
