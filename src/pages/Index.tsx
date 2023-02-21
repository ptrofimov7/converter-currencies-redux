import React from 'react';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import ConverterCalculator from '../features/converter/ConverterCalculator';
import ConverterTable from '../features/converter/ConverterTable';
import MainLayout from '../layouts/MainLayout';

function ConverterApp() {
   const { status, data: curTable } = useAppSelector(state => state.converter, shallowEqual)
   const isLoading = status === 'loading'
   const isError = status === 'failed'
   return (
      <MainLayout>
         {isLoading
            ? <div>Loading ...</div>
            : isError ? <div>Something went wrong!</div>
               : (
                  <>
                     <ConverterTable curTable={curTable} />
                     <ConverterCalculator curTable={curTable} />
                  </>
               )
         }
      </MainLayout>
   );
}

export default ConverterApp;
