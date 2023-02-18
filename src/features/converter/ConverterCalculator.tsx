import React, { useState } from 'react';
import { Currencies, CurrencySide } from '../../types';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import Select from '../../components/shared/Select';

const ConverterCalculator = () => {

   const data: Currencies = [
      {
         value: 'USD'
      },
      {
         value: 'UAH'
      },
      {
         value: 'EUR'
      },
   ]

   const [currencyDataFrom, setCurrencyDataFrom] = useState<CurrencySide>(
      {
         value: 0,
         currency: 'USD'
      })

   const [currencyDataTo, setCurrencyDataTo] = useState<CurrencySide>(
      {
         value: 0,
         currency: 'UAH'
      })

   const handleClickConvert = (e: any) => {
      const { value: valFrom, currency: curFrom } = currencyDataFrom
      const { value: valTo, currency: curTo } = currencyDataTo
      setCurrencyDataFrom({
         value: valTo,
         currency: curTo
      })
      setCurrencyDataTo({
         value: valFrom,
         currency: curFrom
      })
   }

   return (
      <section className="convertor">
         <div className="convertor-group">
            <Input label='Get' id='currency1' value={currencyDataFrom.value} type="number" onChange={(value) =>
               setCurrencyDataFrom(prev => ({ ...prev, value }))
            } />
            <Select data={data} value={currencyDataFrom.currency} onChange={(currency: any) =>
               setCurrencyDataFrom(prev => ({ ...prev, currency }))
            } />
         </div>
         <Button onClick={handleClickConvert}>Conv.</Button>
         <div className="convertor-group">
            <Input label='Change' id='currency2' value={currencyDataTo.value} type="number" onChange={(value) =>
               setCurrencyDataTo(prev => ({ ...prev, value }))
            } />
            <Select data={data} value={currencyDataTo.currency} onChange={(currency: any) =>
               setCurrencyDataFrom(prev => ({ ...prev, currency }))
            } />
         </div>
      </section>
   );
};

export default ConverterCalculator;