import React, { useState } from 'react';

type InputProps = {
   label: string,
   id: string,
   type: string,
   value: string | number,
   onChange: (v: any) =>  void
}

const Input = ({label, id, type, value, onChange}: InputProps) => {
   return (
      <div className='custom-input'>
         <label htmlFor={id}>{label}</label>
         <input type={type} id={id} placeholder='Summa' value={value} onChange={(e) => {
            onChange(e.target.value)
         }} />
      </div>
   );
};

export default Input;