import React from 'react';
import ConverterCalculator from '../features/converter/ConverterCalculator';
import ConverterTable from '../features/converter/ConverterTable';
import MainLayout from '../layouts/MainLayout';

function ConverterApp() {
   return (
      <MainLayout>
         <ConverterTable />
         <ConverterCalculator />
      </MainLayout>
   );
}

export default ConverterApp;
