import React from 'react';

type SelectProps = {
   data: Array<string>,
   value: string | number,
   onChange: (value: string | number) => void
}

const Select = ({ data, value, onChange }: SelectProps) => {
   return (
      <select className='custom-select' value={value} onChange={(e) => {
         onChange(e.target.value)
      }}>
         {
            data.map(el => {
               return (
                  <option key={el} value={el}>{el}</option>
               )
            })
         }
      </select>
   );
};

export default Select;