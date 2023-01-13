import { HomeProvider } from '@/core/contexts';
import { HomeView } from '@/core/views/Home';
import { NextPage } from 'next';

const Home: NextPage = () => (
  <HomeProvider>
    <HomeView />
  </HomeProvider>
);

export default Home;
