import { CardPostProps } from '@/core/contexts';
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
  const formatterDate = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

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
          <p> {formatterDate.format(new Date(date))} </p>
        </CreatorAndDataWrapper>
      </TextWrapper>
    </Wrapper>
  );
};
