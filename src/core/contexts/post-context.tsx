import { createContext, Dispatch, useContext, useState } from 'react';
import { ImagePost, useHomeContext } from './home-context';

interface Props {
  children: React.ReactNode;
}

type PostContentProps = {
  title: string;
  image: ImagePost;
  content: string;
};

type PostContextData = {
  postContent: PostContentProps;
  getPostsContent: (slug: string) => void;
  setResetPostContent: () => void;
};

export const PostContext = createContext({} as PostContextData);

export const PostProvider: React.FC<Props> = ({ children }) => {
  const [postContent, setPostContent] = useState<PostContentProps>();

  const { setLoadingData } = useHomeContext();

  function getPostsContent(slug: string) {
    setLoadingData(true);

    fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const formattedPostContent: PostContentProps = {
          title: data[0]?.title?.rendered,
          image: {
            src: data[0]?._embedded?.['wp:featuredmedia'][0]?.media_details
              ?.sizes?.['jnews-1140x570']?.source_url,
            alt: data[0]?.slug,
          },
          content: data[0]?.content?.rendered,
        };

        setPostContent(formattedPostContent);
      })
      .finally(() => {
        setTimeout(() => {
          setLoadingData(false);
        }, 1000);
      });
  }

  function setResetPostContent() {
    setPostContent(null);
  }

  return (
    <PostContext.Provider
      value={{
        postContent,
        getPostsContent,
        setResetPostContent,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('usePostContext must be used within a HomeProvider');
  }

  return context;
};
