import { CardPost } from '@/components/elements/card-post';
import { PageTemplate } from '@/components/templates';
import { useHomeContext } from '@/core/contexts';
import { useEffect } from 'react';
import { MorePostsButton } from './components/more-posts-bottom';

export const HomeView = () => {
  const { postList, numberPage, getPostsList } = useHomeContext();

  useEffect(() => {
    getPostsList();
  }, [numberPage]);

  return (
    <PageTemplate title="Home">
      {postList &&
        postList.map(item => <CardPost key={item?.slug} {...item} />)}

      <MorePostsButton />
    </PageTemplate>
  );
};
