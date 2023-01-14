import { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

type HomeContextData = {
  postList: CardPostProps[];
  getPostsList: () => void;
};

export type ImagePost = {
  src: string;
  alt: string;
};

export type CardPostProps = {
  title: string;
  image: ImagePost;
  slug: string;
  description: string;
  creator: string;
  date: string;
};

export const HomeContext = createContext({} as HomeContextData);

export const HomeProvider: React.FC<Props> = ({ children }) => {
  const [postList, setPostList] = useState<CardPostProps[]>([]);

  function getPostsList() {
    fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
      .then(response => response.json())
      .then(data => {
        const formattedPostList: CardPostProps[] = data?.map(item => ({
          title: item?.title?.rendered,
          image: {
            src: item?._embedded?.['wp:featuredmedia'][0]?.source_url,
            alt: item?.slug,
          },
          slug: item?.slug,
          description: item?.excerpt?.rendered,
          creator: item?._embedded?.author[0]?.name,
          date: item?.date,
        }));

        setPostList(formattedPostList);
      });
  }

  return (
    <HomeContext.Provider
      value={{
        postList,
        getPostsList,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error('useHomeContext must be used within a HomeProvider');
  }

  return context;
};
