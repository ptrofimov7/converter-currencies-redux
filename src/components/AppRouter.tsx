import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import NotFound from '../pages/NotFound';
import Index from '../pages/Index';

const AppRouter = () => {
   return (
      <Routes>
         <Route path='/' element={<Index />} />
         <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
      </Routes>
   );
};

export default AppRouter;