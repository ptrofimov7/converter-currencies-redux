import React from 'react';
import { Currencies } from '../../types';

type SelectProps = {
   data: Currencies,
   value: string | number,
   onChange: (value: string | number) => void
}

const Select = ({data, value, onChange}: SelectProps) => {
   return (
      <select className='custom-select' value={value} onChange={(e) => {
         onChange(e.target.value)
      }}>
         {
            data.map(el => {
               return (
                  <option value={el.value}>{el.value}</option>
               )
            })
         }
      </select>
   );
};

export default Select;