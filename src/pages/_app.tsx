import { AppLayout } from '@/components/modules';
import { AppProps } from 'next/app';
import { globalStyles } from 'stitches.config';

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return (
    <AppLayout>
      <Component {...pageProps} />;
    </AppLayout>
  );
};
export default App;
