import React from 'react';
import { Route, Routes } from 'react-router';
import NotFound from '../pages/NotFound';
import Index from '../pages/Index';
import MainLayout from '../layouts/MainLayout';

const AppRouter = () => {
   return (
      <MainLayout>
         <Routes>
            <Route path='/' element={<Index />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </MainLayout>
   );
};

export default AppRouter;