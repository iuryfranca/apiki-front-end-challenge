import { CardPostProps } from '@/core/contexts';
import { format } from 'date-fns';
import {
  ImageWrapper,
  TextWrapper,
  CreatorAndDataWrapper,
  Wrapper,
} from './style';

export const CardPost = ({
  image,
  title,
  slug,
  description,
  creator,
  date,
}: CardPostProps) => {
  const dateFormated = format(new Date(date), 'yyyy/MM/dd');
  return (
    <Wrapper>
      <ImageWrapper src={image?.src} alt={image?.alt} />

      <TextWrapper>
        <h2>{title}</h2>

        <div
          style={{ fontSize: '13px' }}
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <CreatorAndDataWrapper>
          <p>{creator || 'Autor não encontrado'} - </p>
          <p> {dateFormated} </p>
        </CreatorAndDataWrapper>
      </TextWrapper>
    </Wrapper>
  );
};
