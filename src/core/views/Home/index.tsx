import { PageTemplate } from '@/components/templates';
import { useHomeContext } from '@/core/contexts';
import { useEffect } from 'react';

export const HomeView = () => {
  const { postList, getPostsList } = useHomeContext();

  useEffect(() => {
    getPostsList();
  }, []);

  console.log(postList, 'postList');

  return (
    <PageTemplate title="Home">
      <p>Teste</p>
    </PageTemplate>
  );
};
