import { AppLayout } from '@/components/modules';
import { HomeProvider, PostProvider } from '@/core/contexts';
import { AppProps } from 'next/app';
import { globalStyles } from 'stitches.config';

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return (
    <AppLayout>
      <HomeProvider>
        <PostProvider>
          <Component {...pageProps} />;
        </PostProvider>
      </HomeProvider>
    </AppLayout>
  );
};
export default App;
