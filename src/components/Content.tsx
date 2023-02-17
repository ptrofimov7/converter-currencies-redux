import React from 'react';
import ConverterCalculator from './ConverterCalculator';
import ConverterTable from './ConverterTable';

const Content = () => {
   return (
      <main>
         <ConverterTable />
         <ConverterCalculator />
      </main>
   );
};

export default Content;