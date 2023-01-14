import { CardPostProps } from '@/core/contexts';
import {
  ImageWrapper,
  TextWrapper,
  CreatorAndDataWrapper,
  DescriptionWrapper,
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
  console.log(image);
  return (
    <Wrapper>
      <ImageWrapper src={image?.src} alt={image?.alt} />

      <TextWrapper>
        <h2>{title}</h2>

        <DescriptionWrapper>{description}</DescriptionWrapper>

        <CreatorAndDataWrapper>
          <p>{creator} -</p>
          <p>- {date}</p>
        </CreatorAndDataWrapper>
      </TextWrapper>
    </Wrapper>
  );
};
