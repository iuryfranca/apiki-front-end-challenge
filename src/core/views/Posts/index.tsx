import { useHomeContext, usePostContext } from '@/core/contexts';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MorePostsButton } from '../Home/components/more-posts-bottom';

export const PostView = () => {
  const { postContent, getPostsContent } = usePostContext();
  const { loadingData } = useHomeContext();

  const router = useRouter();

  const { slug } = router.query;

  useEffect(() => getPostsContent(slug as string), [slug]);
  return (
    <>
      <title>{(!loadingData && postContent?.title) || 'Blog'}</title>
      {!!loadingData && <MorePostsButton textLoading="Loading Blog" />}
      {!loadingData && !!postContent && (
        <>
          {/* <div
            style={{
              backgroundImage: `url(${postContent?.image?.src})`,
              height: '570px',
              width: '100%',
              margin: '0px 0px',
            }}
          /> */}
          <div
            style={{
              width: '100%',
              height: 570,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Image
              src={postContent?.image?.src}
              style={{ objectFit: 'cover' }}
              fill
              alt="dadada"
            />
          </div>
          <div
            style={{
              margin: '0px auto',

              display: 'flex',
              justifyContent: 'center',

              width: '100%',
              height: '100%',
              padding: '5px',
              marginTop: '30px',
            }}
          >
            <h1>{postContent?.title}</h1>
          </div>
        </>
      )}
    </>
    // </PageTemplate>
  );
};
