import { useHomeContext } from '@/core/contexts';
import { Wrapper, Button } from './style';

export const MorePostsButton = () => {
  const { loadingData, incrementPageNumber } = useHomeContext();

  return (
    <Wrapper>
      <Button loading={loadingData} onClick={incrementPageNumber}>
        {loadingData ? 'Loading Posts' : 'More Posts'}
      </Button>
    </Wrapper>
  );
};
