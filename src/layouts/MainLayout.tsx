import React, { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout = ({ children }: { children: ReactNode }) => {
   return (
      <div className='wrapper'>
         <Header />
         <main className='main'>
            {children}
         </main>
         <Footer />
      </div>
   );
};

export default MainLayout;