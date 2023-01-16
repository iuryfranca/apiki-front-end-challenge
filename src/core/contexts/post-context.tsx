import { useRouter } from 'next/router';
import { createContext, Dispatch, useContext, useState } from 'react';
import { ImagePost } from './home-context';

interface Props {
  children: React.ReactNode;
}

type PostContentProps = {
  title: string;
  image: ImagePost;
  content: string;
};

type PostContextData = {
  slugUrl: string;
  postContent: PostContentProps;
  setSlugUrl: Dispatch<string>;
  getPostsContent: () => void;
};

export const PostContext = createContext({} as PostContextData);

export const PostProvider: React.FC<Props> = ({ children }) => {
  const [postContent, setPostContent] = useState<PostContentProps>();
  const [slugUrl, setSlugUrl] = useState<string>('');

  const router = useRouter();

  function getPostsContent() {
    console.log('slugUrl', slugUrl);
    fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slugUrl}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const formattedPostContent: PostContentProps = {
          title: data[0]?.title?.rendered,
          image: {
            src: data[0]?._embedded?.['wp:featuredmedia'][0]?.source_url,
            alt: data[0]?.slug,
          },
          content: data[0]?.content?.rendered,
        };

        setPostContent(formattedPostContent);
      });
  }

  return (
    <PostContext.Provider
      value={{
        slugUrl,
        postContent,
        setSlugUrl,
        getPostsContent,
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
