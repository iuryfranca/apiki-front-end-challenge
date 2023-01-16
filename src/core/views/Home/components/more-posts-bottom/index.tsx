import { useHomeContext } from '@/core/contexts';
import { Wrapper, Button } from './style';

type textButton = {
  textLoading: string;
};

export const MorePostsButton = ({ textLoading }: textButton) => {
  const { loadingData, incrementPageNumber } = useHomeContext();

  return (
    <Wrapper>
      <Button loading={loadingData} onClick={incrementPageNumber}>
        {loadingData ? textLoading : 'More Posts'}
      </Button>
    </Wrapper>
  );
};
