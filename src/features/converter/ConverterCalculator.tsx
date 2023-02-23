import React, { useEffect, useState } from 'react';
import getCalculatedChange from './utils/getCalculatedСhange';
import { IConverterRow, ICurrencySide } from './types';
import { useAppSelector } from '../../app/hooks';
import { selectCurrencyList } from './converterSlice';
import MuiButton from '../../components/shared/MuiIconButton';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import MuiSelect from '../../components/shared/MuiSelect';
import MuiInput from '../../components/shared/MuiInput';
import { useMediaQuery } from '@mui/material';
import { SwapVert } from '@mui/icons-material';

const ConverterCalculator = ({ curTable }: { curTable: Array<IConverterRow> }) => {
   const matches = useMediaQuery('(min-width:368px)');
   const curList = useAppSelector(state => selectCurrencyList(state))
   const [currencyDataGet, setCurrencyDataGet] = useState<ICurrencySide>(
      {
         value: 0,
         currency: 'USD'
      })

   const [currencyDataChange, setCurrencyDataChange] = useState<ICurrencySide>(
      {
         value: 0,
         currency: 'UAH'
      })

   useEffect(() => {
      const changeValue = getCalculatedChange(curTable, {
         valueGet: currencyDataGet.value,
         currencyGet: currencyDataGet.currency,
         currencyChange: currencyDataChange.currency
      })
      setCurrencyDataChange((prev) => ({ ...prev, value: changeValue }))
   }, [curTable, currencyDataGet.currency, currencyDataChange.currency, currencyDataGet.value])

   const handleClickChangeSides = (e: any) => {
      const { value: valGet, currency: curGet } = currencyDataGet
      const { value: valChange, currency: curChange } = currencyDataChange
      setCurrencyDataGet({
         value: valChange,
         currency: curChange
      })
      setCurrencyDataChange({
         value: valGet,
         currency: curGet
      })
   }

   return (
      <section className="convertor">
         <div className="convertor-group">
            <MuiInput label='Get' id='currencyGet' value={currencyDataGet.value} type="number" onChange={(value) => {
               setCurrencyDataGet(prev => ({ ...prev, value }))
            }} />
            <MuiSelect data={curList} value={currencyDataGet.currency} onChange={(currency: any) => {
               setCurrencyDataGet(prev => ({ ...prev, currency }))
            }
            } />
         </div>

         <MuiButton onClick={handleClickChangeSides} label='Change direction' size='medium' color='info'>
            {matches ? <SyncAltIcon /> : <SwapVert />}
         </MuiButton>
         <div className="convertor-group">
            <MuiInput label='Change' readOnly id='currencyChange' value={currencyDataChange.value} type="number" onChange={(value) => {
               setCurrencyDataChange(prev => ({ ...prev, value }))
            }
            } />
            <MuiSelect data={curList} value={currencyDataChange.currency} onChange={(currency: any) => {
               setCurrencyDataChange(prev => ({ ...prev, currency }))
            }
            } />
         </div>
      </section>
   );
};

export default ConverterCalculator;