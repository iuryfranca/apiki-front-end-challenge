import { useHomeContext, usePostContext } from '@/core/contexts';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MorePostsButton } from '../Home/components/more-posts-bottom';
import { Wrapper, WrapperContent, WrapperImage, WrapperTitle } from './style';

export const PostView = () => {
  const { postContent, getPostsContent } = usePostContext();
  const { loadingData } = useHomeContext();

  const router = useRouter();

  const { slug } = router.query;

  const imageLoader = () => {
    return `${postContent?.image?.src}?w=${570}&q=${75}`;
  };

  useEffect(() => getPostsContent(slug as string), [slug]);
  return (
    <>
      <title>{(!loadingData && postContent?.title) || 'Blog'}</title>
      {!!loadingData && <MorePostsButton textLoading="Loading Blog" />}
      {!loadingData && !!postContent && (
        <Wrapper>
          <WrapperImage>
            <Image
              src={postContent?.image?.src}
              alt={postContent?.image?.alt}
              style={{ objectFit: 'cover' }}
              loader={imageLoader}
              fill
            />
          </WrapperImage>
          <WrapperTitle>
            <h1>{postContent?.title}</h1>
          </WrapperTitle>
          <WrapperContent
            dangerouslySetInnerHTML={{ __html: postContent.content }}
          />
        </Wrapper>
      )}
    </>
  );
};
