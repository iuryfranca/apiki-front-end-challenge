import { CardPost } from '@/components/elements/card-post';
import { PageTemplate } from '@/components/templates';
import { useHomeContext } from '@/core/contexts';
import { useEffect } from 'react';

export const HomeView = () => {
  const { postList, getPostsList } = useHomeContext();

  useEffect(() => {
    getPostsList();
  }, []);

  return (
    <PageTemplate title="Home">
      {postList &&
        postList.map(item => <CardPost key={item?.slug} {...item} />)}
    </PageTemplate>
  );
};
