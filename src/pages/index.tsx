import { HomeProvider, PostProvider } from '@/core/contexts';
import { HomeView } from '@/core/views/Home';
import { NextPage } from 'next';

const Home: NextPage = () => <HomeView />;

export default Home;
