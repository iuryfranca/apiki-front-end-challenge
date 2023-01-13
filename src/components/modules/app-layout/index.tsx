import { ReactNode} from 'react';
import { Header, Bottom } from '../';
import {AppLayoutWrapper} from "./styes";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <AppLayoutWrapper>
      <Header/>
      {children}
      <Bottom/>
    </AppLayoutWrapper>
  )
}