import { CardPost } from '@/components/elements/card-post';
import { PageTemplate } from '@/components/templates';
import { useHomeContext } from '@/core/contexts';
import { useEffect } from 'react';
import { MorePostsButton } from './components/more-posts-bottom';

export const HomeView = () => {
  const { postList, numberPage, getPostsList } = useHomeContext();

  useEffect(() => {
    if (postList.length < 1) {
      getPostsList();
    }
  }, []);

  return (
    <PageTemplate title="Home">
      {postList &&
        postList.map((item, idx) => <CardPost key={idx} {...item} />)}

      <MorePostsButton textLoading="Loading Posts" />
    </PageTemplate>
  );
};
