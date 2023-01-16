import { CardPost } from '@/components/elements/card-post';
import { PageTemplate } from '@/components/templates';
import { useHomeContext } from '@/core/contexts';
import { useEffect, useMemo } from 'react';
import { MorePostsButton } from './components/more-posts-bottom';

export const HomeView = () => {
  const { postList, numberPage, getPostsList } = useHomeContext();

  // const test = useMemo(() => getPostsList(), [numberPage]);
  // console.log(test);

  useEffect(() => {
    getPostsList();
  }, [numberPage]);

  return (
    <PageTemplate title="Home">
      {postList &&
        postList.map((item, idx) => <CardPost key={idx} {...item} />)}

      <MorePostsButton textLoading="Loading Posts" />
    </PageTemplate>
  );
};
