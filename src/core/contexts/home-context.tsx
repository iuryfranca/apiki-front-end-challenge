import { createContext, useContext, useState } from 'react';

type HomeContextData = {
  postList: string[];
  getPostsList: () => void;
};

export type ImagePost = {
  src: string;
  alt: string;
  size: number[];
};

export type CardPostProps = {
  image: ImagePost;
  title: string;
  slug: string;
};

export const HomeContext = createContext({} as HomeContextData);

export function HomeProvider({ children }) {
  const [postList, setPostList] = useState([]);

  function getPostsList() {
    fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
      .then(response => response.json())
      .then(data => setPostList(data));
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
}

export const useHomeContext = () => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error('useHomeContext must be used within a HomeProvider');
  }

  return context;
};
