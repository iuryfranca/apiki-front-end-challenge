import { createContext, useContext, useState } from 'react';

type HomeContextData = {
  postList: string[];
};

export const HomeContext = createContext({} as HomeContextData);

export function HomeProvider({ children }) {
  const [postList, setPostList] = useState([]);

  return (
    <HomeContext.Provider
      value={{
        postList,
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
