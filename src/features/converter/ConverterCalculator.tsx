import React, { useEffect, useState } from 'react';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import Select from '../../components/shared/Select';
import getCalculatedChange from './utils/getCalculatedСhange';
import { IConverterRow, ICurrencySide } from './types';
import { useAppSelector } from '../../app/hooks';
import { selectCurrencyList } from './converterSlice';

const ConverterCalculator = ({ curTable }: { curTable: Array<IConverterRow> }) => {

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
         value: currencyDataGet.value,
         currencyGet: currencyDataGet.currency,
         currencyChange: currencyDataChange.currency
      })
      setCurrencyDataChange((prev) => ({ ...prev, value: changeValue }))
   }, [curTable, currencyDataGet.currency, currencyDataChange.currency, currencyDataGet.value])

   const handleClickConvert = (e: any) => {
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
            <Input label='Get' id='currency1' value={currencyDataGet.value} type="number" onChange={(value) => {
               setCurrencyDataGet(prev => ({ ...prev, value }))
            }
            } />
            <Select data={curList} value={currencyDataGet.currency} onChange={(currency: any) => {
               setCurrencyDataGet(prev => ({ ...prev, currency }))
            }
            } />
         </div>
         <Button onClick={handleClickConvert}>Conv.</Button>
         <div className="convertor-group">
            <Input label='Change' readOnly id='currency2' value={currencyDataChange.value} type="number" onChange={(value) => {
               setCurrencyDataChange(prev => ({ ...prev, value }))
            }
            } />
            <Select data={curList} value={currencyDataChange.currency} onChange={(currency: any) => {
               setCurrencyDataChange(prev => ({ ...prev, currency }))
            }
            } />
         </div>
      </section>
   );
};

export default ConverterCalculator;