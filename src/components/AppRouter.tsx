import React from 'react';
import { Route, Routes } from 'react-router';
import NotFound from '../pages/NotFound';
import Index from '../pages/Index';

const AppRouter = () => {
   return (
      <Routes>
         <Route path='/' element={<Index />} />
         <Route path='*' element={<NotFound />} />
      </Routes>
   );
};

export default AppRouter;