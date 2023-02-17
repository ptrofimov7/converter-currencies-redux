import React, { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout = ({ children }: { children: ReactNode }) => {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
};

export default MainLayout;