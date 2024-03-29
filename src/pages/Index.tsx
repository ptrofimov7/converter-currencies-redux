import React from 'react';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import ConverterCalculator from '../features/converter/ConverterCalculator';
import ConverterTable from '../features/converter/ConverterTable';
import MainLayout from '../layouts/MainLayout';

function ConverterApp() {
   const { status, data: curTable, error } = useAppSelector(state => state.converter, shallowEqual)
   const isLoading = status === 'loading'
   const isError = status === 'failed'
   return (
      <MainLayout>
         {isLoading
            ? <div>Loading ...</div>
            : isError ?
               <div>
                  {/* <a href='https://cors-anywhere.herokuapp.com' target='_blank' rel="noreferrer">Allow cors for getting requests</a> */}
                  <div>{error ? 'Error: ' + error + '. ' : ''} Something went wrong!</div>
               </div>
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
