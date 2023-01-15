import { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

type HomeContextData = {
  postList: CardPostProps[];
  numberPage: number;
  loadingData: boolean;
  getPostsList: () => void;
  incrementPageNumber: () => void;
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
  const [numberPage, setNumberPage] = useState<number>(1);
  const [loadingData, setLoadingData] = useState<boolean>(false);

  function getPostsList() {
    const pageRequest = numberPage ? `&page=${numberPage}` : '';

    setLoadingData(true);

    setTimeout(() => {
      fetch(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518${pageRequest}`,
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          const lastPostList = postList;
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

          const finalPostList = lastPostList.concat(formattedPostList);

          setPostList(finalPostList);
        })
        .finally(() => {
          setLoadingData(false);
        });
    }, 2000);
  }

  function incrementPageNumber() {
    setNumberPage(numberPage + 1);
  }

  return (
    <HomeContext.Provider
      value={{
        postList,
        numberPage,
        loadingData,
        getPostsList,
        incrementPageNumber,
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
