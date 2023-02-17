import React from 'react';
import ConverterCalculator from '../components/ConverterCalculator';
import ConverterTable from '../components/ConverterTable';
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
