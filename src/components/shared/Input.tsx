import React from 'react';

type InputProps = {
   label: string,
   id: string,
   type: string,
   value: string | number,
   readOnly?: boolean,
   onChange: (v: any) =>  void
}

const Input = ({label, id, type, value, readOnly = false, onChange}: InputProps) => {
   return (
      <div className='custom-input'>
         <label htmlFor={id}>{label}</label>
         <input type={type} readOnly={readOnly} id={id} placeholder='Summa' value={value} onChange={(e) => {
            onChange(e.target.value)
         }} />
      </div>
   );
};

export default Input;